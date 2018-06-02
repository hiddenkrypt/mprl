//titan.js
"use strict"
var world = require("world.js")
var ui = require("ui.js")

module.exports = {
  newPlayer: function newPlayer(newSocket){
    ui.connectNewPlayer(newSocket)
    console.log("added new player socket to array")
}
