// sketch_#.js will draw the curves and position the content blocks.

var topDistances = [0, 400, 750, 870, 1260];
// distances from top are absolute, in pixels
// each of these is a place for a paragraph, start/end for line.

var leftDistances = [0.5, 0.67, 0.3, 0.8, 0.4];
// distances from left are % of window width

var topControls = [50,150, 600, 720, 900, 880, 600, 1000];
// four control values per text block (except first/last)

var leftControls = [60, -30, 10, -40, 100, -90, -20, 30];
// in pixels to add to w*leftDistances

var rotations = [0];
for(var i = 1; i<topDistances.length-1; i++){
  rotations[i] = Math.floor((Math.random()-0.5)*22);
}

var newLeftDistances = [];

function getNewLefts(){
  var w = windowWidth;
  if(w < 600){
    w = 600;
  }

  newLeftDistances = math.multiply(leftDistances, w);
}

/////////////////////////////////////////////////////////

function drawLines(){
  background(255); //wipes over previous lines
  noFill();
  stroke(0);

  var n_beziers = topDistances.length - 1;

  for(i=0; i<n_beziers; i++){
    // bezier syntax:
    // bezier(pt1x, pt1y, cl1x,cl1y,cl2x,cl2y,pt2x,pt2y);
    bezier(newLeftDistances[i],topDistances[i],newLeftDistances[i]+leftControls[i*2],topControls[i*2],newLeftDistances[i+1]+leftControls[i*2+1],topControls[i*2+1],newLeftDistances[i+1],topDistances[i+1]);
  }
}

function drawBlocks(){

  var top_adjust = 40;
  var left_adjust = -115;

  for(i=0; i<=topDistances.length; i++){
    $('#c_'+i).css("top",topDistances[i]+top_adjust);
    $('#c_'+i).css("left",newLeftDistances[i]+left_adjust);
    $('#c_'+i).css("transform","rotate("+rotations[i]+"deg");
    $('#c_'+i).css("-ms-transform","rotate("+rotations[i]+"deg");
    $('#c_'+i).css("-webkit-transform","rotate("+rotations[i]+"deg");
  }
}

function setup(){
  var w = windowWidth;
  var canvas = createCanvas(w,max(topDistances)+400);
  canvas.parent('p5'); // put the p5 stuff in big background element

  getNewLefts();
  drawLines();
  drawBlocks();

  // tack the footer in at the end.
  docHeight = $(document).height();
  $("#footer").css("top",docHeight-80);
}

function windowResized(){
  var w = windowWidth;
  resizeCanvas(w,max(topDistances)+400);

  getNewLefts();
  drawLines();
  drawBlocks();
}
