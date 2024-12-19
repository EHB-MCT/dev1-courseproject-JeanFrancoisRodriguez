let y = window.innerHeight / 2 + Math.sin(x * 0.02 + wave.offset) * wave.height;
/**
 * Bron: https://gist.github.com/gkhays/e264009c0832c73d5345847e673a64ab
 * Auteur: gkhays
 * Project: "Draw a Sine Wave in JavaScript"
 * Datum geraadpleegd: 18 december 2024
 * Aangepaste onderdelen:
 * - Frequentie (`x * 0.02`) aangepast voor bredere golven.
 * - Amplitude (`* wave.height`) dynamisch gemaakt met variabelen en muisinteractie.
 * - Offset toegevoegd voor bewegende golven.
 * - Gebruik van `window.innerHeight / 2` toegevoegd om de golf te centreren.
 */

wave.height = wave.originalHeight + (mouseY / window.innerHeight) * 100;
wave.speed = wave.originalSpeed + (mouseX / window.innerWidth) * 0.05;
/**
 * Bron: https://dev.to/clementgaudiniere/create-a-parallax-effect-when-the-mouse-moves-3km0
 * Auteur: Clément Gaudinière
 * Project: "Create a parallax effect when the mouse moves"
 * Datum geraadpleegd: 19 december 2024
 * Aangepaste onderdelen:
 * - De code is aangepast om de hoogte (`wave.height`) en snelheid (`wave.speed`) van golven te beïnvloeden op basis van de muispositie (`mouseX` en `mouseY`).
 * - Het originele project richtte zich op het creëren van een parallax-effect; deze is aangepast voor golfanimaties.
 */