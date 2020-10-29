//constructor function for player object
function Player() {

    this.x = 13; //left player
    this.y = height / 2;
    this.v = 5; //pixel speed that player will move
    this.w = 20; //width attribute 
    this.h = 80; //height attribute
    this.score = 0;

    //this function will show in which position the player is
    this.show = () => {
        rectMode(CENTER); //center the plater 
        rect(this.x, this.y, this.w, this.h) //the player is a rectangle
    }

    // function for the player movement
    // the player will follow the mouse
    this.move = () =>
    {
        //mouse in Y position
        if( mouseY < this.y ) //if mouse is above platform
        {
            this.y = this.y - this.v; //reduce speed

        }else if( mouseY > this.y )
        {
            this.y = this.y + this.v; 
        }
    }
}