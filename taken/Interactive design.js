"use strict";
import context from "../scripts/context.js"; 

draw();

function draw() {
    console.log("Animatie werkt!");
    requestAnimationFrame(draw); 
}


