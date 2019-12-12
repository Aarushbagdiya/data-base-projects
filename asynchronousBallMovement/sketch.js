var hypoball,database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hypoball = createSprite(250,250,10,10);
    hypoball.shapeColor = "red";
    var hypoball=database.ref('ball/position')
    hypoball.on("value",readPosition,showError);
}

function draw(){
    background("white");
  //  if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
//}
}
function writePosition(x,y){
    database.ref('ball/position').set({
         'x': position.x + x ,
         'y': position.y + y 
        })
     
}
 function readPosition(data){
     position=data.val();
     console.log(position.x);
     hypoball.x=position.x;
     hypoball.y=position.y;
 }
 function showError(){
     console.log("going wrong, man");

 }