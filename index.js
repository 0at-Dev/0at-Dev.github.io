
import { highlighted } from './constants/projects'
import animate from './helpers/animations'
import './style.css'
import SplitType from 'split-type'
import { gsap } from "gsap";
import { 
    ScrollTrigger,
} from "gsap/all";

// Plugins 
gsap.registerPlugin(ScrollTrigger)

const initShapedTextEffect=()=>{
  const $scrollAnchorEl=document.querySelector('a[href="#Work"] div')
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

const initPinnedProjectsEffect=()=>{
  let media=gsap.matchMedia()


  media.add("(min-width: 601px)", ()=>{

    const projects = gsap.utils.toArray("#PinnedProjects>ul>li:not(:first-child)")
    const projectsPhotos = gsap.utils.toArray("#ListedProjects>ul>li:not(:first-child)")

    gsap.set(projectsPhotos, {yPercent:101})

    const allProjectsPhotos = gsap.utils.toArray("#ListedProjects>ul>li")

    ScrollTrigger.create({
      trigger:"#Projects",
      start:"top top",
      end:"bottom bottom",
      pin:"#ListedProjects"
    })

    projects.forEach((detail, index)=> {

      let headline = detail.querySelector("p")
      let animation = gsap.timeline()
         .to(projectsPhotos[index], {yPercent:0})
         .set(allProjectsPhotos[index], {autoAlpha:0})
      ScrollTrigger.create({
        trigger:headline,
        start:"top 80%",
        end:"top 50%",
        animation:animation,
        scrub:true,
        markers:false
      })
    })

    return () => { // optional
      // custom cleanup code here (runs when it STOPS matching)
      console.log("mobile")
    };
  })
}

const initSplittedTitle=()=>{
  const workSectionTitle=new SplitType('#Work h2', { types: 'chars' })
  const workSectionTitleChars=workSectionTitle.chars

  // ScrollTrigger.create({
  //   trigger:"#Projects",
  //   start:"top top",
  //   end:"bottom bottom",
  //   pin:"#ListedProjects"
  // })

  gsap.from(workSectionTitleChars, 1,{
    stagger:.05,
    scrollTrigger:"#Work",
    start: "top center",
    duration: { min: 0.02, max: 0.2 },
    scrub: 1,
    y: 100,
    ease: "power3.InOut",
})
}



document.addEventListener("DOMContentLoaded",e=>{
  
    // initShapedTextEffect()
    initPinnedProjectsEffect()
    initSplittedTitle()
 
})