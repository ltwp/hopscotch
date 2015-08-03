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
  leftControls = math.add(leftDistances,leftControls);

  drawlines(topDistances,leftDistances,topControls,leftControls);
}

function windowResized(){
  var w = windowWidth;

  leftDistances = math.multiply(leftDistances, w);
  leftControls = math.add(leftDistances,leftControls);

  drawlines(topDistances,leftDistances,topControls,leftControls);
}

function drawlines(top,left,top_c,left_c){
  background(255);
  noFill();
  stroke(0);

  var n_beziers = topDistances.length - 1;

  for(i=0; i<n_beziers; i++){
    // bezier syntax:
    // bezier(pt1x, pt1y, cl1x,cl1y,cl2x,cl2y,pt2x,pt2y);

    bezier(left[i],top[i],left_c[i*2],top_c[i*2],left_c[i*2+1],top_c[i*2+1],left[i+1],top[i+1]);
  }



  //bezier(w/2,0,w/2+60,10,w*(3/4),200,w*(2/3),400);

  //bezier(w*(11/15),455,w*(4/5),600,w*0.4,720,w*0.33,750);

  //bezier(w*0.3,810,w*0.45,900,w*0.7,880,w*0.8,870);

  //bezier(w*0.77, 825,w*0.55,600,w*0.4,1000,w*0.4,1260);

}