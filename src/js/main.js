// $(function () {
//   $('.carousel').carousel({ interval:6000 });  
// });

  // "use strict";
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

// $('.article__more_btn').on('click', function(){
//   var blockArticle = '<article class="news__article d-flex flex-nowrap"><div class="news__article_img"><a href="#"><img src="img/img_1.jpg" alt=""></a></div><div class="news__article_text"><h3>INTERNATIONAL AFFAIRS</h3><a href="#">  <h4>Internationalization Strategy</h4><p>The Federal Government’s Strategy for the Internationalization of Education, Science and Research establishes a basis for stronger international networking activities, because no country can master the global challenges on its own.</p><div class="news__article_link"><a href="#"><i class="fas fa-arrow-right"></i>read more</a></div></a></div></article>';
//   $(this).before(blockArticle);
//   $(this).hide(); 
// });


document.querySelector('.article__more_btn')
  .addEventListener('click', () => {
    const article = document.createElement('div')
    article.innerHTML = getArticle()
    document.querySelector('.news').insertBefore(article, document.querySelector('.article__more_btn'));
})

function getArticle() { return `
                <article class="news__article d-flex flex-nowrap">
                    <div class="news__article_img">
                      <a href="#"><img src="https://wmpics.pics/di-2IAT.jpg" alt="" title="View entire article 'The German Federal Training Assistance Act (BAföG) provides educational opportunities'"></a>
                    </div>
                    <div class="news__article_text">
                        <h3>EDUCATION</h3>
                        <a href="#">
                          <h4>The German Federal Training Assistance Act (BAföG) provides educational opportunities</h4>
                          <p>BAföG enables young men and women to choose the training that suits their personal interests, irrespective of their families' financial means. Millions of young people have already benefited from this kind of training assistance.</p>
                          <div class="news__article_link">
                              <a href="#">
                                  <i class="fas fa-arrow-right"></i>read more
                              </a>
                          </div>
                        </a>
                    </div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"       xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 284.929 284.929" 
                  xml:space="preserve">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                      L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                      c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                      c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
                  </svg>
                </article>
`
}


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




//////////////////////////////////////////

// const images = [
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg',
//   'https://s.abcnews.com/images/Politics/donald-trump-this-week-02-ap-jc-181110_hpMain_16x9_992.jpg',
//   'https://timedotcom.files.wordpress.com/2018/03/donald-trump-snl-baldwin-twitter.jpg',
//   'https://amp.businessinsider.com/images/5b1012d51ae6623b008b465d-750-750.jpg',
//   'https://pixel.nymag.com/imgs/daily/intelligencer/2018/12/27/27-trump.w700.h700.jpg',
//   'https://i.kinja-img.com/gawker-media/image/upload/s--NbleMk8p--/c_scale,f_auto,fl_progressive,q_80,w_800/ovkkfifyllk1pvvx9jud.jpg',
//   'https://static.politifact.com/politifact/photos/AP_AZAB126_TRUMP.JPG',
//   'http://english.almanar.com.lb/framework/includes/uploads/2018/04/manar-01827070015235305968.jpg',
//   'https://www.gannett-cdn.com/presto/2018/08/31/USAT/4911aca2-d0cb-44b0-90ca-1968b2d18cc9-AP_Trump_7.JPG?crop=4479,2519,x0,y139&width=3200&height=1680&fit=bounds',
// ];


$('.slick-carousel')
  .html(images.map(n => `<div><img src="${n}" /></div>`).join(''))
  
  .slick({
    dots: true,
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    customPaging: (slider, i) => `<span>${i}</span>`,
  });
