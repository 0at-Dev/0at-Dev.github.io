import EN from "./translation/EN.js"
import ES from "./translation/ES.js"

window.addEventListener("DOMContentLoaded",()=>{
const INTRODUCTION_SECTION=document.getElementById("Introduction")
const WORK_SECTION=document.getElementById("Work")
const ABOUT_SECTION=document.getElementById("About")
const PREVSLIDE_BUTTON=document.getElementById("PrevSlide")
const NEXTSLIDE_BUTTON=document.getElementById("NextSlide")
const LANGUAGE_CHECKBOX=document.getElementById("Language")
const NAV_LIST=document.getElementById("NavList")

let $workSectionWrapper=WORK_SECTION.querySelector("div>div")
let $workSlidesWrapper=$workSectionWrapper.querySelectorAll("div")[0]
let $workSlides=$workSlidesWrapper.querySelectorAll("div")
let _workSlideActive=0

const revealSectionContent=()=>{
    let aboutSectionBounderies=ABOUT_SECTION.getBoundingClientRect()
    let {top:aboutTop, y:aboutY}=aboutSectionBounderies
        
        if(Math.floor(aboutTop)<=0 || Math.floor(aboutY)<=0){
            // let $title=ABOUT_SECTION.querySelector("div>h2")
            let $calltoActionRight=ABOUT_SECTION.querySelectorAll("div>a.hide-to-right")
            let $descriptionLeft=ABOUT_SECTION.querySelectorAll("div>p.hide-to-left")
            let $descriptionRight=ABOUT_SECTION.querySelectorAll("div>p.hide-to-right")

            // if($title.classList.contains("hide-to-left")){
            //     $title.classList.remove("hide-to-left")
            //     $title.classList.add("reveal-from-left")
            // }

            $descriptionLeft.forEach(el=>{
                el.classList.remove("hide-to-left")
                el.classList.add("reveal-from-left")
            })
            $descriptionRight.forEach(el=>{
            el.classList.remove("hide-to-right")
            el.classList.add("reveal-from-right")
            })
            $calltoActionRight.forEach(el=>{
            el.classList.remove("hide-to-right")
            el.classList.add("reveal-from-right")
            })
        }
}
// Listen
    revealSectionContent()

    document.addEventListener("scroll",revealSectionContent)
    NEXTSLIDE_BUTTON.addEventListener("click",()=>{
        let $currentSlide=$workSlides[_workSlideActive]
        let _newSlideIndex=_workSlideActive + 1
        let _indexLimit= $workSlides.length - 1
        let $newActiveSlide=$workSlides[_newSlideIndex]
            
            if(_workSlideActive<_indexLimit){
                $currentSlide.style.opacity="0"
                $newActiveSlide.style.opacity="1"
                $newActiveSlide.style.pointerEvents="all"
                _workSlideActive=_workSlideActive + 1  
            }
        
    })

    PREVSLIDE_BUTTON.addEventListener("click",()=>{
        let $currentSlide=$workSlides[_workSlideActive]
        let _newSlideIndex=_workSlideActive - 1
        let _indexLimit= $workSlides.length - 1
        let $newActiveSlide=$workSlides[_newSlideIndex]
            
            if(_workSlideActive>0){
                $currentSlide.style.opacity="0"
                $newActiveSlide.style.opacity="1"
                $newActiveSlide.style.pointerEvents="all"
                _workSlideActive=_workSlideActive - 1  
            }
    })

    LANGUAGE_CHECKBOX.addEventListener("change",e=>{
       let _checked=e.target.checked
       let $label=e.target.labels[0]
       let $aboutWrapper=ABOUT_SECTION.querySelector("div")
       let $workWrapper=WORK_SECTION.querySelector("div")
       let $workSlides=$workWrapper.querySelectorAll("div>div")[0]

            // Web title
            document.title=_checked?"Oscar Tenias | Front-End Developer":"Oscar Tenias | Desarrollador Front-End"

            // Navigator
            NAV_LIST.querySelectorAll("li").forEach(li=>{

                let $el=li
                let $a=$el.querySelector("a")
                if($a && $a.getAttribute("data-nav-translation-key")){
                    let _data=$el.querySelector("a").getAttribute("data-nav-translation-key")
                        $a.textContent=_checked?EN.NAV_EN[_data]:ES.NAV_ES[_data]
                }   
                
            })
            $label.textContent=_checked?EN.NAV_EN.language:ES.NAV_ES.language

            // Introduction section
            INTRODUCTION_SECTION.querySelector("h2").textContent=_checked?EN.INTRODUCTION_EN.role:ES.INTRODUCTION_ES.role

            // About section
            $aboutWrapper.querySelector("h2").textContent=_checked?EN.ABOUT_EN.title:ES.ABOUT_ES.title
            $aboutWrapper.querySelectorAll("p")[0].innerHTML=_checked?EN.ABOUT_EN.first_p:ES.ABOUT_ES.first_p
            $aboutWrapper.querySelectorAll("p")[1].innerHTML=_checked?EN.ABOUT_EN.second_p:ES.ABOUT_ES.second_p
            $aboutWrapper.querySelectorAll("p")[2].innerHTML=_checked?EN.ABOUT_EN.third_p:ES.ABOUT_ES.third_p

            // Work section
            $workWrapper.querySelector("h2").textContent=_checked?EN.WORK_EN.title:ES.WORK_ES.title
            $workSlides.querySelectorAll("div").forEach(slide=>{
                if(slide.getAttribute("data-work-translation-key")){
                    let _data=slide.getAttribute("data-work-translation-key")
                    slide.querySelector("p").innerHTML=_checked?EN.WORK_EN[_data]:ES.WORK_ES[_data]
                }
            })

    })

})