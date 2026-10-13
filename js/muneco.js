// Muñeco de nieve — p5.js (400 x 400)
// Mueve el mouse: los ojos te siguen. Mantén el clic: el muñeco te saluda.

let copos = [];

function setup() {
  const c = createCanvas(400, 400);
  c.parent('lienzo');
  for (let i = 0; i < 70; i++) {
    copos.push({ x: random(width), y: random(height), r: random(1.5, 3.5), v: random(0.5, 1.4) });
  }
}

function draw() {
  background(150, 185, 225);          // atardecer frío
  noStroke();

  // Suelo y sombra
  fill(255);
  ellipse(200, 395, 560, 130);
  fill(205, 220, 238);
  ellipse(200, 372, 160, 18);

  // Brazos (ramas)
  stroke(95, 62, 32);
  strokeWeight(6);
  line(158, 205, 100, 165);
  const saludo = mouseIsPressed ? sin(frameCount * 0.25) * 22 : 0;
  line(242, 205, 300, 155 + saludo);
  noStroke();

  // Cuerpo: tres círculos
  fill(255);
  ellipse(200, 300, 140, 140);
  ellipse(200, 203, 100, 100);
  ellipse(200, 126, 72, 72);

  // Botones
  fill(40);
  ellipse(200, 185, 9, 9);
  ellipse(200, 207, 9, 9);
  ellipse(200, 229, 9, 9);

  // Bufanda
  fill(205, 45, 55);
  rect(166, 156, 68, 15, 7);
  rect(212, 164, 17, 44, 5);

  // Ojos que siguen al mouse
  const dx = constrain((mouseX - 200) * 0.015, -2.5, 2.5);
  const dy = constrain((mouseY - 118) * 0.015, -2.5, 2.5);
  fill(30);
  ellipse(187 + dx, 118 + dy, 8, 8);
  ellipse(213 + dx, 118 + dy, 8, 8);

  // Nariz de zanahoria
  fill(250, 130, 30);
  triangle(197, 126, 197, 136, 240, 132);

  // Sonrisa de carbón
  fill(40);
  for (let i = 0; i < 5; i++) {
    const a = map(i, 0, 4, 0.35, PI - 0.35);
    ellipse(200 + cos(a) * 17, 143 + sin(a) * 7, 4, 4);
  }

  // Sombrero
  fill(25);
  rect(158, 89, 84, 8, 4);            // ala
  rect(172, 52, 56, 40, 3);           // copa
  fill(200, 45, 55);
  rect(172, 76, 56, 8);               // cinta

  // Nieve que cae
  fill(255);
  for (const c of copos) {
    ellipse(c.x, c.y, c.r * 2);
    c.y += c.v;
    c.x += sin(frameCount * 0.03 + c.y * 0.05) * 0.4;
    if (c.y > height) { c.y = -5; c.x = random(width); }
  }
}
