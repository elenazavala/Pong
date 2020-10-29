let player;
let ball;
let computer;
let pongballs = [];

function setup() {
  // put setup code here
  createCanvas(600, 600);
  player = new Player();
  ball = new Ball;
  computer = new Computer;
  //create the pongballs
  for(let i = 0 ; i < 4 ; i++)
  {
    pongballs.push(new Ball());
  }
}

//this function keeps updating
function draw() {
  // put drawing code here
  
  fill (1000,1000,1000,1000);
  background(0);
  player.move();
  player.show();
  ball.move();
  ball.show();

  fill(255,0,0)
  computer.show();
  computer.move(ball);

  fill (1000,1000,1000,1000);
  rect(width/2,600,10,1200);

  if (ball.collision(computer)) // if ball and computer collide
  {
    ball.vx = -4; //set speed to negative so that it goes in the opposite direction
  }
  if (ball.collision(player)) // if ball collides w/ player
  {
    ball.vx = 4; //set speed to positive so that it goes in the opposite direction
  }

  //update score
  if (ball.x > width) {
    player.score++;
    newGame();
  } else if(ball.x < 0){
    computer.score++;
    newGame();
  }

}

//function to start a new game (referring to a game of a set in ping pong) when the ball goes out 
function newGame() {
  if (pongballs.length > 0) {
    ball = pongballs.pop();
  } else {
    alert("Game over");
    window.location.reload();
  }
}

