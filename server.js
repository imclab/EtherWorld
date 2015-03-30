var fs = require('fs');

// Socket.io mapping.
var sockets = {};

// Webserver.
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/www'));

io.on('connection', function (socket) {
	console.log('got connection');
	sockets[socket.id] = socket;

	socket.on('disconnect', function() {
		delete sockets[socket.id]
	});

	socket.on('move', function (data) {
	});
});

server.listen(port, function () {
	console.log('Server listening at port %d', port)
});