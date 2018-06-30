const jsonfile = require('jsonfile');
console.log("summoning.js || Loading beastiary.json");
try{
  const beastiary = jsonfile.readFileSync('./beastiary.json');
}
catch(err){
  console.error(`summoning.js || Attempt to read beastiar yfailed! Full details below:`);
  console.log(err);
}
console.log("summoning.js || beastiary.json loaded");
module.exports = (function(){

  this.create = function(type, id){
    var newEntity = { id: id };
  };
})();
