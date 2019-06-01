//file system module functionality examples:

const fs = require('fs');
const path = require('path');

//Create folder:

//async version with callback
fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
    if(err) throw err;
    console.log("Folder created");
});

//Create folder sync version:

//fs.mkdirSync()


//Create and write to file:

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello world", err =>{
    if(err) throw err;
    console.log("File written to");
});

//Append file: - can be put in the callback of create file

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ", this is appended", err =>{
    if(err) throw err;
    console.log("File written to");
});

//Read file

//if you don't provide the encoding as the seccond par it gives you the raw data
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
    if(err) throw err;
    console.log(data);
});


//Rename file

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'changedname.txt'),
    err =>{
        if(err) throw err;
        console.log("File renamed");
});




