// http Server.js

const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type' : 'text-plain'});
    res.end('Hello World\n');
}).listen(8800,()=>{
    console.log("Server listen started",new Date());
});

console.log("Server running", new Date());