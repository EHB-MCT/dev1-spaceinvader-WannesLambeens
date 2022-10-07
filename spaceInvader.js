"use strict";
let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext('2d');

//black background
function DrawBackground(){
    context.beginPath();
    context.fillStyle = "black";
    context.rect(75,75,300,300);
    context.stroke();
    context.fill();
}
DrawBackground();


//bright green space invader (colorcode #66FF00)
function drawSpaceInvader(){
    context.beginPath();
    context.fillStyle ="#66FF00";
    context.rect(100,150,50,100);
    context.rect(100,300,50,50);
    context.rect(200,100,50,150);
    context.rect(200,300,50,50);
    context.rect(300,150,50,100);
    context.rect(300,300,50,50);
    context.stroke();
    context.fill();
}
drawSpaceInvader();

