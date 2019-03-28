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


// news uploading

$('.article__more_btn').on('click', function(){
  var blockArticle = '<article class="news__article d-flex flex-nowrap"><div class="news__article_img"><a href="#"><img src="img/img_1.jpg" alt=""></a></div><div class="news__article_text"><h3>INTERNATIONAL AFFAIRS</h3><a href="#">  <h4>Internationalization Strategy</h4><p>The Federal Government’s Strategy for the Internationalization of Education, Science and Research establishes a basis for stronger international networking activities, because no country can master the global challenges on its own.</p><div class="news__article_link"><a href="#"><i class="fas fa-arrow-right"></i>read more</a></div></a></div></article>';
  $(this).before(blockArticle);
  $(this).hide(); 
});



// submenu

$('.header__menu_bottom a').on('click', function(e) {
  e.preventDefault()
  $(this).parent().siblings().children('a').removeClass('link--active')
  $(this).toggleClass('link--active')
  console.log($(window).scrollTop(),$(this).offset().top)
  if($(window).scrollTop() < $(this).offset().top) {
    $('html,body').animate({scrollTop:$(this).offset().top}, 500)
  }
})
