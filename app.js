const canvas = document.querySelector("#jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

}
function onMouseDown(event){
    console.log(event);
    stopPainting();

}
function onMouseUp(event){
    painting = true;
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup" , onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}