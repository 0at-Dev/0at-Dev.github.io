import TRANSLATION from "../constants/translations"




let $languageCheckbox=document.getElementById("Language")

const translate=()=>{
     // Listener
     $languageCheckbox.addEventListener("change",e=>{
        let _checked=e.target.checked
        let $label=e.target.labels[0]
        let $navegationSelectors=document.querySelectorAll("#NavList>li:not(:last-child)")
        
        let $introduction=document.getElementById("Introduction")
        let $work=document.getElementById("Work")
        let $about=document.getElementById("About")

            // Web title
            document.title=_checked?TRANSLATION.ES.site.title:TRANSLATION.EN.site.title

            // Checkbox Label
            $label.textContent=_checked?TRANSLATION.ES.navigator.language:TRANSLATION.EN.navigator.language

            // Navegator
            $navegationSelectors.forEach(selector=>{
                let $anchor=selector.querySelector("a")
                let _navigationData=$anchor.getAttribute("data-nav-translation-key")
                if(_navigationData){
                    let _translation=_checked?TRANSLATION.ES.navigator[_navigationData]:TRANSLATION.EN.navigator[_navigationData]
                        $anchor.textContent=_translation
                }
            })

            // Sections

                // Introduction
                $introduction.querySelector("#Introduction>#IntroductionSubtitleContainer>h1").textContent=_checked?TRANSLATION.ES.sections.introduction.subtitle:TRANSLATION.EN.sections.introduction.subtitle //Subtitle
                $introduction.querySelector("#Introduction>#IntroductionContactButton>span").textContent=_checked?TRANSLATION.ES.sections.introduction.contactAnchor:TRANSLATION.EN.sections.introduction.contactAnchor //Get in touch
                $introduction.querySelector("#Introduction>#IntroductionScrollButton>span").textContent=_checked?TRANSLATION.ES.sections.introduction.scrollAnchor:TRANSLATION.EN.sections.introduction.scrollAnchor //Scroll down

                // Work
                $work.querySelector(".work-section-title").textContent=_checked?TRANSLATION.ES.sections.work.title:TRANSLATION.EN.sections.work.title
                $work.querySelectorAll("div>ul>li").forEach(item=>{
                    let _workData=item.getAttribute("data-work-key")
                    let $title=item.querySelectorAll(".work-section-workitem-description>p")[0]
                    let $description=item.querySelectorAll(".work-section-workitem-description>p")[1]
                    let $siteAnchorText=item.querySelector(".work-section-workitem-description>a>span")

                    if(_workData){
                        $title.textContent=_checked?TRANSLATION.ES.sections.work.projects[_workData].title:TRANSLATION.EN.sections.work.projects[_workData].title

                        $description.textContent=_checked?TRANSLATION.ES.sections.work.projects[_workData].description:TRANSLATION.EN.sections.work.projects[_workData].description

                        $siteAnchorText.textContent=_checked?TRANSLATION.ES.sections.work.projects[_workData].siteAnchor:TRANSLATION.EN.sections.work.projects[_workData].siteAnchor
                    }
                })

                // About
                $about.querySelector(".about-section-title").textContent=_checked?TRANSLATION.ES.sections.about.title:TRANSLATION.EN.sections.about.title
                $about.querySelector(".about-section-aboutitem:first-child>p:first-child").textContent=_checked?TRANSLATION.ES.sections.about.texts.first.highlight:TRANSLATION.EN.sections.about.texts.first.highlight //first highlight
                $about.querySelector(".about-section-aboutitem:first-child>p:nth-child(2)").textContent=_checked?TRANSLATION.ES.sections.about.texts.first.rest:TRANSLATION.EN.sections.about.texts.first.rest //first rest
                $about.querySelector(".about-section-aboutitem:first-child>p:first-child").textContent=_checked?TRANSLATION.ES.sections.about.texts.first.highlight:TRANSLATION.EN.sections.about.texts.first.highlight //second 
                $about.querySelector(".about-section-aboutitem:nth-child(2)>p").textContent=_checked?TRANSLATION.ES.sections.about.texts.second:TRANSLATION.EN.sections.about.texts.second //second
                $about.querySelector(".about-section-aboutitem:nth-child(3)>p").textContent=_checked?TRANSLATION.ES.sections.about.texts.third:TRANSLATION.EN.sections.about.texts.third //third

    })
}

export default translate