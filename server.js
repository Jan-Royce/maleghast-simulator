const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/dist/index.html");
});

app.use("/", express.static("dist"));

http.listen(5001, function () {
  console.log("Server ready, listening on port ", 5001);
});

// TODO sockets
// const players = {};