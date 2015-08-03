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

var urls = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
var sizes = ['500','250','400','500','500'];
var xs = [];
var ys = [];


$(document).ready(function(){

  //var rand = Math.floor(Math.random()*5);

  //$('#image').append('<img src="' + urls[rand] + '" />');
  //document.getElementById("image").innerHTML =
  //    '<img width = "' + sizes[rand] + '" src="' + urls[rand] + '" />';

  var order = [];
  for(var i = 0; i < urls.length; i++){
    order[i] = i;
  }

  order = shuffle(order);

  var div_width = $('#images').width();
  var mega_string = "";

  for(var i = 0; i < urls.length; i++){
    var j = order[i];
    xs[j] = Math.floor(Math.random()*(div_width-sizes[i]));
    ys[j] = Math.floor(Math.random()*1000);


    mega_string = mega_string +
      '<img id = "img_' + j + '" width = "' + sizes[j] + '" style = "top: ' + ys[j] + 'px; left: ' + xs[j] + 'px;" src = "' + urls[j] + '" />';
  }

  document.getElementById("images").innerHTML = mega_string;

  //console.log($("#images").width());
});