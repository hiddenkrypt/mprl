//titan.js
"use strict";
const world = require("./world.js")();
const ui = require("./ui.js");
const entityManager = require("./entityManager.js");
ui.setWorld(world);
ui.setEntityManager(entityManager);
world.setEntityManager(entityManager);

module.exports = {
  newPlayer: function newPlayer(newSocket) {
    ui.connectNewPlayer(newSocket);
    console.log("added new player socket to array");
  }
};
