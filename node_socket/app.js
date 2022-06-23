const express = require("express");
const app = express();
const path = require("path");
const Http =require("http");
const server = Http.createServer(app);
const socketIo = require("socket.io");
const moment  = require("moment");
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 4545;

io.on("connection", (socket) => {
    socket.on("chatting", (data) => {
        const {name,msg} = data;
        io.emit("chatting", {
            name,
            msg,
            time: moment().format("HH:mm A")
        });
    });
})

server.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
console.log(new Date());

console.log(new Date().toISOString());
console.log(new Date().toTimeString().split("T")[0]);
