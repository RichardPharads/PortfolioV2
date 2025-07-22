import React, {createContext, useContext, useRef} from 'react'
import Profile from './Components/Aside/Profile'
import Navbar from './Components/NavBar/Navbar'
import Main from './Components/Main/Main'
import Contents from './Components/Aside/Contents'
import { listContents } from './data/MainContents.js'

const SectionContext = createContext()

function App() {

  
  const sectionRef = useRef(
    listContents.reduce((acc , component) =>{
      acc[component.id] = useRef()
      return acc
    },{})
  )


  return (
    <div className='flex h-lvh m-auto px-18'>
  <Profile />
  <div className='flex flex-col w-full h-full p-4  py-4'>
    <Navbar  />
    <div className='flex flex-1'>
      <SectionContext.Provider value={{sectionRef}}>
        <Main/>
        <Contents/>
      </SectionContext.Provider>
    </div>
  </div>
</div>
  )
}
export const useSection = () => useContext(SectionContext)
export default App