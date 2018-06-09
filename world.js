module.exports = function(){
  var map = mapGen()
  return {
    getMap: function(){ return map }
  }

}

function mapGen(){
  var width = 400
  var height = 400
  var grid = new Array(width).fill(0).map(()=>new Array(height).fill(Math.random()>.6?1:0))
  return grid.map((row,x)=>{row.map((e,y)=>{
      return new Tile(e?"stoneWall":"stoneFloor")
    })
  })
}

function Tile(type){
  this.glyph = types[type].glyph()
  this.bgColor = types[type].bgColor()
  this.fgColor = types[type].fgColor()
}

var types = {
  stoneWall:{
    glyph: function(){
      return Math.random()>.7?glyphReference.boxFull: glyphReference.boxHeavy
    },
    bgColor: function(){
      return "#000000"
    },
    fgColor: function(){
      return Math.random()>.8?"#a1a1a1":"#b1b1bf"
    }
  },
  stoneFloor:{
    glyph: function(){
      return pickRand([glyphReference.comma, glyphReference.dot, glyphReference.space])
    },
    bgColor: function(){
      return "#000000"
    },
    fgColor: function(){
      return pickRand(["#a1a1a1","#b1b1bf", "#959f90", "#999", "#bbb"])
    }
  }

}
function pickRand(array){
  return array[Math.floor((Math.random()*array.length)+1)]
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
}
