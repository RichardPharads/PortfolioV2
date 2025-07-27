import React, {createContext, useContext, useRef, useState} from 'react'
import Profile from './Components/Aside/Profile'
import Navbar from './Components/NavBar/Navbar'
import Main from './Components/Main/Main'
import Contents from './Components/Aside/Contents'
import SectionProvider from './Context/SectionContext'
import { motion } from 'motion/react'
import CursorBall from './Components/Page Components/CursorBall'
function App() {

  return (
    <div className='flex h-lvh m-auto px-18'>
        <CursorBall/>
        <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Profile/>
    </motion.div>

      <SectionProvider>
  <div className='flex flex-col w-full h-full p-4  py-4'>
        <Navbar  />
    <div className='flex flex-1 overflow-hidden'>
      
        <Main/>
            <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <Contents/>
        </motion.div>
    </div>
  </div>
  </SectionProvider>
</div>
  )
}
export default App