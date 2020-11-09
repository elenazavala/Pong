function Computer() {
    this.x = width - 13;
    this.y = height / 2;
    this.v = 5; //pixel speed that computer will move
    this.w = 20; //width attribute 
    this.h = 80; //height attribute
    this.score = 0;

    //this function will show in which position the computer is
    this.show = () => {
        rectMode(CENTER); //center the computer 
        rect(this.x, this.y, this.w, this.h) //the computer is a rectangle
    }

    //function to make computer chase the ball
    this.move = (pongball) => {
        if (pongball.x > width / 2) // if the ball is in the computer's side of the ping pong court
        {
            if (pongball.y > this.y) // if the ball is near the computer on the bottom right
            {
                this.y += this.v; //increase speed so that computer can catch it
            }
            else if (pongball.y < this.y) // if the ball is near the computer on the upper right
            {
                this.y -= this.v; //reduce speed
            }
        }
    }

}
