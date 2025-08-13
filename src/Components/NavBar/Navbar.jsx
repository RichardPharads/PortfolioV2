import { useSection } from '../../Context/SectionContext'
import ButtonToggle from '../../Hooks/ButtonToggle'
import close from '../../Assets/eye.png'
import open from '../../Assets/menu.png'
import github from '../../Assets/github 1.png'
import linkedin from '../../Assets/linkedin.png'
import userProfile from '../../Assets/profile.jpg'
import { useState } from 'react'
import UserProfile from './UserProfile'
import ToggleIcons from './ToggleIcons'
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
  }
]



function Navbar() {
  const [isBtnHover , setIsBtnHover ] = useState(false)
  
  const {dispatch} = useSection()
  const {isToggle , toggleBtn } = ButtonToggle(true)
  return (
    <div className=''>
    <div  className={`h-full bg-black/60 backdrop-blur-sm right-0 drop-shadow-2xl duration-700 top-0 ${isToggle ? " w-9/12" : "w-[200px] opacity-0"}  absolute z-50 min-sm:hidden ` }>
    <h2 className='text-2xl py-10 px-4'>Navigation</h2>
    <ul className='flex flex-col'>
      {
          navLinks.map(({id , page}) => (
            <button className='text-white/50 hover:text-accent duration-300 text-start py-4 px-7' onClick={() => dispatch({type:`${page.toLocaleLowerCase()}`})}  key={id}>{page}</button>
          ))
        }
    </ul>
    <div className='absolute bottom-5 w-full'>
      <div className='flex justify-between items-end p-5 gap-2 ' >
      <div className="button flex flex-col gap-2 items-end flex-wrap justify-center">
        <ToggleIcons/>
       
     

     
      </div>
          <UserProfile/>
      </div>
    </div>

    </div>

    
    <div className='h-20 max-sm:h-0 relative flex items-center '>


      <div className='blur-3xl z-40 bg-black w-full h-full absolute'></div>
      

      <div className='w-10 h-10 top-5  absolute right-0 z-50 text-white text-4xl' onClick={toggleBtn} >

        <img className='w-full h-auto' src={`${isToggle ? close : open}`} alt="" />
      </div>
      





      <div className='rounded-md text-center z-50 w-full h-[92px]  items-center flex justify-between bg-bg-dark-800 px-16 max-sm:hidden'>
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
        <div>
         <UserProfile/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar