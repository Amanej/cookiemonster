const http = require('http');
const cookieMonster = require('../lib/index.js');

const server  = http.createServer((req,res) => {
    const parsedCookie = cookieMonster.get(req);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(parsedCookie,null, 3));
});

let port = process.env.PORT || '2020';
server.listen(port,function() {
    console.log(`The server is listening on ${port}`)
})