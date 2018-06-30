var world;
var summoner = require("./summoning.js");
var entityList = [];


module.exports = (function(){
  this.spawn = function(entityType){
    entityList.push(summoner.create(entityType), entityList.length);
    return newEntity.id;
  };
})();
