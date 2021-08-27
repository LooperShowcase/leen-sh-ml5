let player;
let bgImg;
let playerImg;
let obsImg;
let obstacles = [];
let wordClassifier;

function preload() {
  bgImg = loadImage("background.png");
  playerImg = loadImage("player.png");
  obsImg = loadImage("obstacle1.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 400);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  console.log(results[0].label + " " + results[0].confidence);
  if (results[0].label == "up") {
    player.jump();
  }
}

function draw() {
  background(bgImg);

  if (random() < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      textSize(85);
      fill("#12ff69");
      text("edward hacked you", 30, 210);
      noLoop();
    }
  }
  player.show();
  player.move();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
