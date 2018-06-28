var mapWidth = 400;
var mapHeight = 400;
var entityManager;
module.exports = function(){
  console.log("initializing map");
  var map = mapGen();
  console.log("map ready");
  return {
    getMap: function(player){
      displayWidth=36;
      displayHeight=18;
      map[player.position.x][player.position.y].player= true;
      var playerMap = map.slice(Math.floor(player.position.x - displayWidth/2), player.position.x +displayWidth/2);
      playerMap = playerMap.map(e=>{
        return e.slice(Math.floor(player.position.y-displayHeight/2),Math.floor(player.position.y+displayHeight/2));
      });
    },
    spawnPlayer: function(){
      var validTile = false;
      var spawnPosition = {x:-1, y:-1};
      while(!validTile){
        spawnPosition = {
          x: Math.floor(Math.random()*mapWidth),
          y: Math.floor(Math.random()*mapHeight)
        };
        validTile = map[spawnPosition.x][spawnPosition.y].passible;
      }
      return spawnPosition;
    },
    setEntityManager: function(eM){
      entityManager = eM;
    }
  };
};

function mapGen(){
  return [...Array(mapHeight)].map(()=>[...Array(mapWidth)].map(()=>Math.random()>0.6? new Tile("stoneWall"):new Tile("stoneFloor")));
}

function Tile(type){
  this.glyph = types[type].glyph();
  this.bgColor = types[type].bgColor();
  this.fgColor = types[type].fgColor();
  this.passible = types[type].passible;
  this.player = false;
}

var types = {
  stoneWall:{
    glyph: function(){
      return Math.random()>0.7? glyphReference.boxFull: glyphReference.boxHeavy;
    },
    bgColor: function(){
      return "#000000";
    },
    fgColor: function(){
      return Math.random()>0.8? "#a1a1a1":"#b1b1bf";
    },
    passible: false
  },
  stoneFloor:{
    glyph: function(){
      return pickRand([glyphReference.comma, glyphReference.dot, glyphReference.space]);
    },
    bgColor: function(){
      return "#000000";
    },
    fgColor: function(){
      return pickRand(["#a1a1a1","#b1b1bf", "#959f90", "#999", "#bbb"]);
    },
    passible: true
  }

};
function pickRand(arr){
  return arr[Math.floor((Math.random()*arr.length))];
}
var glyphReference = {
  boxFull: "\u2588",
  boxHeavy: "\u2593",
  boxMedium: "\u2592",
  boxLight: "\u2591",
  doublePipe: String.fromCharCode(2405),
  comma: ",",
  space: " ",
  dot: "."
};
