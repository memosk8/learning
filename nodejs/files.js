const fs = require('fs')
const path = require('path')

// file descriptors

// fs.open('./npm.txt', 'r', (err, fd) => {
//    console.log(fd);
// })

const notes = '/home/memosk8/Escritorio/JS repo/master/nodejs/npm.txt';

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt

// try {
//   const fd = fs.openSync(path, 'r')
//   var file = fs.open();
//   console.log(file);
// } catch (err) {
//   console.error(err)
// }

// Every file comes with a set of details that we can inspect using Node.js.
// In particular, using the stat() method provided by the fs module.
// You call it passing a file path, and once Node.js gets the file details 
// it will call the callback function you pass, with 2 parameters: an error message, and the file stats:

fs.stat('./testxt/npm.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //console.log(stats);
  //we have access to the file stats in `stats`
})

// Create a new file using the appendFile() method:

fs.appendFile('./testxt/mynewfile1.txt', '!-', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// Create a new, empty file using the open() method:

fs.open('./testxt/mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
  fs.readFile('./testxt/mynewfile2.txt', (err) => {
    console.log(file.toString()); 
  })
});

// Asynchronously reads the entire contents of a file.

fs. readFile('./testxt/mynewfile1.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console. log(data);
});