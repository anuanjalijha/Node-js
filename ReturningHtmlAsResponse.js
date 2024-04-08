const http = require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync('./HTMLFILE/ReturningHtmlAsResponsess.html').toString();
    res.end(data);
});

server.listen(3700);
console.log('Server is listening on port 3700');