import React, {createContext, useContext, useRef} from 'react'
import Profile from './Components/Aside/Profile'
import Navbar from './Components/NavBar/Navbar'
import Main from './Components/Main/Main'
import Contents from './Components/Aside/Contents'
import SectionProvider from './Context/SectionContext'
function App() {


  return (
    <div className='flex h-lvh m-auto px-18'>
      <Profile/>
      <SectionProvider>
  <div className='flex flex-col w-full h-full p-4  py-4'>
    <Navbar  />
    <div className='flex flex-1 overflow-y-hidden'>
      
        <Main/>
        
        <Contents/>
      
    </div>
  </div>
  </SectionProvider>
</div>
  )
}
export default App