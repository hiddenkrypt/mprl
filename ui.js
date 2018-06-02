
var players = [];

function Player(newSocket){
  this.socket = newSocket
  this.username = ""
  this.character = null
};

module.exports = {
  setWorld: function(worldModule){
    world = worldModule;
  }
  connectNewPlayer: function(socket){
    players.push(new Player(socket));
  }
};
