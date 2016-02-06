var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io server!');
});

socket.on('message', function(msg) {
	console.log('New Message: ');
	console.log(msg.text);
});