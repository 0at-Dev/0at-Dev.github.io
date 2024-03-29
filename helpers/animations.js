import { gsap } from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
    
 const animate=()=>{
    const scrollAnchorSplitText=new SplitType('.scroll-anchor', { types: 'chars' })
    const workSectionSplitText=new SplitType('.work-section-title', { types: 'chars' })
    const aboutSectionSplitText=new SplitType('.about-section-title ', { types: 'chars' })
    const scrollAnchorTextChars=scrollAnchorSplitText.chars
    const workSectionTitleTextChars=workSectionSplitText.chars
    const aboutSectionTitleTextChars=aboutSectionSplitText.chars
// Plugins 
gsap.registerPlugin(Flip)
gsap.registerPlugin(ScrollTrigger)

//First load Animations

//-- Active nav underline
const SECTIONS_TO_OBSERVE=document.querySelectorAll("main>section#Introduction, main ul#ProjectsList, main>section#About")
const ACTIVE_ANCHOR_UNDERLINE=document.querySelector(".active-anchor-underline")

    const OBSERVER=new IntersectionObserver(
        (entries)=>{

        entries.forEach(entry=>{
            let sectionId=entry.target.id==="Introduction"?"":entry.target.id
            let isWorkSection=sectionId!=="" && sectionId!=="About"?true:false
            let anchorRef=isWorkSection?"#ProjectsList":`#${sectionId}`
            let anchor=document.querySelector(`#NavList>li>a[href="${anchorRef}"]`)

            if(anchor){
                if(entry.isIntersecting){
                    const INTIAL_STATE=Flip.getState(ACTIVE_ANCHOR_UNDERLINE)
                    anchor.parentElement.appendChild(ACTIVE_ANCHOR_UNDERLINE)
                    Flip.from(INTIAL_STATE,{
                        duration:1.25,
                        absolute:true,
                        ease:'elastic.out(1, 0.75)'
                    })
                }
            }
        })
        },
       
    )
    SECTIONS_TO_OBSERVE.forEach(section=>OBSERVER.observe(section))

//-- Show nav 
gsap.from("#NavList>li", 1, {
    opacity: 0,
    x: -20,
    ease: "power3.InOut",
    delay:0.5,
    stagger:0.08
})

if(window.matchMedia('(max-width:601px)')){
    gsap.from("label[for='MobileNav']", 1, {
        scale: 0,
        ease:"elastic.out(1, 0.75)",
        delay:0.5
    })

    
}

//-- Show contacts 
gsap.from("#ContactList>li", 1, {
    opacity: 0,
    ease: "power3.InOut",
    delay:0.5
})

//-- Show Title  and subtitle
gsap.from("#Introduction>#IntroductionTitleContainer, #Introduction>#IntroductionSubtitleContainer, #Introduction>#IntroductionBlobsContainer", 1, {
    opacity: 0,
    stagger:.3,
    ease: "power3.InOut"
})

//-- Show scroll button
if(window.matchMedia('(min-width:601px)')){

    let charsLength=scrollAnchorTextChars.length
    let charsRevealDelay=0.1
    let charsRevealDuration=charsLength * charsRevealDelay
    let scrollArrowRevealDelay=charsRevealDuration + 0.08
    
    gsap.from(scrollAnchorTextChars,1,{
        opacity: 0,
        x: -20,
        stagger:charsRevealDelay,
        ease: "power3.InOut",
    })
    
    gsap.from("#IntroductionScrollButton>svg",{
        opacity: 0,
        y: -20,
        ease: "power3.InOut",
        delay:scrollArrowRevealDelay
    })
}

// // Scroll Animations

//-- show "Work" section title
gsap.from(workSectionTitleTextChars, 1,{
    stagger:.05,
    scrollTrigger:".work-section-title",
    y: 100,
    ease: "power3.InOut",
})

//-- show "Work" section items
document.querySelectorAll("#Work .work-section-workitem").forEach(item=>{
    let $description= item.querySelector(".work-section-workitem-description")
    let $texts=$description.querySelectorAll("p, a, ul")
    let $images=item.querySelector(".work-section-workitem-images")
    let $imageContainers=$images.querySelectorAll("span")
    
    // --  show item description
    gsap.from($texts, 1,{
        scrollTrigger:$description,
        stagger:.3,
        opacity: 0,
        x: -20,
        ease: "power3.InOut",
    })
    
    // --  show item images
    gsap.from($imageContainers, 1,{
        scrollTrigger:$images,
        stagger:.3,
        scale: 0,
        ease:"elastic.out(1, 0.75)",
    })
    
})

//-- show "About" section title
gsap.from(aboutSectionTitleTextChars, 1,{
    stagger:.05,
    scrollTrigger:".about-section-title ",
    y: 100,
    ease: "power3.InOut",
})


// // --  show "About" section items
gsap.from("#About .about-section-aboutitem", 1,{
    scrollTrigger:"#About .about-section-aboutitem",
    stagger:.3,
    scale: 0,
    ease:"elastic.out(1, 0.75)",
    delay:0.5
})
    
}

export default animate