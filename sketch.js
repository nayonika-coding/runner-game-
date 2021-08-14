var jake, bomb, coin, energydrink, path, power, battery, mediumBattery, lowBattery, emptyBattery;
var batteryCounter = 0;
var scoreCounter = 0;

function preload() {
  //pre-load images
  jake = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  bomb = loadImage("bomb.png");
  coin = loadImage("coin.png");
  energydrink = loadImage("energyDrink.png");
  path = loadImage("path.png");
  power = loadImage("power.png");
  battery = loadImage("Power.PNG");
  mediumBattery = loadImage("Medium Power.png");
  lowBattery = loadImage("Low Power.png");
  emptyBattery = loadImage("emptyPower.png");
  gameOverImg = loadImage("croppedGameOver.png");

}

function setup() {
  createCanvas(400, 400);

  //batteryCounter

  //Sprites

  //NOTE: PATH SPRITE IS BEFORE OTHER SPRITES

  //Path: Background Sprite
  movingPath = createSprite(200, 200, 10, 10);
  movingPath.addImage("movingPath", path);
  movingPath.velocityY = 5;


  //Jake Sprite
  jakeRunning = createSprite(110, 300, 10, 10);
  jakeRunning.addAnimation("jakeRunning", jake);
  jakeRunning.scale = 0.5;

  //bomb Sprite
  bombMoving = createSprite(110, -1000, 10, 10);
  bombMoving.addImage("bomb", bomb);
  bombMoving.velocityY = 5;
  bombMoving.scale = 0.10;

  bombMoving2 = createSprite(210, -4500, 10, 10);
  bombMoving2.addImage("bomb2", bomb);
  bombMoving2.velocityY = 5;
  bombMoving2.scale = 0.10;

  bombMoving3 = createSprite(310, -2130, 10, 10);
  bombMoving3.addImage("bomb3", bomb);
  bombMoving3.velocityY = 5;
  bombMoving3.scale = 0.10;

  //coin Sprite
  coinMoving = createSprite(110, -3400, 10, 10);
  coinMoving.addImage("coinMoving", coin);
  coinMoving.velocityY = 5;
  coinMoving.scale = 0.5;

  coinMoving2 = createSprite(210, -2900, 10, 10);
  coinMoving2.addImage("coinMoving2", coin);
  coinMoving2.velocityY = 5;
  coinMoving2.scale = 0.5;

  coinMoving3 = createSprite(310, -3210, 10, 10);
  coinMoving3.addImage("coinMoving3", coin);
  coinMoving3.velocityY = 5;
  coinMoving3.scale = 0.5;

  //power Sprite
  powerup = createSprite(110, -4800, 10, 10)
  powerup.addImage("powerup", power);
  powerup.scale = 0.1;
  powerup.velocityY = 5;

  powerup2 = createSprite(210, -7865, 10, 10)
  powerup2.addImage("powerup", power);
  powerup2.scale = 0.1;
  powerup2.velocityY = 5;

  powerup3 = createSprite(310, -9456, 10, 10)
  powerup3.addImage("powerup", power);
  powerup3.scale = 0.1;
  powerup3.velocityY = 5;

  //battery Sprite
  jakeBattery = createSprite(350, 350, 10, 10);
  jakeBattery.addImage("jakeBattery", battery);
  jakeBattery.scale = 0.1;



}

