const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173" },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("userMessage", (msg) => {
    console.log("Received from user:", msg);

    
    let reply = "I am a bot!";
    if (msg.toLowerCase().includes("hello"))
      reply = "Hello! How can I help you?";
    else if (msg.toLowerCase().includes("help"))
      reply = "Sure! Ask me anything.";

    socket.emit("botMessage", reply);
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
