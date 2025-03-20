/*******************************************************/
// variables and constants
/*******************************************************/
let Platform ;
let obsticles
const MOVEMENTSPEED = 5;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("");
    cnv = new Canvas(windowWidth, windowHeight);
    Player_Box = new Sprite(300,620, 50,50, 'k');
    Player_Box.color = '#00bcd4';
   


    //Platform
    let Platform = new Sprite(900, 750, 2008, 10, 'k');
    Platform.color = '#d3d3d3';

    // Group for coins
    obsticles_Group = new Group();

}

//obsticles
function spawn_obsticles() {
    let y = random(640, 730);
    let obsticles = new Sprite(1900, y , 30, 'k');
    obsticles.color = 'red';
    obsticles.vel.x = -2;
    obsticles_Group.add(obsticles);
}


	
/*******************************************************/
// draw()
/*******************************************************/
function draw() { 
    background('#1e2a47');
    //player Jumps when mouse is clicked
    if (mouse.presses()) {
        Player_Box.vel.y = -40;
    
    }
    //When the player reaches a certain height it falls onto the platform
    
    /*
    if ( = -40) {
        Player_Box = new Sprite(300,620, 50,50, 'k');
    
    }
        */


    // Spawn initial obsticles
    if (random(0,3000)<50){
        spawn_obsticles();
    }

}



/*******************************************************/
//  END OF APP
/*******************************************************/