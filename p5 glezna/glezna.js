let x, y, s, s2;
let img;

function preload() {
    img = loadImage('./bilde.png');
    frameRate(3);

    n = 0;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {

n++;

x = random(-170, windowWidth - 600);
y = random(50, windowHeight - 800);
s = random(666, 888);

image(img, x, y, s, s);

// if (n == 22) {
//     noloop;
// }

}