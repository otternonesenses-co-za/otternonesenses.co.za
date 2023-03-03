// function openDiscord() {
//     console.log("test");
//     window.open("https://discord.gg/hZK5ThmnG3", "_blank");
// }

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', (socket) => {
        console.log("a user disconnected");
    })
})

server.listen(3000, () => {
  console.log('listening on *:3000');
});