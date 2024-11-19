console.log("web Serverni boshlash");
const express = require('express');
const app = express();
const http = require("http");
const fs = require("fs");



// 1 KIRISH code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 Session code

// 3 VIEWS code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 ROUTING code
app.post("/create-item", (req,res) => {
   // TODO: code with db here
   console.log(req.body);
});

app.get('/author', (req, res) => {
   res.render("author");
});

app.get("/", function (req, res) {
   res.render("harid");
});



const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on the port: ${PORT}`);
});

