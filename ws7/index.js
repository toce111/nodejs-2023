require('dotenv').config();
const express = require('express');
const mailer = require('./handlers/mailer');

const api = express ();
api.use(express.json());

api.post('/api/v1/mailer/welcome', mailer.sendWelcome);
api.post('/api/v1/mailer/sendResetPassword', mailer.sendResetPassword);

api.listen(process.env.PORT, err => {
    if (err) return console.log(err);

    console.log(`Sucessfully started server on port ${process.env.PORT}`)
});