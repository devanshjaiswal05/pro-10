var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var devansh=createSprite(30,30,20,20);
devansh.shapeColor="red";

var wall1=createSprite(100,10,20,150); 
var wall2=createSprite(165,80,150,20);
var wall3=createSprite(20,140,60,20); 
var wall4=createSprite(80,200,20,100);
var wall5=createSprite(300,0,20,300);
var wall6=createSprite(100,300,100,20);
var wall7=createSprite(170,0,20,80);
var wall8=createSprite(270,30,80,20);
var wall9=createSprite(190,130,20,90);
var wall10=createSprite(160,230,150,20);
var wall11=createSprite(265,120,50,20);
var wall12=createSprite(330,70,50,20);
var wall13=createSprite(230,255,20,70);
var wall14=createSprite(140,320,20,60);
var wall15=createSprite(265,340,270,20);
var wall16=createSprite(80,320,20,50);
var wall17 = createSprite(310, 290, 20, 90);
var wall18=createSprite(395,200,90,20);
var wall19=createSprite(340,290,40,20);
var wall20=createSprite(45,226,50,20);
var wall21=createSprite(110,160,50,20)

var cup=createSprite(400,400,20,70);
cup.shapeColor="yellow";

function draw() {
  background("black");
 if (keyDown("up")) {
    devansh.velocityX=0;
    devansh.velocityY=-5;
  }
   if(keyDown("down")){
    devansh.velocityX=0;
    devansh.velocityY=5 ;
   }
if (keyDown("left")) {
   devansh.velocityX=-5;
   devansh.velocityY=0;
   }
if (keyDown("right")) {
   devansh.velocityX=5;
   devansh.velocityY=0;
   }
if (devansh.collide(cup)) {
  background("white");
}

createEdgeSprites();
devansh.bounceOff(edges);
devansh.bounceOff(wall1);
devansh.bounceOff(wall2);
devansh.bounceOff(wall3);
devansh.bounceOff(wall4);
devansh.bounceOff(wall5);
devansh.bounceOff(wall6);
devansh.bounceOff(wall7);
devansh.bounceOff(wall8);
devansh.bounceOff(wall9);
devansh.bounceOff(wall10);
devansh.bounceOff(wall11);
devansh.bounceOff(wall12);
devansh.bounceOff(wall13);
devansh.bounceOff(wall14);
devansh.bounceOff(wall15);
devansh.bounceOff(wall16);
devansh.bounceOff(wall17);
devansh.bounceOff(wall18);
devansh.bounceOff(wall19);
devansh.bounceOff(wall20);
devansh.bounceOff(wall21);
drawSprites();

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
