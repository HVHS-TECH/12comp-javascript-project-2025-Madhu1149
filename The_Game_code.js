/*******************************************************/
// variables and constants
/*******************************************************/
let Platform ;
let y = 620;
let jump = 0;
const MOVEMENTSPEED = 5;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("");
    cnv = new Canvas(windowWidth, windowHeight);
    world.gravity.y = 10;
    ball_1 = new Sprite(300,y, 50, 'd');
    ball_1.color = '#00bcd4';
    ball_1.friction   = 0;

    let Platform = new Sprite(900, 750, 2008, 10, 's'); 
    Platform.color = '#d3d3d3';

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() { 
    background('#1e2a47');
    y = y + jump
    if (y < 620){
        jump = jump + 1
    }else{
        jump = 0
        y = 620
    }
    if (mouse.presses()) {
        if(y <= 620){
            jump = -20
        }
        console.log("hi")
        }
}

/*******************************************************/
//  END OF APP
/*******************************************************/