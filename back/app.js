const express = require("express");
const app = express();
const http = require("http");
const socketIO = require("socket.io");

require("dotenv").config();

const port = process.env.PORT;

const index = require("./routes/index");

app.use(index);

const server = http.createServer(app);

const io = socketIO(server);

const getApiAndEmit = "TODO";
