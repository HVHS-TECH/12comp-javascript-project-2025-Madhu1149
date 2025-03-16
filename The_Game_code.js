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
    Player_Box = new Sprite(300,620, 50,50, '');
    Player_Box.color = '#00bcd4';
    Player_Box.friction   = 0;

    //Platform
    let Platform = new Sprite(900, 750, 2008, 10, 'k');
    Platform.color = '#d3d3d3';

    // Group for coins
    obsticles_Group = new Group();


}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() { 
    background('#1e2a47');
    if (mouse.presses()) {
        Player_Box.vel.y = 60;
        console.log("hi")
    }
    
    //obsticles
    function spawn_obsticles() {
        let y = random(640, 730);
        let obsticles = new Sprite(1900, y , 30, 'k');
        obsticles.color = 'red';
        obsticles.vel.x = -2;
        obsticles_Group.add(obsticles);
    }

    // Spawn initial coin
    spawn_obsticles();


}

/*******************************************************/
//  END OF APP
/*******************************************************/