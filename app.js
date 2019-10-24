import express from 'express';
import db from './db';
import cors from 'cors';

import fs from 'fs';

import DatabaseController from './controllers/DatabaseController';
const app = new express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/requirements', (req, res) => {
    var filePath = "/files/requirements.pdf";
    fs.readFile(__dirname + filePath, function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.use('/database', DatabaseController);

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports = app;
