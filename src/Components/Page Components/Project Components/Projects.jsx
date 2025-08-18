import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
export const projects = [
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
function Projects() {
  
  return (
        <div className='w-full h-lvh pt-5'>
        <div className='featured w-full'>
                <h2 className='text-4xl text-white mb-2'>Featured <span className='text-accent'> Project</span></h2>

            <div className='flex flex-wrap  '>
              <div className='image w-full lg:w-[700px] aspect-video border border-accent'></div>
              <article className='md:w-[400px]  mt-5'>
                <h2 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, asperiores.</h2>
                <p className=' font-light text-gray-300 py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto veritatis assumenda cupiditate pariatur fuga delectus dignissimos, porro expedita id similique.</p>
                <div className='icons flex gap-2'>
                  <div className='w-8 h-8 bg-red-600'></div>
                  <div className='w-8 h-8 bg-red-600'></div>
                  <div className='w-8 h-8 bg-red-600'></div>
                </div>
              </article>
            </div>
        </div>
      </div>

  )
  
}

export default Projects 