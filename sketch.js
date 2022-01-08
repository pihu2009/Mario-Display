//namespacing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
const Render= Matter.Render;
const constraint= Matter.Constraint
const Body=Matter.Body


var myengine,myworld,bird1,ground1,pig1,log1,box1,box2,box3,box4,pig2,log2,box5,log3,log4;
var bg,log5,sling
var gamestate="onsling"
var score



function preload()
{
 bg=loadImage("sprites/bg11.png")



}

function setup()
{
    
createCanvas(1800,700)
score=0


myengine= Engine.create();          
myworld=myengine.world; 

nightmode()

ground1 = new Ground(1500,700,3000,20)
bird1= new Bird(285,520,50,50,)
pig1= new Pig(1150,650)
box1= new Box(1000,650)
box2= new Box(1300,650)
log1= new Log(1150,550,450,PI)
box3= new Box(1000,485)
box4= new Box(1300,485)
pig2= new Pig(1150,485)
log2= new Log(1150,385,450,PI)
box5= new Box(1150,300)
log3= new Log(1100,300,220,-PI/4)
log4= new Log(1200,300,220,PI/4)
sling=new Slingshot(bird1.body,{x:285,y:520})


/*var render = Render.create({
	   element: document.body,
	   engine: myengine,
	   options: 
	   {
         width: 1800,
	     height: 800,
	     wireframes: false
	   }
	 }); 
	
	Render.run(render);
*/
}

function draw()
{
Engine.update(myengine)     
background(bg)
image(bg,width/2,height/2,1800,700)
ground1.display()
sling.display()
bird1.display()
pig1.display()
pig1.Pigscore()
box1.display()
box2.display()
log1.display()
box3.display()
box4.display()
pig2.display()
pig2.Pigscore()
log2.display()
box5.display()
log3.display()
log4.display()

textSize(50)
text("Score="+score,1550,50)

if(score>=200)
{
 gamestate="offsling"
 textSize(50)
 text("YOU WIN!!",900,350)


}





}




function mouseDragged()
{
if(gamestate!=="offsling")
{
 Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
}	
 
}




function mouseReleased()
{
 
sling.birdfly()
gamestate="offsling"

}



function keyPressed()
{

if(keyCode===82&&bird1.body.speed<1)
{
Body.setPosition(bird1.body,{x:285,y:520}) 
sling.birdattached(bird1.body)
bird1.path=[]
bird1.visibilty=255
gamestate='onsling'
reset()
}

}


async function nightmode()
{
 var apiinfo = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
 var apijson = await apiinfo.json()
 var mydatetime = apijson.datetime;
 var myhour = mydatetime.slice(11,13)
 
 if(myhour>=06&&myhour<=19)
 {
	bg=loadImage("sprites/bg11.png")  
 }else{

 bg=loadImage("sprites/bgnight.png")

}

}


function reset()
{
/*ground1 = new Ground(1500,700,3000,20)
bird1= new Bird(285,520,50,50,)
pig1= new Pig(1150,650)
box1= new Box(1000,650)
box2= new Box(1300,650)
log1= new Log(1150,550,450,PI)
box3= new Box(1000,485)
box4= new Box(1300,485)
pig2= new Pig(1150,485)
log2= new Log(1150,385,450,PI)
box5= new Box(1150,300)
log3= new Log(1100,300,220,-PI/4)
log4= new Log(1200,300,220,PI/4)
sling= new Slingshot(bird1.body,{x:285,y:520})*/
Matter.Body.setPosition(box1.body,{x:100,y:650})
}









