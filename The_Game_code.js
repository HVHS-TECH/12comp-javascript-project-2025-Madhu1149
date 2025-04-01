/*******************************************************/
// variables and constants
/*******************************************************/
const rotationSpeed = 0;
var score = 0;
var lifes = 3;


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("");
    cnv = new Canvas(windowWidth, windowHeight);

    //world gravity
    world.gravity.y = 10;

    //creating player sprite
    Player_Box = new Sprite(300,620, 50,50);
    Player_Box.vel.x = 0;
    Player_Box.color = '#00bcd4';
   


    //Platform
    const  Platform = new Sprite(900, 750, 2008, 10, 'k');
    Platform.color = '#d3d3d3';

    // end of screen wall
    //right wall
    let wallRH = new Sprite(1890, 400, 8, 690, 'k');
    wallRH.color = 'blue';
    //left wall
    let wallLH = new Sprite(10, 400, 8, 690, 'k');
    wallLH.color = 'black';
    //top wall
    let wallTop = new Sprite(950, 50, 2008, 10, 'k');
    wallTop.color = 'purple';

    //end of screen to add score
    wall = new Sprite(10, 720, 10, 10);
    wall.color = 'white';
    wall.rotationSpeed = 0;
    wall.vel.x = 0;

    // Group for coins
    obsticles_Group = new Group();

    
    function spawn_obsticles() {
        y = random(640, 730);
        const  obsticles = new Sprite(1900, y , 30, 'k');
        obsticles.color = 'red';
        obsticles.vel.x = -2;
        obsticles_Group.add(obsticles);
    }

    // Register a callback for collision of obsticles and end of the screen
    obsticles_Group.collides(wall,delete_obsticles);
    
    //registering callback for collision of player and obsticles
    Player_Box.collides(obsticles_Group,delete_player);


}
// spawning obsticles
function spawn_obsticles() {
    //y = random(660, 730);
    const  obsticles = new Sprite(1900, 725 , 35, 'k');
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

    
    
     // Spawn initial obsticles
     if (random(0,3000)<30){
        spawn_obsticles();
    }

     // Displaying score on screen
     displayScore();

     //display lives on screen
     display_lives()

}

// Displaying score function
function displayScore(){
    fill(0, 0, 0);
	textSize(20);
    fill('white') 
	text("Score: " + score, 10,20);
}

// Displaying lifes function
function display_lives(){
    fill(0, 0, 0);
	textSize(20);
    fill('white') 
	text("lives: " + lifes, 50,20);
}

// delete obsticles after they go out of screen
function delete_obsticles(_delete_obsticle, _wall){
    //delete the obsticle which collides
    _delete_obsticle.remove();
    score += 1;
}

// delete player after they collide with obsticle and lose game
function delete_player(_delete_player, _obsticles){
    //delete the obsticle which collides
    _delete_player.remove();
    lifes -= 1;

}


/*******************************************************/
//  END OF APP
/*******************************************************/