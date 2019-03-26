$(function () {
  $('.carousel').carousel({ interval:6000 });  

 
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
  
  var offset = $('.header__menu').offset();

    $(window).scroll( function(){
        if( $(window).scrollTop() > 200 ) {
            $('.fixed').addClass('fixedNav');
        } else {
            $('.fixed').removeClass('fixedNav');
        }
    });

// Button Go to top
var $btnTop = $('.btn-top')
$(window).on('scroll', function(){
  if ($(window).scrollTop() >= 1400){
    $btnTop.fadeIn();
  }else{
    $btnTop.fadeOut();
  }
});

$btnTop.on('click', function(){
  $('html,body').animate({scrollTop:0}, 900)
});
