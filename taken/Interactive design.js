"use strict";
import context from "../scripts/context.js"; 


let waves = [
    { color: "rgba(100, 100, 255, 0.25)", originalHeight: 50, height: 50, speed: 0.02, offset: 0 },
    { color: "rgba(150, 50, 200, 0.25)", originalHeight: 100, height: 100, speed: 0.015, offset: Math.PI / 2 },
    { color: "rgba(200, 100, 150, 0.25)", originalHeight: 30, height: 30, speed: 0.01, offset: Math.PI },
];

let noiseOffset = 0;

draw();

window.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX; 
    let mouseY = event.clientY; 

    waves.forEach(wave => {
        
        wave.height = wave.originalHeight + (mouseY / window.innerHeight) * 50;

        
        wave.speed = 0.005 + (mouseX / window.innerWidth) * 0.05; 
    });
});

function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight); 

    waves.forEach(wave => {
        context.fillStyle = wave.color;
        context.beginPath();
        for (let x = 0; x <= window.innerWidth; x++) {
            let y = window.innerHeight / 2 + Math.sin(x * 0.02 + wave.offset) * wave.height;
            
            context.lineTo(x, y);
        }
        context.lineTo(window.innerWidth, window.innerHeight);
        context.lineTo(0, window.innerHeight);
        context.closePath();
        context.fill();

        wave.offset += wave.speed; 
    });

    requestAnimationFrame(draw); 
}


