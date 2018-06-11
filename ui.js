console.log("load UI module")
var players = [];

function Player(newSocket){
  this.socket = newSocket
  this.username = ""
  this.character = null

};

module.exports = function(world){
  console.log("init ui module")
  return {
    connectNewPlayer: function(socket){
      playerIndex = players.push(new Player(socket))-1
      var playerMap = world.getMap()
      playerMap = playerMap.slice(0,40).map(e=>e.slice(0,20))
      console.log(playerMap)
      socket.emit("world", playerMap);
    }
  }
}
