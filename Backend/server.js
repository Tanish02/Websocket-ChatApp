import { Server } from "socket.io";
import express from "express";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(4600, () => {
  console.log("server running at http://localhost:4600");
});
