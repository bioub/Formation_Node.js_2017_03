const net = require('net');

const server = net.createServer((conn) => {
    console.log('Client connected');

    conn.on('data', (data) => {
        console.log('Data recieved');
    });

    conn.on('close', () => {
        console.log('Client disconnected');
    });

    conn.pipe(conn);
});

server.listen(1234, () => {
    console.log('Server started');
});