//Basic importing example

// const Person = require('./person');

// const person1 = new Person("John", 30);
// console.log(person1.greeting());

//--------------------------------------

//Basic logging example:

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener', data));
// logger.log("Hello world");
// logger.log("Hi");
// logger.log("Test");

//--------------------------------------

//Vanilla web server with pure http and node:

const http  = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //Basic not very efficient way:

    //console.log(req.url);
    //return the actual html page from the public folder
    // if(req.url === "/"){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type' : 'text/html'});
    //         res.end(content);
    //     })
    // }
    // else if(req.url === "/about"){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type' : 'text/html'});
    //         res.end(content);
    //     })
    // }
    // //example of serving json:
    // else if(req.url === "/api/users"){
    //     const users = [
    //         {name: 'Bob Smith', age: 40},
    //         {name: 'John Doe', age: 30},
    //     ];
    //     res.writeHead(200, {'Content-Type' : 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    //Better way:

    //Build file path:
    //anythin being returned 
    let filePath = path.join(__dirname, 'public', req.url === "/" ? 'index.html' : req.url);

    //Extension of the file
    let extName = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html';

    //Check extention and set content type:
    switch(extName){
        case '.js':
            contentType = "text/javascript";
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case 'json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    if(contentType == "text/html" && extName == "") filePath += ".html";

    //Read file:
    fs.readFile(filePath, (err, content) => {
        if(err){
            //page not found
            if(err.code == "ENOENT"){
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.end(content, 'utf-8');
                })
            }else{
                // Some server error - 500
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        //succesfull response:
        }else{
            res.writeHead(200, {'Content-Type' : contentType});
            res.end(content, 'utf-8');
        }
    });

});

//run on the enviroment's port, if not found or availible run on 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));




