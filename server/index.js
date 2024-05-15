const http = require('http');

const server = http.createServer(); //creacion del servidor

const io = require('socket.io')(server, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('A connected client');

    socket.broadcast.emit('chat_message', {
        usuario: 'Info',
        mensaje: 'Un nuovo utente si è connesso'
    })
    socket.on('chat_message', (data) => {
        io.emit('chat_message', data)
    })
});

server.listen(3000); 