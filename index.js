import Swiper from 'swiper'
import animate from './helpers/animations'
import insert from './helpers/insertion'
import swiperSlider from './helpers/swiper'
import translate from './helpers/translations'
import './style.css'
import 'swiper/css'

let swiper=new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    
});

document.addEventListener("DOMContentLoaded",e=>{
    // translate()
    swiperSlider()
    // insert()
    animate()
})