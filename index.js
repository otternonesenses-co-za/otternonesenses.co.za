// function openDiscord() {
//     console.log("test");
//     window.open("https://discord.gg/hZK5ThmnG3", "_blank");
// }

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

let messages = [];


const { Server } = require('socket.io');
const { measureMemory } = require('vm');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/chat.html");
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        messages.push(msg);
        io.emit("chat message", msg);
        console.log(messages);
    })

    socket.on('disconnect', (socket) => {
        console.log("a user disconnected");
    });


    socket.on('chat message', (msg) => {
        console.log('Message: ' + msg);
    })
})

server.listen(3000, () => {
  console.log('listening on *:3000/chat.html');
});