import React from 'react'
import atom from '../../Assets/atom.png'
import github from '../../Assets/github 1.png'
import api from '../../Assets/api.png'
import javascript from '../../Assets/javascript.png'

function Skills() {
  return (
    <div className=' '>
         <h2 className='py-10 text-2xl'>Value and Insight</h2>
            <div className='flex gap-2 flex-wrap '>
            {[1,2,3,4,5,6,7,8,9].map((item) =>(
                <div className='flex w-fit py-5 px-10 bg-white/10  justify-center items-center gap-4 rounded-xl '>
                <div className='w-[40px] h-[40px]'>
                    <img src={atom} alt="" />
                </div>
                <h3 className='text-2xl'>React JS</h3>
            </div>
            ))}
         
            
        </div>
    </div>
  )
}

export default Skills