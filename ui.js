console.log("load UI module")
var players = [];

function Player(newSocket){
  this.socket = newSocket
  this.username = ""
  this.character = null
  this.position = { x:-1, y:-1}
};

module.exports = function(world){
  console.log("init ui module")
  return {
    connectNewPlayer: function(socket){
      var newPlayer = new Player(socket);
      newPlayer.position = world.spawnPlayer()
      playerIndex = players.push(newPlayer))-1

      var playerMap = world.getMap(player)
      socket.emit("world", playerMap);
    }
  }
}
