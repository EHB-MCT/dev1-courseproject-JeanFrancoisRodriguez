"use strict";
import context from "../scripts/context.js"; 

draw();

function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    context.fillStyle = "rgba(100, 100, 255, 0.5)";
    context.beginPath();
    for (let x = 0; x <= window.innerWidth; x++) {
        let y = window.innerHeight / 2 + Math.sin(x * 0.02) * 50; // Golfbeweging
        context.lineTo(x, y);
    }
    context.lineTo(window.innerWidth, window.innerHeight);
    context.lineTo(0, window.innerHeight);
    context.closePath();
    context.fill();

    requestAnimationFrame(draw);
}


