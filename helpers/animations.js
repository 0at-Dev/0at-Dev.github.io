import { gsap } from "gsap";
import { Flip, ScrollTrigger, Draggable } from "gsap/all";
import SplitType from "split-type";
    
 const animate=()=>{
    // const scrollAnchorSplitText=new SplitType('.scroll-anchor', { types: 'chars' })
    // const workSectionSplitText=new SplitType('.work-section-title', { types: 'chars' })
    // const aboutSectionSplitText=new SplitType('.about-section-title ', { types: 'chars' })
    // const scrollAnchorTextChars=scrollAnchorSplitText.chars
    // const workSectionTitleTextChars=workSectionSplitText.chars
    // const aboutSectionTitleTextChars=aboutSectionSplitText.chars

    // const scrollAnchorSplitText=new SplitType('a[href="#Projects"]', { types: 'chars'})
    const $scrollAnchorEl=document.querySelector('a[href="#Projects"] div')
    const scrollAnchorTextContent=$scrollAnchorEl.textContent
    const scrollAnchorChars=scrollAnchorTextContent.split('')

// Plugins 
gsap.registerPlugin(Flip)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable)

// Draggable elements animation
// Draggable.create("#DraggableExample,#DraggableExample2",{
//     type:"x,y",
//     bounds:document.getElementById("Draggables")
// })

// Scroll anchor animation
$scrollAnchorEl.textContent=''
scrollAnchorChars.forEach((char,index)=>{
    let $span=document.createElement("span")
        $span.style.transform=`rotate(${index * 13.5}deg)`
        $span.textContent=char

    $scrollAnchorEl.appendChild($span)
})

//First load Animations

//-- Active nav underline
// const NAV_ANCHORS=document.querySelectorAll("#NavList>li:not(:last-child)")
// const ACTIVE_ANCHOR_UNDERLINE=document.querySelector(".active-anchor-underline")

    // NAV_ANCHORS.forEach(anchor=>{
    //     anchor.addEventListener("click",e=>{
    //         const INTIAL_STATE=Flip.getState(ACTIVE_ANCHOR_UNDERLINE)
    //         anchor.appendChild(ACTIVE_ANCHOR_UNDERLINE)
    //         Flip.from(INTIAL_STATE,{
    //             duration:1.25,
    //             absolute:true,
    //             ease:'elastic.out(1,0.5)'
    //         })
    //     })
    // })

//-- Show nav 
// gsap.from("#NavList>li", 1, {
//     opacity: 0,
//     x: -20,
//     ease: "power3.InOut",
//     delay:0.5,
//     stagger:0.08
// })

// if(window.matchMedia('(max-width:601px)')){
//     gsap.from("label[for='MobileNav']", 1, {
//         scale: 0,
//         ease:"elastic.out(1, 0.3)",
//         delay:0.5
//     })

    
// }

//-- Show contacts 
// gsap.from("#ContactList>li", 1, {
//     opacity: 0,
//     ease: "power3.InOut",
//     delay:0.5
// })

//-- Show Title  and subtitle
// gsap.from("#Introduction>#IntroductionTitleContainer, #Introduction>#IntroductionSubtitleContainer, #Introduction>#IntroductionBlobsContainer", 1, {
//     opacity: 0,
//     stagger:.3,
//     ease: "power3.InOut"
// })

//-- Show contact button
// gsap.from("#IntroductionContactLabel", {
//     x: -20,
//     opacity: 0,
//     ease: "power3.InOut",
//     delay:0.1
// })

// gsap.from("#IntroductionContactDarkBubble, #IntroductionContactSemiBubble, #IntroductionContactLightBubble", 1, {
//     opacity: 0,
//     x: -20,
//     stagger:.3,
//     ease: "power3.InOut",
//     delay:0.1
// })

//-- Show scroll button
// if(window.matchMedia('(min-width:601px)')){

//     let charsLength=scrollAnchorTextChars.length
//     let charsRevealDelay=0.1
//     let charsRevealDuration=charsLength * charsRevealDelay
//     let scrollArrowRevealDelay=charsRevealDuration + 0.08
    
//     gsap.from(scrollAnchorTextChars,1,{
//         opacity: 0,
//         x: -20,
//         stagger:charsRevealDelay,
//         ease: "power3.InOut",
//     })
    
//     gsap.from("#IntroductionScrollButton>svg",{
//         opacity: 0,
//         y: -20,
//         ease: "power3.InOut",
//         delay:scrollArrowRevealDelay
//     })
// }

// // Scroll Animations

//-- show "Work" section title
// gsap.from(workSectionTitleTextChars, 1,{
//     stagger:.05,
//     scrollTrigger:".work-section-title",
//     y: 100,
//     ease: "power3.InOut",
// })

//-- show "Work" section items
// document.querySelectorAll("#Work .work-section-workitem").forEach(item=>{
//     let $description= item.querySelector(".work-section-workitem-description")
//     let $texts=$description.querySelectorAll("p, a, ul")
//     let $images=item.querySelector(".work-section-workitem-images")
//     let $imageContainers=$images.querySelectorAll("span")
    
//     // --  show item description
//     gsap.from($texts, 1,{
//         scrollTrigger:$description,
//         stagger:.3,
//         opacity: 0,
//         x: -20,
//         ease: "power3.InOut",
//     })
    
//     // --  show item images
//     gsap.from($imageContainers, 1,{
//         scrollTrigger:$images,
//         stagger:.3,
//         scale: 0,
//         ease:"elastic.out(1, 0.3)",
//     })
    
// })

//-- show "About" section title
// gsap.from(aboutSectionTitleTextChars, 1,{
//     stagger:.05,
//     scrollTrigger:".about-section-title ",
//     y: 100,
//     ease: "power3.InOut",
// })


// // --  show "About" section items
// gsap.from("#About .about-section-aboutitem", 1,{
//     scrollTrigger:"#About .about-section-aboutitem",
//     stagger:.3,
//     scale: 0,
//     ease:"elastic.out(1, 0.3)",
//     delay:0.5
// })
    
}

export default animate