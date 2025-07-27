import LandingPage from "../Components/Page Components/LandingPage"
import Skills from "../Components/Page Components/Skills"
import Value from "../Components/Page Components/Value"
export const listContents = [
  [
  {
    id: 1,
    title: "About Me",
    contents: "Landing Page",
    components: () => <LandingPage/>

  },
  {
    id: 2,
    title: "About Me",
    contents: "Value and Insight",
    components: () => <Value/>

  },
  ,
  {
    id: 3,
    title: "About Me",
    contents: "Skills and Tools",
    components: () => <Skills/>

  },
],
]