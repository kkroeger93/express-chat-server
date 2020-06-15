// Require Dependencies
const express = require("express");
const socketio = require("socket.io"); // <-- SocketIO Library
const http = require("http"); // <-- Require buildin http Node module

const PORT = process.env.PORT || 5000;

const app = express(); // <-- Require Express Framework
const server = http.createServer(app);
const io = socketio(server); // <-- Create a intance of SocketIO

server.listen(PORT, () => console.log(`Server has started on Port ${PORT}`));



const app = require('express')();

