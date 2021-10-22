    

function preload(){
sea1 = loadImage("sea.png")
//shipimage = loadImage("ship-1.png")
//ship2image = loadImage("ship-2.png")
//ship3image = loadImage("ship-3.png")
//ship4image = loadImage("ship-4.png")
ship = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png")


}

function setup(){
  createCanvas(900,700);
   //var ship1 = createSprite()
   //ship1.addImage(shipimage);
   //ship1.scale=0.2
//var ship2 = createSprite()
//ship2.addImage(ship2image);
//ship2.scale=0.2
//var ship3 = createSprite()
//ship3.addImage(ship3image);
//ship3.scale=0.2
//var ship4 = createSprite()
//ship4.addImage(ship4image);
//ship4.scale=0.2
var sea   = createSprite()
sea.addImage(sea1)
sea.scale=0.4
var shipp
shipp.addImage(ship)
shipp.scale=0.2
}

function draw() {
if (sea.ship <0){
  sea.ship = sea.width/2;
}







  background("blue")
  drawSprites()
}                                                                                                                  