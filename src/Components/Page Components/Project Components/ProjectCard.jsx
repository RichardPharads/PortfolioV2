import React, { useState } from 'react'

function ProjectCard({id , image, title , text , tech}) {  
  const maxLength = 3
  tech && console
  return (
        <div className='card-container h-fit gap-4 flex '>
            <div className='flex gap-5 flex-wrap'>
              <div className='card w-full sm:max-w-[400px] sm:min-w-[500px] aspect-video bg-neutral-800/20'>{image}</div>
              <div className='flex gap-5 flex-col'>
               <h2 className='text-lg md:text-2xl'>{title}</h2>
                <p className='font-light text-neutral-200 w-full sm:w-[300px]  text-wrap'>{text}</p>
                <div className=' flex flex-wrap gap-2'>
                {
                  tech ? tech.slice(0, maxLength).map(item => (
                  <span key={id} className=' text-sm w-fit py-1 px-4 rounded-md border hover:bg-white hover:text-black cursor-pointer'>{item}</span>
                ))
                : <h2>No item</h2>}
                <div className='border rounded-full bg-white text-black'>
                {
                  (tech.length - maxLength)
                }+
                </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default ProjectCard