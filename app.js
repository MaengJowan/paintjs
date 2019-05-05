const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

Array.from(colors).forEach(function color(color){
    color.addEventListener("click", handleChangeColor)
});

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle ="#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    //만약 painting이 true이면
    if(painting){
        ctx.lineTo(x,y);
        ctx.stroke();
    } else{
        ctx.moveTo(x, y);
        ctx.beginPath();
    }
}
function handleChangeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup" , stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

