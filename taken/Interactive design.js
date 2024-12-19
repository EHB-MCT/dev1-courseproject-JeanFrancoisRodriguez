"use strict";
import context from "../scripts/context.js"; 

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
/** 
 *  Variabelen voor de golven
 *  Elke golf heeft meerdere objecten
 */
let waves = [
    { color: "rgba(100, 100, 255, 0.25)", originalHeight: getRandom(30, 70), height: getRandom(30, 70), originalSpeed: -0.02, speed: -0.02, offset: 0 },
    { color: "rgba(150, 50, 200, 0.25)", originalHeight: getRandom(100, 200), height: getRandom(100, 200), originalSpeed: 0.03, speed: 0.03, offset: Math.PI / 2 },
    { color: "rgba(200, 100, 150, 0.25)", originalHeight: getRandom(10, 50), height: getRandom(10, 50), originalSpeed: 0.01, speed: 0.01, offset: Math.PI },
    { color: "rgba(0, 137, 25, 0.43)", originalHeight: getRandom(200, 300), height: getRandom(200, 300), originalSpeed: 0.01, speed: 0.01, offset: Math.PI },
];

let invertedWaves = [
    { color: "rgba(255, 100, 100, 0.5)", originalHeight: getRandom(50, 100), height: getRandom(10, 100), originalSpeed: -0.02, speed: -0.02, offset: 0 },
    { color: "rgba(200, 150, 50, 0.6)", originalHeight: getRandom(100, 200), height: getRandom(100, 200), originalSpeed: -0.03, speed: -0.03, offset: Math.PI / 2 },
    { color: "rgba(150, 200, 100, 0.58)", originalHeight: getRandom(10, 50), height: getRandom(10, 50), originalSpeed: 0.01, speed: 0.01, offset: Math.PI },
];

draw();

window.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX; 
    let mouseY = event.clientY; 


    // Interactie voor originele golven
    waves.forEach(wave => {
        wave.height = wave.originalHeight + (mouseY / window.innerHeight) * 100;
        wave.speed = wave.originalSpeed + (mouseX / window.innerWidth) * 0.05;
    });

    // Interactie voor omgekeerde golven
    invertedWaves.forEach(wave => {
        wave.height = wave.originalHeight + (mouseY / window.innerHeight) * 100;
        wave.speed = wave.originalSpeed + (mouseX / window.innerWidth) * 0.05;
    });
});

// Functie om de golven te tekenen
function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight); 
    
    // Doorloopt alle golven in de waves array en tekent ze 1 voor 1
    waves.forEach(wave => {
        context.fillStyle = wave.color;
        context.beginPath();
        for (let x = 0; x <= window.innerWidth; x++) {
            let y = window.innerHeight / 2 + Math.sin(x * 0.02 + wave.offset) * wave.height; //berekent de Y-positie van een punt op een sinusgolf
            
            context.lineTo(x, y);
        }
        context.lineTo(window.innerWidth, window.innerHeight);
        context.lineTo(0, window.innerHeight);
        context.closePath();
        context.fill();

        wave.offset += wave.speed; 
    });

    invertedWaves.forEach(wave => {
        context.fillStyle = wave.color;
        context.beginPath();
        for (let x = 0; x <= window.innerWidth; x++) {
            let y = window.innerHeight / 2 - Math.sin(x * 0.02 + wave.offset) * wave.height; //berekent de Y-positie van een punt op een sinusgolf
            context.lineTo(x, y);
        }
        context.lineTo(window.innerWidth, 0);
        context.lineTo(0, 0);
        context.closePath();
        context.fill();

        wave.offset += wave.speed; // Laat de golf bewegen
    });
    requestAnimationFrame(draw); 
}


