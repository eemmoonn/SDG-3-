// Smooth scroll using jQuery
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if(target.length){
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 600);
    }
  });
});
