// Día nevado soleado — p5.js (400 x 400)
// Mueve el mouse de izquierda a derecha para cambiar la dirección del viento.

let copos = [];

function setup() {
  const c = createCanvas(400, 400);
  c.parent('lienzo');
  for (let i = 0; i < 110; i++) {
    copos.push({ x: random(width), y: random(height), r: random(2, 5), v: random(0.6, 1.8) });
  }
}

function draw() {
  // Cielo con degradado (una línea por cada fila de píxeles)
  for (let y = 0; y < height; y++) {
    stroke(lerpColor(color(95, 185, 250), color(225, 242, 255), y / 280));
    line(0, y, width, y);
  }
  noStroke();

  // Sol con rayos que giran lentamente
  push();
  translate(320, 80);
  rotate(frameCount * 0.01);
  stroke(255, 205, 50);
  strokeWeight(5);
  for (let i = 0; i < 12; i++) {
    rotate(TWO_PI / 12);
    line(42, 0, 64, 0);
  }
  pop();
  noStroke();
  fill(255, 225, 70);
  ellipse(320, 80, 66, 66);

  // Nubes
  fill(255, 255, 255, 230);
  ellipse(90, 70, 80, 36);
  ellipse(125, 62, 60, 40);
  ellipse(62, 76, 54, 28);

  // Colinas nevadas
  fill(238, 247, 255);
  ellipse(80, 380, 420, 190);
  ellipse(340, 390, 440, 160);
  fill(255);
  rect(0, 345, width, 60);

  pino(55, 315);
  pino(120, 332);
  pino(345, 322);

  // Nieve que cae
  const viento = map(mouseX, 0, width, -1.2, 1.2);
  fill(255);
  for (const c of copos) {
    ellipse(c.x, c.y, c.r * 2);
    c.y += c.v;
    c.x += viento + sin(frameCount * 0.03 + c.y * 0.05) * 0.4;
    if (c.y > height) { c.y = -5; c.x = random(width); }
    if (c.x > width + 5) c.x = -5;
    if (c.x < -5) c.x = width + 5;
  }
}

function pino(x, y) {
  fill(110, 75, 45);
  rect(x - 5, y + 10, 10, 20);
  fill(35, 105, 65);
  triangle(x, y - 72, x - 28, y - 20, x + 28, y - 20);
  triangle(x, y - 48, x - 36, y + 12, x + 36, y + 12);
  fill(255);                           // nieve sobre las ramas
  triangle(x, y - 72, x - 12, y - 48, x + 12, y - 48);
  triangle(x, y - 48, x - 17, y - 22, x + 17, y - 22);
}
