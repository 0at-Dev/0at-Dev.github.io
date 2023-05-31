document.addEventListener("DOMContentLoaded",e=>{
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
const NAV_ANCHORS=document.querySelectorAll("#NavList>li:not(:last-child)")
const ACTIVE_ANCHOR_UNDERLINE=document.querySelector(".active-anchor-underline")

    NAV_ANCHORS.forEach(anchor=>{
        anchor.addEventListener("click",e=>{
            const INTIAL_STATE=Flip.getState(ACTIVE_ANCHOR_UNDERLINE)
            anchor.appendChild(ACTIVE_ANCHOR_UNDERLINE)
            Flip.from(INTIAL_STATE,{
                duration:1.25,
                absolute:true,
                ease:'elastic.out(1,0.5)'
            })
        })
    })

//-- Show nav 
TweenMax.staggerFrom("#NavList>li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
    delay:0.5
}, 0.08)

if(window.matchMedia('(max-width:601px)')){
    TweenMax.from("label[for='MobileNav']", 1, {
        scale: 0,
        ease:"elastic.out(1, 0.3)",
        delay:0.5
    })

    
}

//-- Show contacts 
TweenMax.from("#ContactList>li", 1, {
    opacity: 0,
    ease: Power3.easeInOut,
    delay:0.5
})

//-- Show Title  and subtitle
TweenMax.staggerFrom("#Introduction>#IntroductionTitleContainer, #Introduction>#IntroductionSubtitleContainer, #Introduction>#IntroductionBlobsContainer", 1, {
    opacity: 0,
    ease: Power3.easeInOut
}, .3)

//-- Show contact button
TweenMax.from("#IntroductionContactLabel", {
    x: -20,
    opacity: 0,
    ease: Power3.easeInOut,
    delay:0.1
})

TweenMax.staggerFrom("#IntroductionContactDarkBubble, #IntroductionContactSemiBubble, #IntroductionContactLightBubble", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
    delay:0.1
}, .3)

//-- Show scroll button
if(window.matchMedia('(min-width:601px)')){

    let charsLength=scrollAnchorTextChars.length
    let charsRevealDelay=0.1
    let charsRevealDuration=charsLength * charsRevealDelay
    let scrollArrowRevealDelay=charsRevealDuration + 0.08
    
    TweenMax.staggerFrom(scrollAnchorTextChars,1,{
        opacity: 0,
        x: -20,
        ease: Power3.easeInOut,
    }, charsRevealDelay)
    
    TweenMax.from("#IntroductionScrollButton>svg",{
        opacity: 0,
        y: -20,
        ease: Power3.easeInOut,
        delay:scrollArrowRevealDelay
    })
}

// Scroll Animations

//-- show "Work" section title
TweenMax.from(workSectionTitleTextChars, 1,{
    stagger:.05,
    scrollTrigger:".work-section-title",
    y: 100,
    ease: Power3.easeInOut,
})

//-- show "Work" section items
document.querySelectorAll("#Work .work-section-workitem").forEach(item=>{
    let $description= item.querySelector(".work-section-workitem-description")
    let $texts=$description.querySelectorAll("p, a")
    let $images=item.querySelector(".work-section-workitem-images")
    let $imageContainers=$images.querySelectorAll("span")
    
    // --  show item description
    TweenMax.from($texts, 1,{
        scrollTrigger:$description,
        stagger:.3,
        opacity: 0,
        x: -20,
        ease: Power3.easeInOut,
    })
    
    // --  show item images
    TweenMax.from($imageContainers, 1,{
        scrollTrigger:$images,
        stagger:.3,
        scale: 0,
        ease:"elastic.out(1, 0.3)",
    })
    
})

//-- show "About" section title
TweenMax.from(aboutSectionTitleTextChars, 1,{
    stagger:.05,
    scrollTrigger:".about-section-title ",
    y: 100,
    ease: Power3.easeInOut,
})


// --  show "About" section items
TweenMax.from("#About .about-section-aboutitem", 1,{
    scrollTrigger:"#About .about-section-aboutitem",
    stagger:.3,
    scale: 0,
    ease:"elastic.out(1, 0.3)",
    delay:0.5
})




//-- hide nav
    // TweenMax.fromTo(".main-nav, .contact-nav", 
    // {scale: 1}, 
    // {scale: 0, scrollTrigger:{
    //     trigger:"#Introduction",
    //     start:"bottom center",
        

    // },duration: .5})

    // TweenMax.from(".main-nav",1 ,{
    //     scrolltrigger:{

    //     }
    // })


    // Listener
    // window.addEventListener("scroll",e=>{
    //     let $header=document.querySelector("header")
    //     let $introductionSection=document.getElementById("Introduction")
    //     let _introductionSectionHeight=$introductionSection.getBoundingClientRect().height
    //     let _scrolledY=window.scrollY

    //         $header.classList.toggle("scrolled-nav", _scrolledY > _introductionSectionHeight )
    // })
  
})