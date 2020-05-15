$(function(){
    $( ".content-about button" ).click(function(){
      $( ".about-more" ).fadeToggle( 100, "linear", function(){ 
         console.log("toggle completed"); 
      });
    });
 });

 function slowScroll (id) {
   var offset = 200;
   $('html, body').animate ({
     scrollTop: $(id).offset ().top - offset
   }, 500);
   return false;
 }

$(function(){
  $( ".close" ).click(function(){
    $( ".menu-wrap" ).fadeToggle( 100, "linear", function(){ 
       console.log("toggle completed"); 
    });
  });
});


$(function() {
  $(".menu-link").on("click", function() {
    if ($(window).width() < 860) {
      $( ".menu-wrap" ).fadeToggle( 100, "linear", function() { 
          console.log("toggle completed"); 
      });
    }
  });
  $(window).on("resize", function() {
    if ($(window).width() >= 860) {
        $(".menu-wrap").show();
    }
  });
});