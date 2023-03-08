const http = require('http');

const server = http.createServer((req, res) => {
    console.log('test server.');
    console.log(req.url);
});

// server.listen(8080); // serverot mozhe da bide pushten da slusha na porta i vo server.js 
// no togash so vkluchuvanje na server.js vo index.js togash vednash ke se pushti.
module.exports = server;