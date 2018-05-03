$(function(){

  $('.navbar-toggle, nav').click(function(){
    $('.navbar-toggle').toggleClass('navbar-on');

    $('nav').fadeToggle();
    $('nav').removeClass('nav-hide');
  });
});


causeRepaintsOn = $("h1, h2, h3, p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});



