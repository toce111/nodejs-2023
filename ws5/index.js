require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const jwt = require('express-jwt');
const storage = require('./handlers/storage');
const db = require('./pkg/db');

const api = express();

db.init();

api.use(fileUpload());
api.use(jwt.expressjwt({
    algorithms: ['HS256'],
    secret: process.env.JWT_SECRET
}));

api.post('/api/v1/storage/:user_id', storage.upload);
api.get('/api/v1/user/:file', storage.download);

api.listen(process.env.PORT, err => {
    if (err) return console.log(err);

    console.log(`Successfully started server on port ${process.env.PORT}`);
});