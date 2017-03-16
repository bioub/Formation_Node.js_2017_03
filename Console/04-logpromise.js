const fs = require('fs');
const async = require('async');

const logFileAsync = function(filePath, msg, cb) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, msg + '\n', {
            flag: 'a'
        }, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

logFileAsync('logs/app.log', 'Hello 1')
    .then(() => logFileAsync('logs/app.log', 'Hello 2'))
    .then(() => logFileAsync('logs/app.log', 'Hello 3'))
    .then(() => logFileAsync('logs/app.log', 'Hello 4'))
    .then(() => console.log('Log done'))
    .catch((err) => console.error(err.message));
    
/*
Promise.all([
    fetch({
        method: 'GET',
        url: 'file1.json'
    }),
    fetch({
        method: 'GET',
        url: 'file2.json'
    }),
    fetch({
        method: 'GET',
        url: 'file3.json'
    })
]).then(() => {

});
*/