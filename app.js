console.log("web Serverni boshlash");
const express = require("express");
const app = express();
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//    if(err) {
//       console.log("ERROR:", err);
//    } else {
//       user = JSON.parse(data);
//    }
// });

//MongoDB chqirish
const db = require("./server").db();

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
   // console.log(req.body);
});

// app.get('/author', (req, res) => {
//    res.render("author", {user: user});
// });

app.get("/", function (req, res) {
   res.render("reja");
});

module.exports = app;
