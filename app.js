const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const btnMode = document.getElementById("jsMode");
const btnSave = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;
Array.from(colors).forEach(function color(color){
    color.addEventListener("click", handleChangeColor)
});

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle ="white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.fillStyle = INITIAL_COLOR;
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

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
function handleRangeLine(event){
    const strokeSize = event.target.value;
    ctx.lineWidth = strokeSize;
}
function handleChangeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
function handleModeClick(){
    if(filling === true){
        filling = false;
        btnMode.innerText = "Fill";
    } else {
        filling = true;
        btnMode.innerText = "Paint";
    }
}
function handleFillColor(){
    if(filling === true){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
        handleModeClick();
    }
}
function handleSaveClick(){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "paintJS";
    link.click();
}
function handleCM(event){
    event.preventDefault();
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup" , stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleFillColor);
    canvas.addEventListener("contextmenu", handleCM);
}
if(range){
    range.addEventListener("input", handleRangeLine);
}
if(btnMode){
    btnMode.addEventListener("click", handleModeClick);
}
if(btnSave){
    btnSave.addEventListener("click", handleSaveClick);
}