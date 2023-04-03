const express = require('express');
const movies = require('./handlers/movies');
const db = require('./pkg/db');

db.init();

const app = express();

app.use(express.json());

// app get

app.listen(8080, err => {
    if (err) return console.log(err);

    console.log('server is sucessfully starting....')
})