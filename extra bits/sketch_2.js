

function setup(){

  var w = windowWidth;
  var h = windowHeight*2;

  createCanvas(w,h);

  // bezier syntax:
  // bezier(pt1x, pt1y, cl1x,cl1y,cl2x,cl2y,pt2x,pt2y);

  drawlines(w,h);

}

function draw(){

}

function windowResized(){
  var w = windowWidth;
  var h = windowHeight*2;
  drawlines(w,h);
}

function drawlines(w,h){
  background(255);
  noFill();
  stroke(0);
  bezier(w/2,0,w/2+60,10,w*(3/4),200,w*(2/3),400);

  bezier(w*(11/15),455,w*(4/5),600,w*0.4,720,w*0.33,750);

  bezier(w*0.3,810,w*0.45,900,w*0.7,880,w*0.8,870);

  bezier(w*0.77, 825,w*0.55,600,w*0.4,1000,w*0.4,1260);

}