'use strict';
const http = require('http');

let server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end('ok');
});

server.listen(8888)
