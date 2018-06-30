const jsonfile = require('jsonfile');
console.log("summoning.js || Loading bestiary.json");
try{
  const beastiary = jsonfile.readFileSync('./bestiary.json');
}
catch(err){
  console.error(`summoning.js || Attempt to read bestiary failed! Full details below:`);
  console.log(err);
}
console.log("summoning.js || bestiary.json loaded");
module.exports = (function(){

  this.create = function(type, id){
    var newEntity = { id: id };
  };
})();
