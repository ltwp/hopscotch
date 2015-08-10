function shuffle(array) {
  // Fisher-Yates Shuffle
  //via http://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
  var i = array.length,
      j = 0,
      temp;
  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var urls = ['images/beach.jpg','images/easy.jpg','images/frankenthaler.jpg','images/girl.jpg','images/layla.jpg','images/name.jpg'];
var sizes = ['531','600','560','454','800','400'];
var xs = [];
var ys = [];


$(document).ready(function(){
  var order = [];
  for(var i = 0; i < urls.length; i++){
    order[i] = i;
  }

  order = shuffle(order);

  var div_width = $('#images').width();
  var doc_height = $(document).height();
  var mega_string = "";

  for(var i = 0; i < urls.length; i++){
    var j = order[i];
    xs[j] = Math.floor(Math.random()*(div_width-sizes[i]));
    ys[j] = Math.floor(Math.random()*doc_height);


    mega_string = mega_string +
      '<img id = "img_' + j + '" width = "' + sizes[j] + '" style = "top: ' + ys[j] + 'px; left: ' + xs[j] + 'px;" src = "' + urls[j] + '" />';
  }

  document.getElementById("images").innerHTML = mega_string;

});