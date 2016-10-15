/**
 * Created by BURAK on 15/10/2016.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
    console.log('a user connected');
});

app.get('/', function(req, res){
    res.sendfile(__dirname+'/views/pages/index.html');
});

http.listen(31)