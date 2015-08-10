// DOM.js will deal with image clicks, and the product overlay.


$(document).ready(function(){

  var n_imgs = $('img').length;
  for(var i = 0; i < n_imgs; i++){
    var selected = $('img').eq(i);
    var w = selected.width();
    var h = selected.height();
    var selected_parent = selected.parent();
    selected_parent.children(".cover").css("width",w+"px");
    selected_parent.children(".cover").css("height",h+"px");
    selected_parent.children(".cover").css("line-height",h+"px");
  }

  $('.cover').hover(function(){
    $(this).css("background-color","rgba(255,255,255,0.3)");
    $(this).css("color","rgba(0,0,0,1)");
  },function(){
    $(this).css("background-color","rgba(255,255,255,0)");
    $(this).css("color","rgba(0,0,0,0)");
  });

});
