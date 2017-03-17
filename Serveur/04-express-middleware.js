const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
/*
app.use((req, res, next) => {
    console.log('URL : ' + req.url);
    next();
});
*/

app.get('/', (req, res, next) => {
    res.send('<h2>Home page</h2>');
});

app.get('/contact', (req, res, next) => {
    res.send('<h2>Contact</h2>');
});

app.get('/erreur', (req, res, next) => {
    next({
        msg: 'Fausse erreur'
    });
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.send('<h2>404 Not Found</h2>');
});

app.use((err, req, res, next) => {
    res.statusCode = 500;
    res.send('<h2>500 Server Error</h2>');
});

app.listen(8080, () => {
    console.log('Server started');
});
