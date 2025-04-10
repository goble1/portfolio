function setup() {
  createCanvas(600, 400);
  balls = [];
  for (let i = 0; i < 5; i++) {
    balls.push({
      x: random(width),
      y: random(height),
      dx: random(-2, 2),
      dy: random(-2, 2),
    });
  }
}

function draw() {
  background(220);
  for (let b of balls) {
    b.x += b.dx;
    b.y += b.dy;
    if (b.x < 0 || b.x > width) b.dx *= -1;
    if (b.y < 0 || b.y > height) b.dy *= -1;
    ellipse(b.x, b.y, 20);
  }
}

