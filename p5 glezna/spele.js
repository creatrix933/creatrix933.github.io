function setup() {
    createCanvas(400, 400);
    background(255);
  
    // 1. nosacījums
    let x1 = floor(random(1, 7)); // Metam kauliņu x asij (1 līdz 6)
    let y1 = floor(random(1, 7)) + 1; // Metam kauliņu un pieskaitam 1 y asij (1 līdz 6) + 1
    point(x1 * 50, height - y1 * 50);
  
    // 2. nosacījums
    let y2 = floor(random(1, 7)); // Metam kauliņu y asij (1 līdz 6)
    let x2 = y2 - 3; // Y vērtībai atņem 3 (var būt arī negatīvs)
    point(x2 * 50, height - y2 * 50);
  
    // 3. nosacījums
    let x3 = floor(random(1, 7)); // Metam kauliņu x asij (1 līdz 6)
    let y3 = floor(random(1, 7)); // Metam kauliņu y asij (1 līdz 6)
    point(x3 * 50, height - y3 * 50);
  
    // 4. nosacījums
    let x4 = x3;
    let y4 = x3 + y3 - 5;
    point(x4 * 50, height - y4 * 50);
  
    // Punktu savienošana
    stroke(0);
    strokeWeight(2);
    line(x1 * 50, height - y1 * 50, x2 * 50, height - y2 * 50);
    line(x2 * 50, height - y2 * 50, x3 * 50, height - y3 * 50);
    line(x3 * 50, height - y3 * 50, x4 * 50, height - y4 * 50);
    line(x4 * 50, height - y4 * 50, x1 * 50, height - y1 * 50);
  }
  
  function draw() {
    // Nekas nav nepieciešams šeit
  }
  