/*******************************************************/
// variables and constants
/*******************************************************/
const rotationSpeed = 0;
var score = 0;
var life = 3;
let player_image, obstacle_image, background_image;

/***************************************************************/
//preloading the images for the player_image, obstacle_image and background_image
/***************************************************************/
function preload(){
    player_image = loadImage('Ninja.png');
    obstacle_image = loadImage('Ninja tool img.png');
    background_image = loadImage('Background.jpg');  
}
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
    Player_Box.image = player_image;
   


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
    obstacles_Group = new Group();
    
    // Register a callback for collision of obstacles and end of the screen
    obstacles_Group.collides(wall,delete_obstacles);
    
    //registering callback for collision of player and obstacles
    Player_Box.collides(obstacles_Group,lose_life);


}

 //spawning obstacles
function spawn_obstacles() {
    //y = random(660, 730);
    const  obstacles = new Sprite(1900, 725 , 35, 'k');
    obstacles.image = obstacle_image;
    obstacles.vel.x = -2;
    obstacles_Group.add(obstacles);
}



	
/*******************************************************/
// draw()
/*******************************************************/
function draw() { 
    background(background_image);
    //player Jumps when mouse is clicked
    if (mouse.presses()) {
        Player_Box.vel.y = 60;
    
    } 

    
    
     // S awn initial obstacles
     if (random(0,3000)<30){
        spawn_obstacles();
    }

     // D splaying score on screen
     displayScore();

     //display lives on screen
     display_lifes()

}

// Displaying score function
function displayScore(){
    fill(0, 0, 0);
	textSize(20);
    fill('white') 
	text("Score: " + score, 10,20);
}

// Displaying lifes function
function display_lifes(){
    fill(0, 0, 0);
	textSize(20);
    fill('white') 
	text("lives: " + life, 100,20);
}

// delete obstacles after they go out of screen
function delete_obstacles(_delete_obstacle, _wall){
    //delete the obstacle which collides
    _delete_obstacle.remove();
    score += 1;
}

// lose life after player collide with obstacle 
function lose_life(_player,obstacle){
    //delete the obstacle which collides
    obstacle.remove();
    life -= 1;

    //if all 3 lives are lost the game will end
    if (life <= 0){
        game_over();
    }
    

}

function game_over(){
    clear(); // i don't lnow what this line is i saw it in youtube
    background('black');
    fill('red');
    textSize(50);
    textAlign(CENTER,CENTER);
    text("Game Over",2,2);
    noloop(); //ends game

}



/*******************************************************/
//  END OF APP
/*******************************************************/