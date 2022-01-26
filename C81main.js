var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var color = "grey"; 
var color1 = "blue";
var color2 = "black";
var color3 = "red";
var color4 = "yellow";
var color5 = "green";



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    console.log("mousedown");
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x,mouse_y);
    rect()
}


function circle(mouse_x,mouse_y){
    console.log("entercircle");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = 5;
ctx.arc(250,210,40,0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 5;
ctx.arc(350,210,40,0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 5;
ctx.arc(450,210,40,0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 5;
ctx.arc(300,250,40,0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = 5;
ctx.arc(400,250,40,0, 2 * Math.PI);
ctx.stroke();
}