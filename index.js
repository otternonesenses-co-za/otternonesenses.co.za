// function openDiscord() {
//     console.log("test");
//     window.open("https://discord.gg/hZK5ThmnG3", "_blank");
// }

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer();

app.get('/', (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

server.listen(80, () => {
    console.log('listening on *:3000');
})