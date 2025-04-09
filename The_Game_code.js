/*******************************************************/
// variables and constants
/*******************************************************/
var score = 0;
var life = 3;
let Game_Started = false;
let Start_Button, Play_Again_Button; //buttons
let Player_Box;                      //main player
let wall;                            //score triggering wall
let obstacles_Group;                     //Group to hold all obsticles
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("");
    cnv = new Canvas(windowWidth, windowHeight);

    //Creating and positioning the start game button
    Start_Button = createButton ('Start Game');
    Start_Button.position(700,300);
    Start_Button.mousePressed(startGame);

    //Create play again button 
    Play_Again_Button = createButton ('Play Again')
    Play_Again_Button.position(700,500);
    Play_Again_Button.mousePressed(restartGame);
    Play_Again_Button.hide();
    
    //for blank screen 
    noLoop();

    //setup game
    setupGame();
}
/*******************************************************/
//Function to start game
/*******************************************************/

function setupGame(){
    background('#1e2a47');

    score = 0;
    life = 3;

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
    wall.color = '#1e2a47';
    wall.rotationSpeed = 0;
    wall.vel.x = 0;

    // Group for coins
    obstacles_Group = new Group();
    
    // Register a callback for collision of obstacles and end of the screen
    obstacles_Group.collides(wall,delete_obstacles);
    
    //registering callback for collision of player and obstacles
    Player_Box.collides(obstacles_Group,lose_life);
}

/*******************************************************/
// start game function
/*******************************************************/
function startGame(){
    Game_Started = true;
    Start_Button.hide(); //saw this line online
    loop();
}

/*******************************************************/
 //spawning obstacles
/*******************************************************/
function spawn_obstacles() {
     const  obstacles = new Sprite(1900, 725 , 35, 'k');
     obstacles.color = 'red';
     obstacles.vel.x = -2;
     obstacles_Group.add(obstacles);
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    if (!Game_Started){
        noLoop();
        return;
    } 

    background('#1e2a47');
    //player Jumps when mouse is clicked
    if (mouse.presses()) {
        Player_Box.vel.y = 60;
    
    } 
     //Randomly spawn obstacles
     if (random(0,3000)<30){
        spawn_obstacles();
    }

     // Displaying score on screen
     displayScore();

     //Display lives on screen
     display_lives()

}
/*******************************************************/
// Displaying score function
/*******************************************************/
function displayScore(){
	textSize(20);
    fill('white') 
	text("Score: " + score, 10,20);
}

/*******************************************************/
// Displaying lifes function
/*******************************************************/
function display_lives(){
	textSize(20);
    fill('white') 
	text("Lives: " + life, 100,20);
}

/*******************************************************/
// delete obstacles when obstacle hits end wall
/*******************************************************/
function delete_obstacles(_delete_obstacle, _wall){
    //delete the obstacle which collides
    _delete_obstacle.remove();
    score += 1;
}

/*******************************************************/
// lose life after player collide with obstacle 
/*******************************************************/
function lose_life(_player,obstacle){
    //delete the obstacle which collides
    obstacle.remove();
    life -= 1;

    //if all 3 lives are lost the game will end
    if (life <= 0){
        game_over();
    }
    

}

/*******************************************************/
//show game over screen
/*******************************************************/
function game_over(){
    clear(); // i don't lnow what this line is i saw it in youtube
    background('black');
    fill('red');
    textSize(50);
    text("Game Over",400,400);
    text("Score: " + score, 400,500);

    noLoop(); //stops game loop
    Play_Again_Button.show(); //shows play again button


}

/*******************************************************/
//restart everything and play again button
/*******************************************************/
function restartGame(){
    Play_Again_Button.hide();
    setupGame();
    loop();
}


/*******************************************************/
//  END OF APP
/*******************************************************/