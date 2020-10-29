
function Ball() {
    this.x = width / 2; //start position of the ball be at the center
    this.y = height / 2;
    this.vx = -3; //ball speed
    this.vy = 6;

    //function to show the pingpong ball
    this.show = () => {
        ellipse(this.x, this.y, 15, 15);//draw a circle
    }

    /*function to move the ball*/
    this.move = function () {
        //set court boundaries/limits for the ball
        if (this.y < 1) // if y position of the ball is negative
        {
            courtSound.play();
            this.vy = 6.5; //make y speed be positive again so that it will change direction
        }
        if (this.y > height) //if y is bigger than our court height
        {
            courtSound.play();
            this.vy = -6.5 //make y negative so that it bounces back 
        }
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    /* handle ball and player collision */
    this.collision = (player) => {
        let distance = dist(this.x, this.y, player.x, player.y); //store distance between the ball and the player
        let playerBallRadius = 15 + 20; // sum of the radius of the player and the radius of the ball

        if (distance < playerBallRadius) {
            return true;
        }
        else {
            return false;
        }
    }
}