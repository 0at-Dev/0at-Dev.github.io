
import { highlighted } from './constants/projects'
import animate from './helpers/animations'
import insert from './helpers/insertion'
import swiperSlider from './helpers/swiper'
import translate from './helpers/translations'
import './style.css'

import Swiper from "swiper/bundle";
import 'swiper/css/bundle'

import { gsap } from "gsap";
import { 
    ScrollTrigger,
} from "gsap/all";

// Plugins 
gsap.registerPlugin(ScrollTrigger)

const initSwiper=()=>{

    return new Swiper("#Projects", {
        effect: "creative",
        grabCursor: true,
        loop:true,
        speed:500,
        creativeEffect: {
          prev: {
            opacity:.9,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
    });
}

const insertProjectsSlider=()=>{
    const $projectTemplate=document.querySelector("template[template-name='project-slider-slide']")

    if(!$projectTemplate.content)return

    let $projectsContainer=document.getElementById("Projects")
    let $fragment=document.createDocumentFragment()
    
    let $sliderWrapper=document.createElement("ul")
        $sliderWrapper.classList.add("swiper-wrapper")

        highlighted().reverse().forEach(project=>{
            let {id, name, description,media,site}=project

            let $clone=document.importNode($projectTemplate.content, true)

            let $slide=$clone.querySelector("li")
                $slide.id=id
            let $name=$clone.querySelector("span[project-name='']")
            let $description=$clone.querySelector("p[project-description='']")
            let $sitelink=$clone.querySelector("a[project-site-link='']")
            let $media=$clone.querySelector("img[project-media='']")

            $name.textContent=name
            $description.textContent=description
            $sitelink.href=site
            $media.src=media[0]

            $fragment.appendChild($slide)
        })

        $sliderWrapper.appendChild($fragment)
        $projectsContainer.appendChild($sliderWrapper)

        initSwiper()
}

const initShapedTextEffect=()=>{
  const $scrollAnchorEl=document.querySelector('a[href="#Projects"] div')
  const scrollAnchorTextContent=$scrollAnchorEl.textContent
  const scrollAnchorChars=scrollAnchorTextContent.split('')
  $scrollAnchorEl.textContent=''
  scrollAnchorChars.forEach((char,index)=>{
    let $span=document.createElement("span")
        $span.style.transform=`rotate(${index * 13.5}deg)`
        $span.textContent=char

    $scrollAnchorEl.appendChild($span)
  })
}

const changeNavStylesOnViewport=()=>{
  // gsap.set(".main-nav-toggler-burguer",{backgroundColor:"#5e5e63"})
  // gsap.to(".main-nav-toggler-burguer",{
  //   scrollTrigger:{
  //     trigger: "#Work",
  //     // toggleActions: "restart pause reverse pause"
  //   },
  //   duration: .1,
  //   ease: "elastic",
  //   backgroundColor:"#f6f6f6"
  // })
  
 const tween=gsap.to(".main-nav-toggler-burguer",
 {
    duration: .1,
    ease: "elastic",
    backgroundColor:"#f6f6f6"
 })

 ScrollTrigger.create({
    trigger:"#Work",
    start: 'top 80%',
    onEnter: () => {
        console.log("ps entro")
      tween.play()},
    onLeave: () => {
      console.log("ps salio")
      tween.reverse()
      console.log(tween)
    },
 })
}

document.addEventListener("DOMContentLoaded",e=>{
    // translate()
    // swiperSlider()
    // insert()
    insertProjectsSlider()
    initShapedTextEffect()
    changeNavStylesOnViewport()
    // animate()
})