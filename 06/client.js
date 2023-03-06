
// var fetch = require('node-fetch');
(async () => {
    try {
        let response = await fetch('https://wikipedia.org');
        let wikipediaContent = await response.text();
        console.log(wikipediaContent);
    } catch (err) {
        console.log(err);
    }
})();