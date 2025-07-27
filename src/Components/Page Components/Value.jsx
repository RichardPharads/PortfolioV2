import React from 'react'

function Value() {
  return (
    <div className='w-full h-lvh'>
      <h2 className='py-10 text-2xl'>Value and Insight</h2>
      <div className='flex gap-8'>
        <div className='w-[220px] h-[220px] bg-amber-50'>
          <img src="" alt="" />
        </div>
        <article className='max-w-[500px] flex flex-col justify-between gap-10'>
          <p className='font-light text-2xl'>❝ Hello , My name is Richard , Aspiring Full-Stack Developer from the Philippines.
I am interested for creating Modern Looking Application that is Scalable and Fast ❞</p>
          <button className='py-2 px-6 border rounded w-fit text-white/50 hover:text-white duration-700'>View my Project</button>
        </article>
      </div>
    </div>
  )
}

export default Value