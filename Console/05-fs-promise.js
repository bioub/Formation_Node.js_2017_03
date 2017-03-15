const fs = require('fs-promise');
const path = require('path');

const logPath = path.resolve(__dirname + '/logs/app.log');

fs.appendFile(logPath, 'Hello 1\n', {})
    .then(fs.appendFile(logPath, 'Hello 2\n'))
    .then(fs.appendFile(logPath, 'Hello 3\n'))
    .then(fs.appendFile(logPath, 'Hello 4\n'))
    .then(() => console.log('Log done'));
