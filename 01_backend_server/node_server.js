const http = require('http');

let server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the homepage!\n');
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the about page!\n');
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found!\n');
    }
});

server.listen(3000, '127.0.0.1',()=>{
    console.log('Server is running at http://' + server.address().address + ':' + server.address().port);
})