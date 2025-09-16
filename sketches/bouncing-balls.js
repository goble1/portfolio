let balls;
const radius = 15;
const numBalls = 15;
const colors = ['#FF5E5B', '#D8D8D8', '#FFFFEA', '#00CECB', '#FFED66'];
const gravity = 0.2;
let gravityEnabled = true;

function setup() {
  createCanvas(600, 400);
  balls = [];
  
  // Create balls with random positions, velocities, masses, and colors
  for (let i = 0; i < numBalls; i++) {
    // Make sure balls don't start too close to the edges
    const r = radius + 5;
    const x = random(r, width - r);
    const y = random(r, height - r);
    
    // Random speed between 1 and 3
    const speed = random(1, 3);
    const angle = random(TWO_PI);
    const dx = cos(angle) * speed;
    const dy = sin(angle) * speed;
    
    // Random mass between 1 and 3
    const mass = random(1, 3);
    
    // Random color
    const color = colors[floor(random(colors.length))];
    
    balls.push({
      x: x,
      y: y,
      dx: dx,
      dy: dy,
      radius: radius * sqrt(mass),  // Radius proportional to sqrt of mass
      mass: mass,
      color: color
    });
  }
}

function draw() {
  background(40);
  
  // Display status text
  fill(255);
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  text(`Gravity: ${gravityEnabled ? 'ON' : 'OFF'} (press 'g' to toggle)`, 10, 10);
  
  // Handle collisions
  checkCollisions();
  
  // Update and draw balls
  for (let b of balls) {
    // Apply gravity if enabled
    if (gravityEnabled) {
      b.dy += gravity;
    }
    
    // Update position
    b.x += b.dx;
    b.y += b.dy;
    
    // Handle wall collisions
    if (b.x - b.radius < 0) {
      b.x = b.radius;
      b.dx *= -1;
    }
    if (b.x + b.radius > width) {
      b.x = width - b.radius;
      b.dx *= -1;
    }
    if (b.y - b.radius < 0) {
      b.y = b.radius;
      b.dy *= -1;
    }
    if (b.y + b.radius > height) {
      b.y = height - b.radius;
      b.dy *= -1;
    }
    
    // Draw ball
    fill(b.color);
    noStroke();
    ellipse(b.x, b.y, b.radius * 2);
  }
}

function keyPressed() {
  // Toggle gravity when 'g' key is pressed
  if (key === 'g' || key === 'G') {
    gravityEnabled = !gravityEnabled;
    
    // If gravity is turned off, reduce vertical velocity to make it more obvious
    if (!gravityEnabled) {
      for (let b of balls) {
        b.dy *= 0.5;
      }
    }
  }
}

function checkCollisions() {
  // Check each pair of balls for collisions
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      let b1 = balls[i];
      let b2 = balls[j];
      
      // Calculate distance between balls
      let dx = b2.x - b1.x;
      let dy = b2.y - b1.y;
      let distance = sqrt(dx * dx + dy * dy);
      
      // If balls are overlapping
      let minDistance = b1.radius + b2.radius;
      if (distance < minDistance) {
        // Calculate unit normal vector
        let nx = dx / distance;
        let ny = dy / distance;
        
        // Calculate relative velocity
        let dvx = b2.dx - b1.dx;
        let dvy = b2.dy - b1.dy;
        
        // Calculate velocity component along normal
        let velocityAlongNormal = dvx * nx + dvy * ny;
        
        // Don't resolve if velocities are separating
        if (velocityAlongNormal > 0) continue;
        
        // Calculate impulse scalar
        let restitution = 0.9; // Coefficient of restitution (bounciness)
        let impulseScalar = -(1 + restitution) * velocityAlongNormal / 
                            (1/b1.mass + 1/b2.mass);
        
        // Apply impulse
        b1.dx -= impulseScalar * nx / b1.mass;
        b1.dy -= impulseScalar * ny / b1.mass;
        b2.dx += impulseScalar * nx / b2.mass;
        b2.dy += impulseScalar * ny / b2.mass;
        
        // Move balls apart to prevent sticking
        let overlap = minDistance - distance;
        let moveX = overlap * nx * 0.5;
        let moveY = overlap * ny * 0.5;
        
        b1.x -= moveX;
        b1.y -= moveY;
        b2.x += moveX;
        b2.y += moveY;
      }
    }
  }
}

