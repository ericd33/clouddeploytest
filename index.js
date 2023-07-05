const http = require("http");
const emoji = require("node-emoji");
//create a server object: 
http
    .createServer(function (req, res) {
        res.write("<h1>Hello World!</h1>" + ' ' + JSON.stringify(emoji.find('heart')));
        //write a response to the client 

        res.end();
        //end the response 
    })
    .listen(8080);
//Server runs on localhost:8080 