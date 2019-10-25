import Database from '../models/Database';
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    Database.insertMany(
        req.body,
        (err, movie) => {
            if (err){
                res.status(500).send(err);
            }else{
                res.status(200).send(movie);
            }
        }
    );
});

router.put('/edit?', function (req, res) {
    Database.findByIdAndUpdate({ '_id': req.query.id }, req.body, { new: true }, (err, movie) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        if (movie) {
            res.status(200).send(movie);
        }
    })
});

router.get('/', function (req, res) {
    Database.find({}).exec((err, movies) => {
        if (err) {
            res.status(500).send(err);
        }
        if (movies.length) {
            res.status(200).send(movies);
        }
    });
});

router.get('/:id', function (req, res) {
    Database.findById({ '_id': req.params.id }, (err, movie) => {
        if (err) {
            res.status(200).send(err);
        }
        if (movie) {
            res.status(200).send(movie);
        }
    });
});

router.delete('/deleteBy?', function (req, res) {
    var queryArr = [];
    if (req.query.id) {
        queryArr.push({ '_id': req.query.id });
    }
    Database.deleteOne({ $or: queryArr }, (err, movies) => {
        if (err) {
            res.status(500).send(err);
        }
        if (movies) {
            console.log('movie has been deleted');
            res.status(200).send(movies);
        }
    })
});

module.exports = router;