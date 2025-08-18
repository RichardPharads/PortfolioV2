import React from 'react'
import ProjectCard from './ProjectCard'
import {projects} from './Projects'

function OtherProject() {
  return (
    <div className='flex flex-col justify-center gap-2  h-lvh '>
        {
          projects.filter(featured => !featured.featured).map(project =>(
            <ProjectCard image="something" title={project.title} text={project.description}/>
          ))
         }
    </div>
  )
}

export default OtherProject