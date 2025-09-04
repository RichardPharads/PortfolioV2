import React, { useState } from 'react'

function ProjectCard({id , image, title , text , tech , live , github}) {  
  const maxLength = 3
  tech && console
  return (
        <div className='card-container h-fit gap-4 flex my-4'>
            <div className='flex gap-5 flex-wrap'>
              <div className='bg-white h-fit'>
              <div className='card w-full sm:max-w-[400px] sm:min-w-[450px] aspect-video bg-neutral-800/20 flex items-center justify-center overflow-hidden border hover:scale-90 duration-500'>
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                  
                ) : (
                  <span className="text-neutral-400">No Image</span>
                )}
                </div>
              </div>
              <div className='flex gap-5 flex-col'>
               <h2 className='text-lg md:text-2xl'>{title}</h2>
                <p className='font-light text-neutral-500 w-full sm:w-[300px] text-wrap'>{text}</p>
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
                <div className='flex gap-2 *:border *:border-accent'>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex-1 rounded-md hover:opacity-55 text-center py-2'
                    style={{ pointerEvents: live ? 'auto' : 'none', opacity: live ? 1 : 0.5 }}
                  >
                    Live
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex-1 rounded-md hover:opacity-55 text-center py-2'
                    style={{ pointerEvents: github ? 'auto' : 'none', opacity: github ? 1 : 0.5 }}
                  >
                    Coding
                  </a>
                </div>
              </div>
            </div>
        </div>
  )
}

export default ProjectCard