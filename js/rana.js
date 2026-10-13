// Rana — p5.js (400 x 400)
// Mueve el mouse: los ojos te siguen. Mantén el clic: abre la boca.
let boca = 0; // 0 = cerrada, 1 = abierta

function setup() {
  const c = createCanvas(400, 400);
  c.parent('lienzo');
}

function draw() {
  background(125, 205, 235);          // cielo/estanque
  noStroke();

  // Estanque y nenúfar
  fill(70, 160, 205);
  ellipse(200, 365, 480, 130);
  fill(55, 145, 80);
  ellipse(200, 305, 330, 90);

  // Patas traseras
  fill(60, 160, 60);
  ellipse(105, 290, 95, 52);
  ellipse(295, 290, 95, 52);

  // Cuerpo y vientre
  fill(80, 190, 70);
  ellipse(200, 240, 220, 170);
  fill(195, 236, 150);
  ellipse(200, 272, 130, 100);

  // Patas delanteras
  fill(80, 190, 70);
  ellipse(140, 312, 56, 30);
  ellipse(260, 312, 56, 30);

  // Cabeza
  ellipse(200, 170, 200, 115);

  // Ojos
  ojo(150, 118);
  ojo(250, 118);

  // Fosas nasales
  fill(40, 110, 40);
  ellipse(188, 150, 6, 4);
  ellipse(212, 150, 6, 4);

  // Boca: se abre mientras se mantiene el clic
  boca = lerp(boca, mouseIsPressed ? 1 : 0, 0.2);
  fill(150, 40, 60);
  stroke(40, 100, 40);
  strokeWeight(3);
  arc(200, 178, 110, 10 + boca * 55, 0, PI, CHORD);
  noStroke();

  // Mejillas
  fill(255, 150, 150, 120);
  ellipse(130, 168, 26, 16);
  ellipse(270, 168, 26, 16);
}

function ojo(x, y) {
  fill(80, 190, 70);
  ellipse(x, y, 66, 66);              // bulto del ojo
  fill(255);
  ellipse(x, y, 48, 48);              // parte blanca
  // La pupila se mueve hacia el mouse, sin salirse del ojo
  const dx = constrain((mouseX - x) * 0.06, -9, 9);
  const dy = constrain((mouseY - y) * 0.06, -9, 9);
  fill(20);
  ellipse(x + dx, y + dy, 22, 22);
  fill(255);
  ellipse(x + dx - 4, y + dy - 4, 6, 6);
}
