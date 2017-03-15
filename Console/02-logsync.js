const fs = require('fs');

const logFileSync = function(filePath, msg) {
    fs.writeFileSync(filePath, msg + '\n', {
        flag: 'a'
    });
};

logFileSync('logs/app.log', 'Hello 1');
logFileSync('logs/app.log', 'Hello 2');
logFileSync('logs/app.log', 'Hello 3');
logFileSync('logs/app.log', 'Hello 4');
console.log('Log done');
