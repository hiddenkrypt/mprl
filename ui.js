
var players = [];
var world;
var entityManager;

function Player(newSocket, newCharacter){
  this.socket = newSocket;
  this.username = "";
  this.character = newCharacter;
}

module.exports = (function(){
  var ui = {};
  ui.setWorld = function( w ) {
    world = w;
  };
  ui.setEntityManager = function( ent ) {
    entityManager = ent;
  };
  ui.connectNewPlayer =  function( socket ) {
    var newPlayer = new Player(socket, entityManager.spawn("player"));
    playerIndex = players.push(newPlayer)-1;

    var playerMap = world.getMap(player);
    socket.emit("world", playerMap);
  };

  return ui;
})();
