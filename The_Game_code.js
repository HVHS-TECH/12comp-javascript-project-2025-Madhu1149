/*******************************************************/
// variables and constants
/*******************************************************/
const rotationSpeed = 0;  
var score = 0;


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("");
    cnv = new Canvas(windowWidth, windowHeight);
    world.gravity.y = 10;
    Player_Box = new Sprite(300,620, 50,50);
    Player_Box.vel.x = 0;
    Player_Box.color = '#00bcd4';
   


    //Platform
    const  Platform = new Sprite(900, 750, 2008, 10, 'k');
    Platform.color = '#d3d3d3';

    // Group for coins
    obsticles_Group = new Group();


}

//obsticles
function spawn_obsticles() {
    y = random(640, 730);
    const  obsticles = new Sprite(1900, y , 30, 'k');
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
        Player_Box.vel.y = 60;
    
    } 
//When the player reaches a certain height it falls onto the platform

/*
if ( Player_Box.vel.y = -4;) {
    Player_Box.vel.y = 4
}
*/



// Spawn initial obsticles
if (random(0,3000)<30){
    spawn_obsticles();
}

}

function collectCoin(_collectedCoin, _player) {
    _collectedCoin.remove();
    score += 1;
    spawnCoin();
}


/*******************************************************/
//  END OF APP
/*******************************************************/