/*******************************************************/
// variables and constants
/*******************************************************/
let Platform ;
const MOVEMENTSPEED = 5;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("");
    cnv = new Canvas(windowWidth, windowHeight);
    world.gravity.y = 20;
    Player_Box = new Sprite(300,620, 50,50, 'd');
    Player_Box.color = '#00bcd4';
    Player_Box.friction   = 0;

    //Platform
    let Platform = new Sprite(900, 750, 2008, 10, 's');
    Platform.color = '#d3d3d3';

    //obsticles
    let obsticles = new Sprite(700, 620, 20, 'k');
    obsticles.color = 'Red';
    
    
    


}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() { 
    background('#1e2a47');
    if (mouse.presses()) {
        Player_Box.vel.y = 50;
        console.log("hi")
        }
}

/*******************************************************/
//  END OF APP
/*******************************************************/