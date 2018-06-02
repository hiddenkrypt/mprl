//node server start

const express = require('express')
const app = express()
const http = require ('http').Server(app)
const io = require('socket.io')(http, { origins: '*:*'})
const game = require('./titan.js')

io.on("connect", function(socket) {
	console.log("Client connected")
  game.newPlayer(socket)
	socket.on("disconnect", function() {
		console.log("Client disconnected")
	})

})


app.use(express.static("pub"))

http.listen(8089, function() {
	console.log("Server is listening.");
});
