import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'delaneyhanson',
    host: 'localhost',
    database: 'dhanson',
    password: process.env.password,
    port: 2390,
});

router.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    const {title, director, year, plot, rating, haveit, cover} = req.body;
    pool.query('INSERT INTO movies (title, director, year, plot, rating, haveit, cover) VALUES ($1, $2, $3, $4, $5, $6, $7)', [title, director, year, plot, rating, haveit, cover], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Movie added with ID: ${results.insertId}`);
    });
});

router.put('/edit?', function (req, res) {
    const { title, director, year, plot, rating, haveit, cover } = req.body;
    pool.query(
        'UPDATE movies SET title = $1, director = $2, year = $3, plot = $4, rating = $5, haveit = $6, cover = $7 WHERE prim = $8',
        [title, director, year, plot, rating, haveit, cover, req.query.id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`Movie modified with ID: ${req.query.id}`);
        }
    );
});

router.get('/', function (req, res) {
    pool.query('SELECT * FROM movies ORDER BY title ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

router.get('/:id', function (req, res) {
    pool.query('SELECT * FROM movies WHERE prim = $1', [req.params.id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

router.delete('/deleteBy?', function (req, res) {
    pool.query('DELETE FROM movies WHERE prim = $1', [req.query.id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Movie deleted with ID: ${req.query.id}`);
    });
});

module.exports = router;