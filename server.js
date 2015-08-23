var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Twitter = require('twit');

// TODO: You must add your own twitter credentials here (see: https://apps.twitter.com/)
var config = require('./secret_twitter');
var twitter_client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret
});

app.use('/static', express.static('static'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  var stream;

  socket.on('get tweets', function(track){
    console.log("'" + track + "' stream requested");

    if(stream){
      stream.stop();
    }
    stream = twitter_client.stream('statuses/filter', { track: track });

    stream.on('tweet', function (tweet) {
      if(tweet.coordinates){
        socket.emit("new tweet", tweet);
      }
    });

    stream.on('messages', function(m){
      console.log(m);
    })
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
