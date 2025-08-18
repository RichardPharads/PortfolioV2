import React from 'react'

function ProjectCard({image, title , text}) {
  return (
        <div className='card-container h-fit gap-2 flex flex-wrap'>
            <div className='flex gap-5 flex-wrap'>
              <div className='card w-full sm:max-w-[400px] sm:min-w-[500px] aspect-video bg-neutral-800/20'>{image}</div>
              <div className='flex flex-col'>
               <h2 className='text-lg md:text-2xl'>{title}</h2>
                <p className='font-light text-neutral-200 w-full sm:w-[300px] border text-wrap'>{text}</p>
              </div>
             
            </div>
        </div>
  )
}

export default ProjectCard