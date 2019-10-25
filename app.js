//imports express and cors and fs as well as the DatabaseController you will be making
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import DatabaseController from './controllers/DatabaseController';
//makes a new express app and sets the port to 3001
const app = new express();
const port = 3001;
//makes sure the app uses cors
app.use(cors());
//gets requirements pdf
app.get('/requirements', (req, res) => {
    var filePath = "/files/requirements.pdf";
    fs.readFile(__dirname + filePath, function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
});
//sets the routes for the express app that are defined in the DatabaseController
app.use('/database', DatabaseController);
//listens on the port we defined earlier
app.listen(port, () => console.log(`Listening on port ${port}!`));
//exports the app
module.exports = app;
