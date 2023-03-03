// function openDiscord() {
//     console.log("test");
//     window.open("https://discord.gg/hZK5ThmnG3", "_blank");
// }

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});