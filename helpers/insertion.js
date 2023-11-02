import PROJECTS from "../constants/projects"

const $projectTemplate=document.querySelector("template[template-name='project-list-item']")
// const $draggableTemplate=document.querySelector("template[template-name='technology-draggable-item']")

const insert=()=>{
    if(!$projectTemplate.content)return

    let $projectsContainer=document.getElementById("Projects")
    
    let $projectsFragment=document.createDocumentFragment()
    // let $draggableNode=document.importNode($draggableTemplate.content, true)
    

    PROJECTS.reverse().map(el=>{
        let {id, name, description,tech_media,site}=el

        let $clone=document.importNode($projectTemplate.content, true)

        let $item=$clone.querySelector("li")
        let $name=$clone.querySelector("p[project-name='']")
        let $description=$clone.querySelector("p[project-description='']")
        let $techstack=$clone.querySelector("ul[project-techstack='']")
        let $sitelink=$clone.querySelector("a[project-site-link='']")

        $item.setAttribute("project-key",id)

        $name.textContent=name
        $description.textContent=description
        $sitelink.href=site

        tech_media.reverse().map(tech=>{
            let {logo, name:techname}=tech
            let $techstackItemTemplate=$techstack.querySelector("template[template-name='project-techstack-list-item']")
            let $techstackItemClone=document.importNode($techstackItemTemplate.content,true)
            let $techName=$techstackItemClone.querySelector("span")
            let $techLogo=$techstackItemClone.querySelector("div>img")

                    $techName.textContent=techname
                    $techLogo.src=logo
                    $techLogo.alt=`${techname} as part of my tech stack`
                    
                    $techstack.appendChild($techstackItemClone)

        })
                      
           $projectsFragment.appendChild($item)
    })

    $projectsContainer.appendChild($projectsFragment)

}

export default insert