import Swiper from "swiper/bundle";

import 'swiper/css/bundle'

const swiperSlider=()=>{

    return new Swiper("#Projects", {
        grabCursor: true,
        effect: "creative",
        loop:true,
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
    });
}

export default swiperSlider