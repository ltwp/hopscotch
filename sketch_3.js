var topDistances = [0, 400, 750, 870, 1260];
// distances from top are absolute, in pixels
// each of these is a place for a paragraph, start/end for line.

var leftDistances = [0.5, 0.67, 0.3, 0.8, 0.4];
// distances from left are % of window width

var topControls = [10,200, 600, 720, 900, 880, 600, 1000];
// four control values per text block (except first/last)

var leftControls = [60, -30, 10, -40, 100, -90, -20, 30];
// in pixels to add to w*proportions

function setup(){
  var w = windowWidth;
  createCanvas(w,max(topDistances)+400);

  leftDistances = math.multiply(leftDistances, w);

  drawlines();
  putboxes();
}

function windowResized(){
  var w = windowWidth;

  drawlines();
  putboxes();
}

function drawlines(){
  background(255);
  noFill();
  stroke(0);

  var n_beziers = topDistances.length - 1;

  for(i=0; i<n_beziers; i++){
    // bezier syntax:
    // bezier(pt1x, pt1y, cl1x,cl1y,cl2x,cl2y,pt2x,pt2y);

    bezier(leftDistances[i],topDistances[i],leftDistances[i]+leftControls[i*2],topControls[i*2],leftDistances[i+1]+leftControls[i*2+1],topControls[i*2+1],leftDistances[i+1],topDistances[i+1]);
  }
}

function putboxes(){

  var top_adjust = 100;
  var left_adjust = -100;

  $("#one").css("top",topDistances[1]+top_adjust);
  $("#two").css("top",topDistances[2]+top_adjust);
  $("#thr").css("top",topDistances[3]+top_adjust);
  $("#for").css("top",topDistances[4]+top_adjust);

  $("#one").css("left",leftDistances[1]+left_adjust);
  $("#two").css("left",leftDistances[2]+left_adjust);
  $("#thr").css("left",leftDistances[3]+left_adjust);
  $("#for").css("left",leftDistances[4]+left_adjust);

}