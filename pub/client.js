//hardcoded canvas 900x800
//standard UI character width: 10px
var ctx,screenBuffer;

window.onload = function init(){
  const socket = io();
  socket.on("world", (map)=>console.log(map))
  var canvas = document.getElementById("c")
  canvas.width = 600
  canvas.height = 590
  ctx = canvas.getContext("2d")

  screenBuffer = new Array(40).fill(0)
  screenBuffer = screenBuffer.map(()=>new Array(20).fill("."))
  screenBuffer[0].fill(String.fromCharCode(2405))
  screenBuffer[screenBuffer.length-1] = screenBuffer[0]
  screenBuffer.forEach(row=>{
    row[0] = "=";
    row[row.length-1] = "=";
  })

  var fontSize = 25
  var spacingH = 15
  var spacingV = 29
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font= `${fontSize}px Courier`
  screenBuffer.forEach((row,x)=>{
    row.forEach((cell,y)=>{
      ctx.fillStyle = "#00ff00"
      ctx.fillText(cell, (x*spacingH)+spacingH/2 - fontSize/2, (y*spacingV)+spacingV/2+fontSize/2)
    })
  })
}
