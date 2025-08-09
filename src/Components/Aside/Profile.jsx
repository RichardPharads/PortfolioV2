import React from 'react'
import profile from '../../Assets/image.png'
import verify from '../../Assets/verify.png'
import github from '../../Assets/github 1.png'
import twitter from '../../Assets/twitter.png'
import facebook from '../../Assets/facebook.png'
import linkedin from '../../Assets/linkedin.png'
const lists = [

  { id: 1,
    header: "Things Interested In",
    items: ["UI/UX", "Backend" , "Frontend" , "API", "Machine Learning" , "Training Model" , "Web Design" , "Fullstack"  ]
  },
   {
    id: 2,
    header: "Awards & Certificates",
    items: ["Basic React coursera", "Advanced React Coursera" , "Responsive Website FreeCodeCamp" , "Appcon Participation", "BPI Participation" ,  ]
  },
]



  
function Profile() {
  return (
    
    <div className={`center border-x  h-full border-gray-600 w-[300px] border-t-0 bg-linear-to-t from-[#0C0C0C] from-0% to-[#141414] to-100% `}>
      <div className=' flex flex-col gap-8 p-6 pt-16'>
        <div className=' h-fit flex flex-col items-center text-center gap-6'>
          <div className='profile w-[100px] h-[100px] rounded-full '>
            <img className='w-full h-full' src={profile} alt="" />
          </div>

          <div className='grid gap-4'>
            <div>
              <div className='flex  justify-center items-center gap-1.5'>
              <h2 className='text-2xl font-bold'>Richard Parado</h2>
              <div className='w-[20px] h-[20px] '>
                <img className='w-full h-full' src={verify} alt="" />
              </div>
              </div>
              <h3 className='text-sm text-white/80'>Full stack Dev</h3>
            </div>
            <button onClick={() => window.open('https://github.com/RichardPharads', '_blank')} className='text-[15px] border min-w-[200px] min-h-[32px] rounded-[10px] text-white hover:bg-white/10 duration-500'>Follow</button>
          </div>

          <div className='flex text-sm font-light gap-2'>
            <span className='flex gap-1'>
              <img className='w-[20px] h-[20px]' src={twitter} alt="" />
              <h3>Richard Parado</h3>
            </span>
            <span className='flex gap-1'>
              <img className='w-[20px] h-[20px]' src={github} alt="" />
              <h3>Richard Parado</h3>
            </span>
          </div>

        </div>
     
        {
          lists.map(({header , items , id})=>(
            <div key={id} className='grid gap-2'>
            <h2 className='text-[18px] font-bold'>{header}</h2>
            <div className='w-full text-wrap'>
      
            { 
              items.map((item , index) => (
                <ul key={index} className="text-sm inline text-white/80 hover:text-white duration-500 cursor-crosshair">{item} | </ul>
              ))
            }
           </div>
           </div>
          ))
        }

        <div className='gap-2 *:cursor-pointer flex'>
          <div className='w-6 h-6 cursor-pointer '>
            <a href="https://www.facebook.com/pharadss">
            <img className='w-full h-full' src={facebook} alt="" />
            </a>
          </div>
          <div className='w-6 h-6 cursor-pointer'>
            <a href="https://www.linkedin.com/in/richard-parado-143502274/">
             <img className='w-full h-full' src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Profile