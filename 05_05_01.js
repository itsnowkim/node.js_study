const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type' : 'text-plain'});
    res.end('Hello World\n');
}).listen(8800,()=>{
    console.log("Server listen started",new Date());
});

console.log("Server running", new Date());

http.get('http://google.co.kr/',(res)=>{
    let body = '';
    res.on('data', (d)=>{
        body += d;
    });
    res.on('end',()=>{
        console.log("DATA: ", body);
    });
}).on('error',(e)=>{
    console.log("Error :",e);
});