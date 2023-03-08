// let operacija = 'minus';

// if (operacija == 'minus') {
//     console.log('odzemanje');
// } else if (operacija == 'plus') {
//     console.log('dodavanje');
// } else if (operacija == 'mnozhenje') {
//     console.log('mnozhenje');
// } else if (operacija == 'delenje') {
//     console.log('delenje');
// }

// switch (operacija) {
//     case 'plus':
//         console.log('dodavanje');
//         break;
//     case 'minus':
//         console.log('odzemanje');
//         break;
//     case 'mnozhenje':
//         console.log('mnozhenje');
//         break;
//     case 'delenje':
//         console.log('delenje');
//         break;
// }

// let result = {
//     plus: () => {
//         console.log('dodavanje');
//     },
//     minus: () => {
//         console.log('odzemanje');
//     },
//     mnozhenje: () => {
//         console.log('mnozhenje');
//     },
//     delenje: () => {
//         console.log('delenje');
//     }
// };

// let rezultat = result[operacija]();
// console.log(rezultat);

// const student = {
//     ime: 'Pero',
//     prezime: 'Perovski',
//     'horoskopski znak': 'vodolija',
//     apsolvent: false,
//     godina_na_studii: 10,
//     akcija: () => {
//         console.log('Kaj si be Pero be?');
//         return 'PEROOOOOO';
//     }
// };

// console.log(student.ime, student['ime']);

// let prop = 'prezime';
// console.log(student[prop], student.prop);

// console.log(student['horoskopski znak']);
// console.log(student["horoskopski znak"]);
// console.log(student.apsolvent);
// console.log(student.godina_na_studii);
// console.log(student.akcija())
// // let text = 'Zdravo jas sum antonio i ova ni e 7mi chas.';
// // let zbor = 'zdravo';

// // let rezultat = text.toLowerCase().search('zdravo'); // rezultat = 0;
// // if (rezultat === false) {
// //     console.log('zborot ne e pronajden vo tekstot.');
// // } else {
// //     console.log('pozicijata na koja se naogja zborot vo stringot e ' + rezultat);
// // }

const fs = require('fs');
const http = require('http');
const url = require('url');
// const server = require('./server.js');

const fileRead = (filename) => {
    return new Promise((success, failed) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return failed(err);
            return success(data);
        });
    });
};

const render = async (page, data) => {
    let content = await fileRead(`./${page}.html`);
    return content.replace('{{res}}', data);
};

const pages = {
    'home': (req, res) => {
        res.end('home.');
    },

    '/users': (req, res) => {
        res.end('users.');
    },

    '/plus':async(req,res) => {
        let result = `${Number(req.query.a) + Number(req.query.b)}`
        res.end(await render('index', result));
    },
    '/minus':async(req,res) => {
        let result = `${Number(req.query.a) - Number(req.query.b)}`
        res.end(await render('index', result));
    },
    '/delenje':async(req,res) => {
        let result = `${Number(req.query.a) / Number(req.query.b)}`
        res.end(await render('index', result));
    },
    '/mnozenje':async(req,res) => {
        let result = `${Number(req.query.a) * Number(req.query.b)}`
        res.end(await render('index', result));
    }
};

// create server
const server = http.createServer((req, res) => {
    // query parameters ?a=10&b=10
    // parametri se a=10
    // i b=20
    let [path, _] = req.url.split('?');
    if (pages[path]) {
        req.query = url.parse(req.url, true).query;
        pages[path](req, res);
    } else {
        res.writeHead(404, 'not found');
        res.end("this page does not exist.");
    }
    // console.log(path) 
    // console.log('test server.');
    // console.log(req.url);
    // console.log(url.parse(req.url, true).query);
});

// run server.
console.log('server is running.');
server.listen(8080); // dokolku ovde go startuvame serverot imame pogolema kontrola vrz nego.