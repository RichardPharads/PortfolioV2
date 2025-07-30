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
          <p className='font-light text-2xl text-white/50'>❝ Hello ,<span className='text-accent'> My name is Richard </span>, Aspiring Full-Stack Developer from the Philippines.
I am interested for creating Modern and <span className='text-white hover:text-accent duration-500'>scalable Application</span> ❞</p>
          <button className='py-2 px-6 border rounded w-fit text-white/50 hover:text-white duration-700'>View my Project</button>
        </article>
      
      </div>
      <p className='w-[600px] pt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus quas aliquid ad voluptatem impedit ea dicta sequi a? Facilis.</p>
    </div>
  )
}

export default Value