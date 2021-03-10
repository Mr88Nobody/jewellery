import './scss/index.scss'
import $ from 'jquery'
import 'slick-carousel'

$(".slider").slick({
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  speed: 700,
  autoplay: false
})