function draw() {
  background("#9d6e5e");
  //batteryCounter
  fill("black");
  //text("B: " + batteryCounter, 355, 320);
  textSize(15);
  text("Score:", 353, 50);
  text(scoreCounter, 373, 65);


  //infinte running loop
  if (movingPath.y > 400) {
    movingPath.y = movingPath.width / 2
  }
  if (bombMoving.y > 400) {
    bombMoving.y = -1000;
    bombMoving.velocityY = 5;
  }
  if (bombMoving2.y > 400) {
    bombMoving2.y = -4813;
    bombMoving2.velocityY = 5;
  }
  if (bombMoving3.y > 400) {
    bombMoving3.y = -3458;
    bombMoving3.velocityY = 5;
  }
  if (coinMoving.y > 400) {
    coinMoving.y = -3900;
    coinMoving.velocityY = 5;
  }
  if (coinMoving2.y > 400) {
    coinMoving2.y = -3400;
    coinMoving2.velocityY = 5;
  }
  if (coinMoving3.y > 400) {
    coinMoving3.y = -3210;
    coinMoving3.velocityY = 5;
  }

  //jake hits bomb, then
  if (jakeRunning.isTouching(bombMoving)) {
    bombMoving.y = -1000;
    batteryCounter = batteryCounter + 1;
  }
  if (jakeRunning.isTouching(bombMoving2)) {
    bombMoving2.y = -4813;
    batteryCounter = batteryCounter + 1;
  }
  if (jakeRunning.isTouching(bombMoving3)) {
    bombMoving3.y = -3458;
    batteryCounter = batteryCounter + 1;
  }

  //scoreIncrements
  if (jakeRunning.isTouching(coinMoving)) {
    coinMoving.y = -3900;
    scoreCounter = scoreCounter + 10;
  }
  if (jakeRunning.isTouching(coinMoving2)) {
    coinMoving2.y = -3400;
    scoreCounter = scoreCounter + 10;
  }
  if (jakeRunning.isTouching(coinMoving3)) {
    coinMoving3.y = -3210;
    scoreCounter = scoreCounter + 10;
  }

  //batteryChanges
  if (batteryCounter <= 0) {
    jakeBattery = createSprite(350, 350, 10, 10);
    jakeBattery.addImage("jakeBattery", battery);
    jakeBattery.scale = 0.1;
  }
  if (batteryCounter === 1) {
    jakeBattery.visible = false;

    jakeMediumBattery = createSprite(350, 350, 10, 10);
    jakeMediumBattery.addImage("jakeMediumBattery", mediumBattery);
    jakeMediumBattery.scale = 0.1;
  }
  if (batteryCounter === 2) {
    jakeMediumBattery.visible = false;
    jakeLowBattery = createSprite(350, 350, 10, 10);
    jakeLowBattery.addImage("jakeLowBattery", lowBattery);
    jakeLowBattery.scale = 0.1;
  }
  if (batteryCounter > 2) {
    jakeLowBattery.visible = false;
    jakeEmptyBattery = createSprite(350, 350, 10, 10);
    jakeEmptyBattery.addImage("jakeEmptyBattery", emptyBattery);
    jakeEmptyBattery.scale = 0.1;
    jakeRunning.pause();

    coinMoving.setVelocity(0, 0);
    coinMoving2.setVelocity(0, 0);
    coinMoving3.setVelocity(0, 0);
    movingPath.setVelocity(0, 0);
    bombMoving.setVelocity(0, 0);
    bombMoving2.setVelocity(0, 0);
    bombMoving3.setVelocity(0, 0);
    powerup.setVelocity(0, 0);
    powerup2.setVelocity(0, 0);
    powerup3.setVelocity(0, 0);

    //create Game Over Sprite
    gameOver = createSprite(200, 200, 10, 10);
    gameOver.addImage("gameOver", gameOverImg);
    gameOver.scale = 0.5;



  }

  if (jakeRunning.isTouching(powerup)) {
    batteryCounter = batteryCounter - 1;
    powerup.y = -4500;

  }
  if (jakeRunning.isTouching(powerup2)) {
    batteryCounter = batteryCounter - 1;
    powerup2.y = -7865
  }
  if (jakeRunning.isTouching(powerup3)) {
    batteryCounter = batteryCounter - 1;
    powerup3.y = -9456;
  }



  //movement
  movement();
  //jakeRunning.x = mouseX;
  drawSprites();
}

function movement() {
  if (keyWentDown("right") && (jakeRunning.x < 310)) {
    jakeRunning.x = jakeRunning.x + 100;

  }

  if (keyWentDown("left") && jakeRunning.x > 110) {
    jakeRunning.x = jakeRunning.x - 100;
  }


}