$(function () {
  $('.carousel').carousel({ interval:6000 });  

  $('#playButton').click(function () {
      $('#carouselExampleIndicators').carousel('cycle');
  });
  $('#pauseButton').click(function () {
      $('#carouselExampleIndicators').carousel('pause');
  });
  $("button").click(function() {
  if ($(this).attr("id") === "pauseButton") {
      $('#homeCarousel').carousel('pause');
      $(this).attr("id", "playButton");
      $("span", this).toggleClass("glyphicon-play glyphicon-pause");
  } else {
      $('#homeCarousel').carousel('cycle');
      $(this).attr("id", "pauseButton");
      $("span", this).toggleClass("glyphicon-pause glyphicon-play");
  }
  });

  "use strict";
  $('.nav__title').click(function(){
      $('.responsive__navbar')
        .find('.nav__title.open, .nav__link.open')
        .not($(this))
        .not($(this).next('.nav__link'))
        .removeClass('open');
      $(this).toggleClass('open');
      $(this).next('.nav__link').toggleClass('open');
  });

  $('.header__menu_btn').click(function(){
      $('#background').toggleClass('open');
      $('#responsive').toggleClass('open');
  });

  $('#background').click(function(){
      $('#background').toggleClass('open');
      $('#responsive').toggleClass('open');
  });
  


  

});
