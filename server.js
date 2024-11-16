console.log("web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 KIRISH code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 Session code

// 3 VIEWS code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 ROUTING code
app.get("/hello", function(req, res) {
   res.end(`<h1 style="background: red">HELLO WORLD</h1>`);
});
app.get("/gift", function(req, res) {
   res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});



