
var players = [];

function Player(newSocket){
  this.socket = newSocket
  this.username = ""
  this.character = null

};

module.exports = function(world){

  return {
    connectNewPlayer: function(socket){
      players.push(new Player(socket))
      socket.emit("world", world.getWorld);
    }
  }
}
