console.log("load UI module");
var players = [];
var world;
var entityManager;

function Player(newSocket, newCharacter){
  this.socket = newSocket;
  this.username = "";
  this.character = newCharacter;
}

module.exports = (function(){
  console.log("init ui module");
  this.setWorld = function( w ) {
    world = w;
  };
  this.setEntityManager = function( ent ) {
    entityManager = ent;
  };
  this.connectNewPlayer =  function( socket ) {
    var newPlayer = new Player(socket, entityManager.spawn("player"));
    playerIndex = players.push(newPlayer)-1;

    var playerMap = world.getMap(player);
    socket.emit("world", playerMap);
  };
})();
