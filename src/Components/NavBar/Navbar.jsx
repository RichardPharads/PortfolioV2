import React from 'react'

const navLinks = [
  "Home", "About", "Resume" , "Project" , "Achievement" , "Testimonials" , "Contact"
]



function Navbar() {
  return (
    <div className='h-30  relative flex items-center'>
      <div className='blur-3xl z-40 bg-black w-full h-full absolute'></div>
      <div className='rounded-md text-center z-50 w-full h-[92px] items-center flex justify-between bg-bg-dark-800 px-16 '>
        <div className=' pr-40'>Logo</div>
        <div className=' flex-1'>
          <ul className='flex gap-4'>
          {
            navLinks.map((item , index) => (
              <li key={index}>{item}</li>
            ))
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar