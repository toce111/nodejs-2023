const fs = require('fs');
const express = require('express');
const handlers = require('./handlers');

const app = express();
app.use(express.json());


app.get('/', handlers.home);
app.post('/students', handlers.students);
app.listen(8080, (err) => {
    if(err){
        return console.log(err);
    }

    console.log('server successfully started...');
})