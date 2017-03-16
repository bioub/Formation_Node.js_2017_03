const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html'); // MIME Type
    switch (req.url) {
        case '/':
            res.write('<h2>Home page</h2>');
        break;
        case '/contact':
            res.write('<h2>Contact</h2>');
        break;
        default:
            res.statusCode = 404;
            res.write('<h2>404 Not Found</h2>');
    }
    res.end();
});

server.listen(8080, () => {
    console.log('Server started');
});