//titan.js
"use strict"
var players = []
function Player(newSocket){
  this.socket = newSocket
  this.username = ""
  this.character = null
}
module.exports = {
  newPlayer: function newPlayer(newSocket){
    players.push(new Player(newSocket))
    console.log("added new player socket to array")
}
