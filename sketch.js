let player;
let ball;
let computer;
var pongballs = [];
var courtSound;
var racketSound;
var scoreSound;

function preload() {
  courtSound = loadSound("sounds/court.mp3");
  racketSound = loadSound("sounds/racket.mp3");
  scoreSound = loadSound("sounds/points.mp3");
  battleSound = loadSound("sounds/battle.mp3");
  noiceSound = loadSound("sounds/noice.mp3");
  awwSound = loadSound("sounds/aww.mp3");
}


function setup() {
  // put setup code here
  mode = 0;
  createCanvas(700, 650);
  player = new Player();
  ball = new Ball;
  computer = new Computer;
  textAlign(CENTER);
  textSize(50);
  scoreSound.setVolume(0.5);
  battleSound.setVolume(0.2);

  battleSound.play();


  /* generate the pong balls */
  for (let i = 0; i < 5; i++) {
    pongballs.push(new Ball());
  }
}

//this function keeps updating
function draw() {
  // put drawing code here
  clear();
  if (mode == 0) {
    //battleSound.stop();
    textSize(21);
    text("press ENTER to start ", width/2, height/2);
  }

  if (mode == 1) {
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

    /*draw score board*/
    fill(1000, 1000, 1000, 1000);
    text(player.score + "                   " + computer.score, width / 2, 80);

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

    }
    if (ball.x < 0) {
      computer.score++;
      scoreSound.play();
      newGame();
    }
  }

}

/* new game set */
function newGame() {
  if (pongballs.length > 1) {
    ball = pongballs.pop(); //throw balls

  } else {
    background(0);
    fill(0, 0, 0);
    battleSound.stop();

    window.location.reload();
    if (computer.score > player.score) {
      awwSound.play();
      window.alert("You lose. Pathetic." + "\n" + "\n" + "Your final score: " + player.score + "\n" + "Computer's final score: " + computer.score + "\n" + "\n" );

    }
    else if (computer.score < player.score) {
      noiceSound.play();
      window.alert("You win! " + "\n" + "\n" + "Your final score: " + player.score + "\n" + "Computer's final score: " + computer.score + "\n" + "\n" );
    }


  }
}

/* start game */
function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  }
}
