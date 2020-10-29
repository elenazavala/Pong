let player;
let ball;
let computer;
let pongballs = [];
var courtSound;
var racketSound;
var scoreSound;

function preload() 
{
  courtSound = loadSound("sounds/court.mp3");
  racketSound = loadSound("sounds/racket.mp3");
  scoreSound = loadSound("sounds/points.mp3");
}


function setup() {
  // put setup code here
  createCanvas(700, 650);
  player = new Player();
  ball = new Ball;
  computer = new Computer;

  //create the pongballs
  for (let i = 0; i < 4; i++) {
    pongballs.push(new Ball());
  }
}

//this function keeps updating
function draw() {
  // put drawing code here


  /*draw background and player*/
  fill(1000, 1000, 1000, 1000);
  background(0);
  textSize(48);
  text(player.points, 30, 40);
  text(computer.points, width - 80, 40);
  player.move();
  player.show();
  ball.move();
  ball.show();

 /*draw computer*/
  fill(255, 0, 0)
  computer.show();
  computer.move(ball);

  /*draw set line*/
  fill(1000, 1000, 1000, 1000);
  rect(width / 2, 600, 10, 1200);

  /* handle collisions */
  if (ball.collision(computer)) // if ball and computer collide
  {
    racketSound.play();
    ball.vx = -4; //set speed to negative so that it goes in the opposite direction
  }
  if (ball.collision(player)) // if ball collides w/ player
  {
    racketSound.play();
    ball.vx = 4; //set speed to positive so that it goes in the opposite direction
  }

  /* handle score */
  if (ball.x > width) {
    player.score++;
    scoreSound.play();
    newGame();
  } else if (ball.x < 0) {
    computer.score++;
    scoreSound.play();
    newGame();
  }
}

/* new game set */
function newGame() {
  if (pongballs.length > 0) {
    ball = pongballs.pop();
  } else {
    window.location.reload();
  }
}

