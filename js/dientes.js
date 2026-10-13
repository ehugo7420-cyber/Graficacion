// Dientes de conejo — p5.js (400 x 400)
// Mueve el mouse de izquierda a derecha: las orejas se inclinan.
// Mantén el clic: la nariz se mueve.

function setup() {
  const c = createCanvas(400, 400);
  c.parent('lienzo');
}

function draw() {
  background(255, 226, 232);
  noStroke();

  // Orejas (giran sobre su base)
  const ang = map(mouseX, 0, width, -0.25, 0.25);
  oreja(150, 160, ang);
  oreja(250, 160, ang);

  // Cabeza
  fill(248, 243, 238);
  ellipse(200, 238, 230, 205);

  // Mejillas
  fill(255, 175, 190, 150);
  ellipse(128, 255, 40, 26);
  ellipse(272, 255, 40, 26);

  // Ojos
  fill(30);
  ellipse(158, 212, 24, 28);
  ellipse(242, 212, 24, 28);
  fill(255);
  ellipse(153, 206, 8, 8);
  ellipse(237, 206, 8, 8);

  // Nariz (se mueve cuando hay clic)
  const temblor = mouseIsPressed ? sin(frameCount * 0.7) * 3 : 0;
  fill(240, 120, 150);
  ellipse(200 + temblor, 244, 28, 18);

  // Boca
  stroke(90, 70, 70);
  strokeWeight(3);
  noFill();
  line(200, 253, 200, 268);
  arc(186, 268, 28, 20, 0, PI);
  arc(214, 268, 28, 20, 0, PI);

  // Dientes
  fill(255);
  stroke(150, 140, 140);
  strokeWeight(2);
  rect(187, 274, 13, 38, 0, 0, 5, 5);
  rect(200, 274, 13, 38, 0, 0, 5, 5);

  // Bigotes
  stroke(120);
  strokeWeight(2);
  line(150, 258, 70, 245);
  line(150, 268, 68, 272);
  line(250, 258, 330, 245);
  line(250, 268, 332, 272);
}

function oreja(x, y, angulo) {
  push();
  translate(x, y);
  rotate(angulo);
  noStroke();
  fill(248, 243, 238);
  ellipse(0, -75, 62, 175);
  fill(255, 190, 205);
  ellipse(0, -72, 30, 130);
  pop();
}
