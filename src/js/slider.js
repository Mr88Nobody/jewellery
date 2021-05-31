import $ from 'jquery'
import 'slick-carousel'

$(".slider").slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
  ]
})