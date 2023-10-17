const buttonSetRadius = document.getElementById("button-set-radius");
const buttonSetColor = document.getElementById("button-set-color");
const buttonSetRotation = document.getElementById("button-set-rotation");
const square = document.getElementById("square")

/**
 * deprecated

function setStyleColor() {
    square.style.backgroundColor = "blue";
}
*/

function changeColor() {
    square.classList.toggle("square-blue");
}
function changeRotation() {
    square.classList.toggle("square-rotated");
}
function changeBorderRadius() {
    square.classList.toggle("square-bordered");
}

function hideSquare(){
    square.classList.add("square-hidden")
}
function showSquare(){
    square.classList.remove("square-hidden")
}

buttonSetColor.addEventListener("click", changeColor);
buttonSetRotation.addEventListener("click", changeRotation);
buttonSetRadius.addEventListener("click", changeBorderRadius);

square.addEventListener("mouseenter", hideSquare)
square.addEventListener("mouseleave", showSquare)
// console.log(buttonSetRadius);