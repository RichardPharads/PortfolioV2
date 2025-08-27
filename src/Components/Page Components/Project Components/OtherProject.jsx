import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import {projects} from './Projects'

function OtherProject() {
  return (
    <div className='flex flex-col gap-5 my-5  min-h-lvh '>
            <h2 className='text-4xl text-neutral-500'>Other Project</h2>

        {
          projects.filter(featured => !featured.featured).map((project,index) =>(
          <ProjectCard key={index} id={project.id} image={project.image} title={project.title} text={project.description} tech={project.tech}  live={project.live} github={project.github}/>
          
          ))
         }
    </div>
  )
}

export default OtherProject