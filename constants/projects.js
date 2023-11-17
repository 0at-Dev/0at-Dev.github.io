import TECH_STACK from "./tech_stack"

const WORK_PATH="work"

const PROJECTS=[
    {
        id:"decomarmol",
        name:"decomarmol",
        description:"Website with custom CMS for a company specialized in the sale of marble, granite and other related products. The website has a gallery, a product catalog and a frequently asked questions section, with easily manageable content through the CMS.",
        media:[`${WORK_PATH}/decomarmol_home_desktop.PNG`,`${WORK_PATH}/decomarmol_home_extra_desktop.PNG`,`${WORK_PATH}/decomarmol_home_mobile.PNG`],
        tech_media:[TECH_STACK.javascript,TECH_STACK.css,TECH_STACK.html],
        site:"https://decomarmolvzla.com/",
        github_repo:"",
        highlighted:false

    },
    {
        id:"planner",
        name:"planner",
        description:"Tool dedicated to users engaged in content creation for social media. This app organizes and saves content, handles multiple user types, and provides an interface for users to showcase their content schedule to their clients.",
        media:[`${WORK_PATH}/planner_home_desktop.PNG`,`${WORK_PATH}/planner_login_desktop.PNG`,`${WORK_PATH}/planner_inspect_mobile.PNG`],
        tech_media:[TECH_STACK.javascript,TECH_STACK.css,TECH_STACK.html],
        site:"https://planner.iniciaapp.com/",
        github_repo:"",
        highlighted:true

    },
    {
        id:"reminder",
        name:"reminder",
        description:"Simple and animated to-do list application with Framer Motion.",
        media:[`${WORK_PATH}/reminder_desktop.PNG`,`${WORK_PATH}/reminder_desktop.PNG`,`${WORK_PATH}/reminder_mobile.PNG`],
        tech_media:[TECH_STACK.framermotion,TECH_STACK.reactjs,TECH_STACK.tailwindcss],
        site:"https://oat-reminder.netlify.app/",
        github_repo:"",
        highlighted:false

    },
    {
        id:"cinemaniac",
        name:"cinemaniac",
        description:"A movie finder that consumes themoviedb API, from which I obtain data about upcoming movies or those that the user specifically searches for. It also allows the user to save their favorite movies locally or through a registered account.",
        media:[`${WORK_PATH}/cinemaniac_search_desktop.PNG`,`${WORK_PATH}/cinemaniac_hero_mobile.PNG`,`${WORK_PATH}/cinemaniac_details_desktop.PNG`],
        tech_media:[TECH_STACK.mongodb,TECH_STACK.nodejs,TECH_STACK.framermotion,TECH_STACK.reactjs,TECH_STACK.tailwindcss],
        site:"https://oat-cinemaniac.netlify.app/",
        github_repo:"",
        highlighted:true

    },
    {
        id:"encuestas",
        name:"bechic surveys",
        description:"The 'Bechic Surveys' project consists of an app that focuses on collecting responses from anonymous users in active surveys, in collaboration with Bechic, a company specialized in the sale of accessories for mobile phones. Additionally, it integrates a comprehensive administrative control panel to efficiently manage and view the collected responses.",
        media:[`${WORK_PATH}/encuestas-bechic_desktop.PNG`,`${WORK_PATH}/encuestas-bechic_mobile`],
        tech_media:[TECH_STACK.aws,TECH_STACK.postgresql,TECH_STACK.nodejs,TECH_STACK.framermotion,TECH_STACK.reactjs,TECH_STACK.tailwindcss],
        site:"https://encuestas.bechicvzla.com/",
        github_repo:"",
        highlighted:true

    }

]

export const highlighted=()=>{
    const HIGHLIGHTED=PROJECTS.filter(project=>project.highlighted===true)

    return HIGHLIGHTED
}   
export default PROJECTS
