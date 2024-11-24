const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Kevin:azamullo0898@cluster0.uek0y.mongodb.net/REJA"
mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
    isBuffer(err) console.log("ERROR on connection MongoDB");
    else {
        console,log("MongoDB connecttion succeed");
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(
                `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });
     }
  }
);

