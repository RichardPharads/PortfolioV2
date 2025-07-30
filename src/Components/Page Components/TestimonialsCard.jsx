import React from 'react'
import ChatGpt from '../../Assets/chatGpt.jpg'
import ProfileImage from '../../Assets/profile.jpg'
function TestimonialsCard() {
  return (
    <div className='w-fit max-w-[360px] bg-gray-950/50 h-[250px] rounded-sm p-6 py-8 flex justify-between flex-col'>
       <h2 className='text-sm font-light text-white/70'>❝ Hello , My name is Richard , Aspiring Full-Stack Developer from the Philippines.
I am interested for creating Modern Looking Application that is Scalable and Fast ❞  </h2>
       <div className='flex  items-center gap-8 relative'>
            <div className='w-10 h-10 rounded-full bg-white z-20 shadow-2xl'>
                <img className='w-full h-full rounded-full' src={ProfileImage} alt="" />
            </div>
            <div className='w-10 h-10 rounded-full bg-gray-600 absolute left-5 z-0 border border-white/10'>
                <img className='w-full h-full rounded-full' src={ChatGpt} alt="" />
            </div>
            <div className=''>
                <h3 className='text-sm/1 '>Richard Parado</h3>
                <span className='text-[10px]/1'>Founder / CEO</span>
            </div>
       </div>
    </div>
  )
}

export default TestimonialsCard