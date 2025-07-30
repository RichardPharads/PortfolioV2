import LandingPage from "../Components/Page Components/LandingPage"
import Skills from "../Components/Page Components/Skills"
import Value from "../Components/Page Components/Value"
import Testimonials from "../Components/Page Components/Testimonials"
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
    components: () => <Testimonials/>

  },
]
]