import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful UI animations.",
      image: "",
      tech: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      github: "https://github.com/RichardPharads/weather-application",
      live: "https://weather-application-mu-neon.vercel.app/",
      featured: true
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my skills and projects with modern animations and smooth transitions.",
      image: "",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/RichardPharads/portfolioWebsite",
      live: "https://portfolio-website-iota-rose-54.vercel.app/",
      featured: true
    }
  ]

  return (
    <div>
      <div className=' w-full h-auto relative'>
        
        <div className='featured w-full h-fit'>
            <h2 className='py-5 text-neutral-500'>Featured</h2>
            <div className='flex flex-wrap gap-5'>
              <div className='image w-full sm:w-full aspect-video  border border-accent'></div>
              <article className='w-70'>
                <h2 className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, asperiores.</h2>
                <p className='text-sm font-light text-gray-300 py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto veritatis assumenda cupiditate pariatur fuga delectus dignissimos, porro expedita id similique.</p>
              </article>
            </div>
        </div>
        <div className=' p-3 '>
          <h2 className='py-5 text-neutral-500'>Recent</h2>
          <div className='card-container  h-fit gap-2 flex flex-wrap'>
         
            <div className='card max-w-[200px] min-w-[210px] aspect-video bg-neutral-800/20'></div>
            <div className='card w-[210px] aspect-video bg-neutral-800/20'></div>
            <span className='py-5'>
            </span>
        </div>
      </div>
      </div>

    </div>
  )
  
}

export default Projects 