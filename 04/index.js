// const path = require('path');

// // get the base filename
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(__filename.split("\\")[__filename.split("\\").length - 1]);

// // Directory name
// console.log(path.dirname(__filename)); 
// console.log(__dirname);  // isto kako pogore primerot path.dirname(__filename)

// // File extension
// console.log(path.extname(__filename));

// console.log(path.parse(__filename)); // --> pravi json file od fajlot.
// console.log(path.parse(__filename).ext); // -- dava ekstenzija od json file

// // concatanate paths
// // ../c4/
// console.log(path.join(__dirname, 'test', 'hello.html'));

const fs = require('fs');
const path = require('path')

// const fileWrite = (filename, data) => {
//     return new Promise((success, fail) => {
//         fs.writeFile(filename, data, err => {
//             if (err) return fail(err);
//             return success();
//         });
//     });
// };

// fileWrite(path.join(__dirname, 'test', 'ocenki.txt'), '4, 5, 3, 2, 1, 5')
//     .then(() => { // then == success
//         console.log("Success!");
//         return fileWrite(path.join(__dirname, 'test', 'boi.txt'), 'crvena, zholta, zelena');
//     }).then(() => { // then == success
//         console.log("Success 2!");
//         return fileWrite(path.join(__dirname, 'test', 'boi2.txt'), 'plava, violetova, zelena');
//     }).catch(err => {
//         console.log(err);
//     });

// const fileRead = (filename, data) => {
//     return new Promise((success, fail) => {
//         fs.readFile(filename, err => {
//             if (err) return fail(err);
//             return success(data);
//         });
//     });
// };

// fileRead(path.join(__dirname, 'test', 'iminja.txt'), 'utf8', (err, data))
//     .then(() => {
//         console.log("file reads: ");
//         return fileRead(data);
//     }).catch(err => {
//         console.log(err)
//     });



const fileRead = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
};

// fileRead(path.join(__dirname, 'test', 'boi2.txt'))
//     .then((data) => {
//         console.log("Promise resolved.");
//         console.log(data);
//     }).catch((err) => {
//         console.log("Promise rejected.");
//         console.log(err);
//     });

(async () => {
    try {
        let ocenki = await fileRead(path.join(__dirname, 'test', 'ocenki.txt'));
        let boi = await fileRead(path.join(__dirname, 'test', 'boi.txt'));
        let boi2 = await fileRead(path.join(__dirname, 'test', 'boi2.txt'));
        console.log('ocenki: ', ocenki);
        console.log('boi: ', boi);
        console.log('boi2: ', boi2);
    } catch (err) {
        console.log(err);
    }
})();