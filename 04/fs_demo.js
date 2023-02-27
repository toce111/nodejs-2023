const fs = require("fs");
const path = require("path");

// Create a folder in the filesystem
// fs.mkdir(path.join(__dirname, "/test1"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder is created.");
// });

// Create and write to file
// Also append to file
// fs.writeFile(path.join(__dirname, 'test1', 'hello.txt'), 'Dobro vecherrrrrrrrrrr!', err => {
//     if (err) throw err;
//     console.log("file was succesfully created and was written into...");
// })

// Append to a file
// fs.appendFile(path.join(__dirname, 'test1', 'hello.txt'), ' i love node.js!', err => {
//     if(err) throw err;
//     console.log("File was appended to...")
// })

// Read file
// fs.readFile(path.join(__dirname, 'test1', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// Rename file
fs.rename(path.join(__dirname, 'test1', 'hello.txt'), path.join(__dirname, 'test1', 'hello_test.txt'), err => {
    if (err) throw err;
    console.log("The file has been renamed....")
})
