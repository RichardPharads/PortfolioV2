import React from 'react'
import profile from '../../Assets/image.png'
import verify from '../../Assets/verify.png'
import github from '../../Assets/github 1.png'
import twitter from '../../Assets/twitter.png'
const lists = [

  {
    header: "Awards & Certificates",
    items: ["UI/UX", "Backend" , "Frontend" , "API", "Machine Learning" , "Training Model" , "Web Design" , "Fullstack"  ]
  },
   {
    header: "Awards & Certificates",
    items: ["UI/UX", "Backend" , "Frontend" , "API", "Machine Learning" , "Training Model" , "Web Design" , "Fullstack"  ]
  },
]



  
function Profile() {
  return (
    <div className='center border border-accent w-[320px] border-t-0 rounded-t-2xl bg-linear-to-t from-[#0C0C0C] from-0% to-[#141414] to-100%'>
      <div className=' flex flex-col gap-8 p-6 pt-8'>
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
            <button className='text-[15px] border min-w-[200px] min-h-[32px] rounded-[10px] text-white'>Follow</button>
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
          lists.map(({header , items})=>(
            <div className='grid gap-2'>
            <h2>{header}</h2>
            <div className='w-full text-wrap'>
            { 
              items.map(item => (
                <span className="text-base">{item}</span>
              ))
            }
           </div>
           </div>
          ))
        }

        <div className='gap-2 border flex'>
          <div className='w-6 h-6 bg-red-400 border'>
            <img className='w-full h-full' src="" alt="" />
          </div>
          <div className='w-6 h-6 bg-red-400 border'>
            <img className='w-full h-full' src="" alt="" />
          </div>
        </div>
      </div>
      </div>
  )
}

export default Profile