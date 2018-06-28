
var ctx,screenBuffer;


screenBuffer = new Array(40).fill(0);
screenBuffer = screenBuffer.map(()=>new Array(20).fill("."));

window.onload = function init(){
  const socket = io();
  socket.on("world", (map)=>{screenBuffer = map; draw();});
  var canvas = document.getElementById("c");
  canvas.width = 600;
  canvas.height = 590;
  ctx = canvas.getContext("2d");

  screenBuffer[0].fill(String.fromCharCode(2405));
  screenBuffer[screenBuffer.length-1] = screenBuffer[0];
  screenBuffer.forEach(row=>{
    row[0] = "=";
    row[row.length-1] = "=";
  });

  var fontSize = 25;
  var spacingH = 15;
  var spacingV = 29;
  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#00ff00";
    ctx.beginPath();
      ctx.setLineDash([2, spacingH]);
      ctx.moveTo(10, 10);
      ctx.lineTo(canvas.width-10, 10);
      ctx.lineTo(canvas.width-10, canvas.height-10);
      ctx.lineTo(10, canvas.height-10);
      ctx.lineTo(10, 10);
    ctx.stroke();

    ctx.font= `${fontSize}px Courier`;
    screenBuffer.forEach((row,x)=>{
      row.forEach((cell,y)=>{
        ctx.fillStyle = "#00ff00";
        if(cell.player){
          ctx.fillText("@", (x*spacingH)+spacingH/2 + fontSize*0.95 , (y*spacingV)+spacingV/2+fontSize*1.6);
        }
        else{
          ctx.fillText(cell.glyph, (x*spacingH)+spacingH/2 + fontSize*0.95 , (y*spacingV)+spacingV/2+fontSize*1.6);
        }
      });
    });
  }
};
