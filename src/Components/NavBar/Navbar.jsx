import React from 'react'
import { useSection } from '../../Context/SectionContext'
const navLinks = [
  {
    id: 0,
    page: "Home"
  },{
    id: 1,
    page: "About"
  },{
    id:2,
    page: "Projects"
  },{
    id:3,
    page: "Portfolio"
  },{
    id:4,
    page: "Contact"
  }
  ,{
    id:5,
    page: "Nigga"
  }
]



function Navbar() {
  const {dispatch} = useSection()
  return (
    <div className='h-30  relative flex items-center'>
      <div className='blur-3xl z-40 bg-black w-full h-full absolute'></div>
      <div className='rounded-md text-center z-50 w-full h-[92px] items-center flex justify-between bg-bg-dark-800 px-16 '>
        <div className=' pr-40'>Logo</div>
        <div className=' flex-1'>
          <ul className='flex gap-4'>
          {
            navLinks.map(({id , page}) => (
              <button className='text-white hover:text-accent duration-300' onClick={() => dispatch({type:`${page.toLocaleLowerCase()}`})}  key={id}>{page}</button>
            ))
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar