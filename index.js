var canvas = document.getElementById("myCanvas");
var button=document.getElementsByClassName("btn");
var ctx = canvas.getContext("2d");
const colors=["yellow","blue","red","green"];
draw();
function draw(){
    var x=95;
    var y=50;
    var r=40;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<4;i++){
        ctx.fillStyle=colors[i];
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        y+=100;
    }
    var y=50;
    ctx.strokeStyle='black';
    ctx.fillStyle='black';
    for(let i=0;i<4;i++){
        ctx.beginPath();
        ctx.moveTo(1050,y);
        ctx.lineTo(1000,y);
        ctx.lineTo(1010,y-5);
        ctx.lineTo(1010,y+5);
        ctx.lineTo(1000,y);
        ctx.stroke();
        ctx.fill();
        y=y+100;
    }
}

function drawGrey(x,y){
    ctx.fillStyle="grey";
    ctx.beginPath();
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}
canvas.addEventListener("click",function(event){
    let x=event.offsetX;
    let y=event.offsetY;
    if(x>=55 && x<=135){
        var x1=1000;
        var y1=50;
         if(y>=110 && y<=190){
            y1=150;
        }
        else if(y>=210 && y<=290){
            y1=250;
        }
        else if(y>=310 && y<=390){
            y1=350;
        }
        var v= setInterval(function(){
            ctx.fillStyle="black";
            ctx.beginPath();
            ctx.moveTo(x1+50,y1);
            ctx.lineTo(x1,y1);
            ctx.lineTo(x1+10,y1-5);
            ctx.lineTo(x1+10,y1+5);
            ctx.lineTo(x1,y1);
            ctx.stroke();
            ctx.fill();
            ctx.clearRect(x1+10,y1-6,1,12);
            ctx.clearRect(x1+50,y1-6,1,12);
            x1-=1;
            if(x1==135){
                drawGrey(95,y1);
                clearInterval(v);
            }
        },10);
    }
})
