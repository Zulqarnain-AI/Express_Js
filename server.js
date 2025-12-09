const http = require('http');
http.createServer((req,res)=>{
    res.write("this is my first node.js program");
    res.end("hello")
}).listen(4800)