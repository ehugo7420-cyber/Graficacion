// ¿Qué hay de cena? — p5.js (400 x 400)
// Haz clic sobre la pizza para agregar pepperoni. Presiona R para reiniciar.

const CX = 200, CY = 215;      // centro del plato
let peperonis = [];

function setup() {
  const c = createCanvas(400, 400);
  c.parent('lienzo');
  reiniciar();
}

function reiniciar() {
  peperonis = [];
  // Pepperonis iniciales alrededor del centro
  for (let i = 0; i < 7; i++) {
    const a = (TWO_PI / 7) * i + 0.4;
    peperonis.push({ x: CX + cos(a) * 60, y: CY + sin(a) * 60 });
  }
  peperonis.push({ x: CX, y: CY });
}

function draw() {
  background(150, 95, 55);            // mesa de madera
  noStroke();
  fill(130, 80, 45);
  for (let y = 0; y < height; y += 40) rect(0, y, width, 3);

  // Título
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(26);
  textStyle(BOLD);
  text('¿Qué hay de cena?', 200, 34);

  // Plato
  fill(0, 0, 0, 45);
  ellipse(CX + 5, CY + 8, 292, 292);   // sombra
  fill(250);
  ellipse(CX, CY, 290, 290);
  fill(228, 232, 238);
  ellipse(CX, CY, 238, 238);

  // Pizza: orilla, queso y rebanadas
  fill(226, 165, 80);
  ellipse(CX, CY, 200, 200);
  fill(252, 206, 92);
  ellipse(CX, CY, 170, 170);
  stroke(226, 165, 80);
  strokeWeight(2);
  for (let i = 0; i < 4; i++) {
    const a = (PI / 4) * i;
    line(CX - cos(a) * 85, CY - sin(a) * 85, CX + cos(a) * 85, CY + sin(a) * 85);
  }
  noStroke();

  // Pepperoni
  for (const p of peperonis) {
    fill(190, 45, 40);
    ellipse(p.x, p.y, 26, 26);
    fill(215, 80, 65);
    ellipse(p.x - 3, p.y - 3, 8, 8);
  }

  tenedor(45, 215);
  cuchillo(355, 215);
}

function tenedor(x, y) {
  fill(215);
  rect(x - 14, y - 105, 6, 50, 3);    // puntas
  rect(x - 3, y - 105, 6, 50, 3);
  rect(x + 8, y - 105, 6, 50, 3);
  rect(x - 14, y - 62, 28, 14, 5);    // base de las puntas
  rect(x - 4, y - 50, 8, 40);         // cuello
  rect(x - 7, y - 14, 14, 120, 7);    // mango
}

function cuchillo(x, y) {
  fill(225);
  rect(x - 8, y - 105, 16, 130, 8, 2, 2, 0);  // hoja
  fill(70, 45, 30);
  rect(x - 10, y + 22, 20, 84, 8);            // mango
}

function mousePressed() {
  // Solo se agrega pepperoni si el clic cae dentro de la pizza
  if (dist(mouseX, mouseY, CX, CY) < 78) {
    peperonis.push({ x: mouseX, y: mouseY });
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') reiniciar();
}
