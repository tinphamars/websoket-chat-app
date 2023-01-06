const express = require("express");
const app = express();
const cors = require("cors");

const http = require("http");
const port = 3001;
const Websocket = require("ws");

app.use(cors());
const io = new Websocket.Server({ port: 8082 });

io.on("connection", (ws) => {
  console.log("connected to websocket");
  ws.on("message", (dataMessage) => {
    io.broadcast(dataMessage.toString());
  });
});

io.broadcast = function broadcast(msg) {
  io.clients.forEach(function each(client) {
    client.send(msg);
  });
};

app.get("/", (req, res) => {
  res.send("Hello World world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
