import React from 'react'
import Profile from './Components/Aside/Profile'
import Navbar from './Components/NavBar/Navbar'
import Main from './Components/Main/Main'
import Contents from './Components/Aside/Contents'

function App() {
  return (
    <div className='flex h-dvh m-auto px-18'>
  <Profile />
  <div className='flex flex-col w-full h-full p-4  py-4'>
    <Navbar  />
    <div className='flex flex-1'>
      
      <Main/>
      <Contents/>
    </div>
  </div>
</div>
  )
}

export default App