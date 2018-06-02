//hardcoded canvas 900x800
//standard UI character width: 10px
var ctx,screenBuffer;

      var fontSize = 25
window.onload = function init(){
  const socket = io();
  var canvas = document.getElementById("c")
  canvas.width = 900
  canvas.height = 810
  ctx =canvas.getContext("2d")
  var boxes = ["\u2588", "\u2593", "\u2592", "\u2591"]
  screenBuffer = new Array(60).fill(new Array(28).fill("."));
  screenBuffer=screenBuffer.map(
    e=>(
      e.map(
        f=>
          (Math.random()>.3)
            ?"."
            :"\u2588"
          )
    )
  )
  screenBuffer[0] = new Array(53).fill(String.fromCharCode(2405));
  screenBuffer[screenBuffer.length-1] = new Array(53).fill(String.fromCharCode(2405));
  screenBuffer.forEach((row,x)=>{
    row[0] = "=";
    row[row.length-1] = "=";
  })
  var spacingH = 15
  var spacingV = 29 //font size 25?
  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    screenBuffer.forEach((row,x)=>{
      row.forEach((cell,y)=>{
        ctx.fillStyle = "#00ff00"
        ctx.strokeStyle = "#FF0000"
      //    ctx.strokeRect((x*spacingH), (y*spacingV), spacingH, spacingV)

      ctx.font= `${fontSize}px Courier`
      ctx.fillStyle = "#00ff00"
      ctx.fillText(cell, (x*spacingH)+spacingH/2 - fontSize/2, (y*spacingV)+spacingV/2+fontSize/2)
      })
    })
  }
	window.addEventListener( "keydown",  evt=> {
    console.log(evt.keyCode)
    switch (evt.keyCode){
      case 37: spacingH++; break;
      case 39: spacingH--; break;
      case 38: spacingV++; break;
      case 40: spacingV--; break;
      case 107: fontSize++; break;
      case 109: fontSize--; break;
    }
    draw()
    console.log(`H-${spacingH} V-${spacingV}`)
  })
}
