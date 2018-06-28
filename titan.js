//titan.js
"use strict";
var world = require("./world.js")();
var ui = require("./ui.js")();
var entityManager = require("./entityManager.js")();
ui.setWorld(world);
ui.setEntityManager(entityManager);
world.setEntityManager(entityManager);
entityManager.setWorld(world);


module.exports = {
  newPlayer: function newPlayer(newSocket){
    ui.connectNewPlayer(newSocket);
    console.log("added new player socket to array");
  }
}
