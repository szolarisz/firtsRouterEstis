const http = require('http');
const fs = require('fs');
const port = 4444;

const server = http.createServer( (req,res) => {
    console.log(req.url);
    console.log(req.method);

    //router
    switch(true) {
        case req.url === "/" && req.method === "GET" :
            fs.readFile('index.html', 'utf8', (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url === "/alap.css" && req.method === "GET":

            fs.readFile('alap.css', 'utf8', (err, data) => {
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data);
            })
        break;
        case req.url === "/alap2.css" && req.method === "GET":

            fs.readFile('alap.css', 'utf8', (err, data) => {
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data);
            })
        break;
        default:
            fs.readFile('hiba.html', 'utf8', (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })

    }
});

server.listen( port);

/*
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
*/