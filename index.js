// function openDiscord() {
//     console.log("test");
//     window.open("https://discord.gg/hZK5ThmnG3", "_blank");
// }

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const Account = require('classes/account.js');

let p1 = new Account("server");

let messages = [];


const { Server } = require('socket.io');
const { measureMemory } = require('vm');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/chat.html");
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('connection', messages);

    socket.on('chat message', (msg) => {
        messages.push(msg);
        io.emit("chat message", msg);
        console.log(messages);
    })

    socket.on('disconnect', (socket) => {
        console.log("a user disconnected");
    });
})

server.listen(3000, () => {
  console.log('listening on *:3000/chat.html');
});