$(document).ready(function(){
  $('.js-carousel--index').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
