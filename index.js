const http = require('http');
const fs = require('fs');
const port = 4444;

const server = http.createServer( (req,res) => {
    console.log(req.url);
    console.log(req.method);
});

server.listen( port);