import LandingPage from "../Components/Page Components/LandingPage"
import Skills from "../Components/Page Components/Skills"
import Value from "../Components/Page Components/Value"
import Testimonials from "../Components/Page Components/Testimonials"
import Projects from "../Components/Page Components/Project Components/Projects"
import Profile from "../Components/Aside/Profile"
import RecentProject from '../Components/Page Components/Project Components/RecentProject'
import OtherProject from '../Components/Page Components/Project Components/OtherProject'

export const listContents = [
  [
     {
    id: 1,
    title: "Hero Section",
    contents: "Greeting",
    components: () => <LandingPage/>

  },
  ],
  [
 
  {
    id: 1,
    title: "Vision",
    contents: "Value and Insight",
    components: () => <Value/>

  },
  ,
  {
    id: 2,
    title: "Skills and interest",
    contents: "Skills and Tools",
    components: () => <Skills/>

  },
  {
    id: 3,
    title: "Testimonials",
    contents: "Testimonials",
    components: () => <Testimonials/>,
  },
  ],[
  {
    id: 1,
    title: "Projects",
    contents: "Featured Project",
    components: () => <Projects/>,
  },
    {
    id: 2,
    title: "Recent",
    contents: "Recent Projects",
    components: () => <RecentProject/>
  },
   {
    id: 3,
    title: "Other",
    contents: "Other Projects",
    components: () => <OtherProject/>,
  }
  ],[
    {
      id:1,
      title: "Profile",
      contents: "My Profile",
      
    }
  ]
]