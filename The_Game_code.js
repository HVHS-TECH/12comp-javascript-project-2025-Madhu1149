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
    world.gravity.y = 10;
    ball_1 = new Sprite(300,620, 50, 'd');
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

    if (kb.pressing('up')) {
        world.gravity.y = -10;
    
    }

    if (mouse.presses()) {

    
        
        }

        if (kb.pressing('w')) {
            ball_1.vel.y = -MOVEMENTSPEED;
            world.gravity.y

        }

}
/*******************************************************/
//  END OF APP
/*******************************************************/