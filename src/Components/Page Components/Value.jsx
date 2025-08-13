import React from 'react'

function Value() {
  return (
    <div className='w-full h-lvh'>
      <h2 className='py-10 text-2xl'>Value and Insight</h2>
      <div className='flex flex-wrap gap-8 '>
       <div className='w-[200px] h-[200px] bg-accent'></div>
        <article className='max-w-[500px] flex flex-col justify-between gap-10'>
          <p className='font-light text-2xl text-white/50'>❝ Hello ,<span className='text-accent'> My name is Richard </span>, Aspiring Full-Stack Developer from the Philippines.
            I am interested for creating Modern and <span className='text-white hover:text-accent duration-500'>scalable Application</span> ❞</p>
          <button className='py-2 px-6 border rounded w-fit text-white/50 hover:text-white duration-700'>View my Project</button>
        </article>
      
      </div>
    </div>
  )
}

export default Value