// server.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));
//redirect / to our index.html file
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/public/*');
});

server.listen(4001, function(){
  console.log('listening on *:4001');
});
