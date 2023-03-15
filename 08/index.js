const express = require('express');
const handlers = require('./handlers')

const app = express();

app.use(express.json());

app.get('/', handlers.home);
app.post('/home', handlers.home_post);
app.post('/games', handlers.games);
app.get('/calc/:operation', handlers.calculator_get);
app.post('/calc/:operation', handlers.calculator_post)
app.patch('/users', handlers.smeni_ime)

app.listen(8080, (err) => {
    if(err) {
        return console.log(err);
    }

    console.log('server successfully started...')
});