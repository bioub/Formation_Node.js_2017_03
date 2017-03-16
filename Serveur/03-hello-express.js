const express = require('express');

const server = express();

server.get('/', (req, res, next) => {
    res.send('<h2>Home page</h2>');
});

server.get('/contact', (req, res, next) => {
    res.send('<h2>Contact</h2>');
});

server.listen(8080, () => {
    console.log('Server started');
});
