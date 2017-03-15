const fs = require('fs');
const async = require('async');

const logFileAsync = function(filePath, msg, cb) {
    fs.writeFile(filePath, msg + '\n', {
        flag: 'a'
    }, cb);
};

// Callback Hell
/*
logFileAsync('logs/app.log', 'Hello 1', () => {
    logFileAsync('logs/app.log', 'Hello 2', () => {
        logFileAsync('logs/app.log', 'Hello 3', () => {
            logFileAsync('logs/app.log', 'Hello 4', () => {
                console.log('Log done');
            });
        });
    });
});
*/

async.series([
    callback => logFileAsync('logs/app.log', 'Hello 1', callback),
    callback => logFileAsync('logs/app.log', 'Hello 2', callback),
    callback => logFileAsync('logs/app.log', 'Hello 3', callback),
    callback => logFileAsync('logs/app.log', 'Hello 4', callback),
],
(err, results) => {
    console.log('Log done');
});
