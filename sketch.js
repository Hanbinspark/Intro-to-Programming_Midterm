let numLines = 100; 
let baseRadius = 300; 
let angleIncrement = 0.01; 
let pulseSpeed = 0.01; 

function setup() {
  createCanvas(700, 700);
  background(200);
  text('Hanbin Park', 50, 50); 
   
  stroke(255, 20); 
  noFill();
}

function draw() {
  background(0, 3); 

  translate(width / 2, height / 2); 
  let currentRadius = baseRadius * (1 + 0.1 * sin(frameCount * pulseSpeed)); 

  for (let i = 0; i < numLines; i++) {
    let angleOffset = i * 0.1 + random(-0.02, 0.02); 
    let angle = angleOffset + frameCount * angleIncrement; 
    
    beginShape();
    for (let t = 0; t < TWO_PI; t += 0.1) {
      let noiseFactor = noise(t * 2 + i * 0.1, frameCount * 0.01); 
      let radiusVariation = currentRadius * (0.9 + 0.2 * noiseFactor); 
      let x = radiusVariation * cos(t + angle);
      let y = radiusVariation * sin(t + angle);
      vertex(x, y);
    }
    endShape();
    
    currentRadius *= 0.97; 
  }
  
}
