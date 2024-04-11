let usersHasClicked = false;
let metalSound;
function preload() {

  metalSound = loadSound('assets/metal.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(46)
  textAlign(CENTER)
  metalSound.setVolume(0.5)
}


function draw() {


  background('hotpink');
  if (usersHasClicked == false) {
    text
      ('Hi, Hallo, aloha, click here',
        width / 2,
        height / 2)
  } else {
    if (metalSound.isPlaying() == false) {
      metalSound.play();
      let bob = map(
        mouseX,// the incoming number
        0, // the minimum incoming
        width, // maximum incoming 
        0, // minimum output
        1 // maximum output
      )
        metalSound.setVolume(bob)
    }
  }
}



function mouseClicked() {
  usersHasClicked = true;
}
