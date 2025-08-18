import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import {projects} from './Projects'

function RecentProject() {
  return (
    <div className='flex flex-col py-5 gap-5  min-h-lvh '>
      <h2 className='text-4xl text-neutral-500'>Recent Project</h2>
        {
          projects.filter(featured => featured.featured).map((project,index) =>(
          <ProjectCard key={index} id={project.id} image="something" title={project.title} text={project.description} tech={project.tech}/>
          
          ))
         }
    </div>
  )
}

export default RecentProject