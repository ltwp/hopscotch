// DOM.js will deal with image clicks, and the product overlay.


$(document).ready(function(){

//   $('img').hover(function(){

//     var w = $(this).width();
//     var h = $(this).height();

//     var hovered = $(this).parent();
//     // get the block that contains the image
//     console.log(hovered.attr("id"));

//     hovered.children(".cover").css("z-index","3");

//   });

  $('.cover').hover(function(){
    $(this).css("opacity","0.3");
  },function(){
    $(this).css("opacity","0");
  });

});
