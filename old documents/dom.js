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
    // When you hover over an image block, give translucent overlay.
    $(this).css("background-color","rgba(255,255,255,0.3)");
    $(this).css("color","rgba(0,0,0,1)");
  },function(){
    $(this).css("background-color","rgba(255,255,255,0)");
    $(this).css("color","rgba(0,0,0,0)");
  });

  $('.cover').click(function(){

    var clicked_id = $(this).attr("id");
    $("#display_"+clicked_id).css("display","block");
//     $("#display_"+clicked_id).children(".left_column").append("<span class='close'>Close this overlay.</span>");

  });

  $('#p5').click(function(){
    console.log("hey");

    //var overlay_id = $(this).parents("#p5.display");
    $('.display').css("display","none");

  });

  $('.close').click(function(){

    $('.display').css("display","none");

  });

});

