var helicopterIMG, helicopterSprite, packageSprite,packageIMG,fenceIMG,fenceIMGflip,fence1,fence2;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	fenceIMG=loadImage("fence.png")
	fenceIMGflip=loadImage("fence.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	fence2 = createSprite(300,610, 20,100);
	fence2.addImage(fenceIMG);
	fence2.scale=0.2;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	fence1 = createSprite(500, 610, 20,100);
	fence1.addImage(fenceIMGflip);
	fence1.scale=0.2;

	engine = Engine.create();
	world = engine.world;

	fence2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, fence2);

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.8});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	fence1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, fence1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false); 
	console.log("down")

  
}
}


