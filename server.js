var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Twitter = require('twit');
var twitter_config = require('./secret_twitter')

app.use('/static', express.static('static'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

var twitter_client = new Twitter(twitter_config);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('get tweets', function(track){
    console.log("'" + track + "' stream requested");

    var stream = twitter_client.stream('statuses/filter', { track: track });
    stream.on('tweet', function (tweet) {
      if(tweet.coordinates){
        socket.emit("new tweet", tweet);
      }
    });

  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
