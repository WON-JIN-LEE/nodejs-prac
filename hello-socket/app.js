const express = require("express");
const Http = require("http");
const socketIo = require("socket.io");

const app = express();
const http = Http.createServer(app);

const io = socketIo(http, {
  cors: {
    origin: "*",
    methonds: ["GET", "POST"],
  },
});

http.listen(3000, () => {
    console.log("서버가 켜졌습니다.")
})

io.on("connection", (socket) => {
    console.log("연결되었습니다..");
  
    socket.send("연결됐어!");
});
