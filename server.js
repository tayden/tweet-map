var express = require('express');
var app = express();
var io = require('socket.io');
var twitter = require('twitter');

app.get('/', function(req, res){
  res.sendFile(__dirname + "/html/index.html");
})

app.listen(3000);
console.log("Server listening at 127.0.0.1:3000");
