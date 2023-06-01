const TRANSLATION={
    ES:{
        site:{
            title:"Oscar Tenias | Desarrollador Front-End"
        },
        navigator:{
            home:"Inicio",
            work:"Proyectos",
            about:"Sobre mi",
            language:"🌐EN"
        },
        sections:{
            introduction:{
                title:"",
                subtitle:"Desarrollador Front-End",
                contactAnchor:"Contáctame!",
                scrollAnchor:"Desplazate hacia abajo"
            },
            work:{
                title:"Mi trabajo",
                projects:{
                    cinemaniac:{
                        title:"cinemaniac",
                        description:"Buscador de peliculas que consume la API de themoviedb de la cual obtengo datos sobre películas por estrenar o que el usuario busque particularmente. Además, permite marcar como vista y guardar un comentario de forma local y exportarlo en un archivo .txt.",
                        siteAnchor:"Ir al sitio"
                    },
                    logs:{
                        title:"logs keeper",
                        description:"Registro local de credenciales que pueden ser exportadas en un .txt y además validadas en la misma interfaz.",
                        siteAnchor:"Ir al sitio"
                    },
                    planner:{
                        title:"planner",
                        description:"Herramienta dedicada a usuarios que se desempeñan en la creación de contenido para redes sociales. Esta app organiza y guarda contenido, maneja múltiples tipos de usuario y brinda una interfaz para que los usuarios puedan mostrar el cronograma de contenido a sus clientes.",
                        siteAnchor:"Ir al sitio"
                    }
                }
            },
            about:{
                title:"Acerca de mi",
                texts:{
                    first:{
                        highlight:"más de 2 años de experiencia en el desarrollo web",
                        rest:"He tenido la oportunidad de trabajar en equipo y tomar decisiones clave en diversos proyectos, que van desde aplicaiones enteras, webs sencillas y desarrollo con Wordpress"
                    },
                    second:"Entre mis habilidades destacan tecnologías fundamentales en el desarrollo web como lo son HTML, CSS y JavaScript. Además, cuento con experiencia en el uso de Tailwind CSS y React JS",
                    third:"Actualmente estoy aprendiendo: TypeScript, bases de datos y testing"
                }
            }
            

        }
    },
    EN:{
        site:{
            title:"Oscar Tenias | Front-End Developer"
        },
        navigator:{
            home:"Home",
            work:"Projects",
            about:"About me",
            language:"🌐ES"
        },
        sections:{
            introduction:{
                title:"",
                subtitle:"Front-End Developer",
                contactAnchor:"Get in touch!",
                scrollAnchor:"Scroll down"
            },
            work:{
                title:"My work",
                projects:{
                    cinemaniac:{
                        title:"cinemaniac",
                        description:"Movie search engine that consumes the themoviedb API, from which I retrieve data about upcoming movies or movies that the user specifically searches for. Additionally, it allows marking movies as watched and saving a comment locally, with the ability to export it to a .txt file.",
                        siteAnchor:"Go to live site"
                    },
                    logs:{
                        title:"logs keeper",
                        description:"Local credentials registry that can be exported to a .txt file and also validated within the same interface.",
                        siteAnchor:"Go to live site"
                    },
                    planner:{
                        title:"planner",
                        description:"Tool dedicated to users engaged in content creation for social media. This app organizes and saves content, handles multiple user types, and provides an interface for users to showcase their content schedule to their clients.",
                        siteAnchor:"Go to live site"
                    }
                }
            },
            about:{
                title:"About me",
                texts:{
                    first:{
                        highlight:"More than 2 years of experience in web development",
                        rest:"I have had the opportunity to work as a team and make key decisions in various projects, ranging from complete applications to simple websites and WordPress development"
                    },
                    second:"Among my skills, I excel in fundamental web development technologies such as HTML, CSS, and JavaScript. Additionally, I have experience in using Tailwind CSS and React JS",
                    third:"Currently, I am learning TypeScript, databases, and testing"
                }
            }
        }
    }


}
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
                    let $description=item.querySelectorAll(".work-section-workitem-description>p")[1]
                    let $siteAnchorText=item.querySelector(".work-section-workitem-description>a>span")

                    if(_workData){
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