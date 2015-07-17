function setup(){

  var w = windowWidth;
  var h = windowHeight*3;

  createCanvas(w,h);

  noFill();
  stroke(0);
  //curve(w/2,80,w/2+20,80,w/2+40,200,w/2+45,600);
  //curve(0,0,w/2,0,w*(3/4),500,w*(2/3),400);
  bezier(w/2,0,w/2+60,10,w*(3/4),200,w*(2/3),400);

  // bezier syntax:
  // bezier(pt1x, pt1y, cl1x,cl1y,cl2x,cl2y,pt2x,pt2y);

}

function draw(){

}