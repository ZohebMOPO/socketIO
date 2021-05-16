const express = require("express");
const app = express();
const http = require("http");
const socket = require("socket.io");

require("dotenv").config();

const port = process.env.PORT;

const index = require("./routes/index");

app.use(index);

const server = http.createServer(app);

const io = socket(server);

let interval;

io.on("connection", (socket) => {
  console.log("Connected!");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Disconnected!");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const resp = new Date();
  socket.emit("From API", resp);
};

server.listen(port, () => console.log(`Server is running on ${port}`));
