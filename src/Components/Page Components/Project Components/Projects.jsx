import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import openWeatherImage from '../../../Assets/WeatherAPP.png'
import portfolioImage from '../../../Assets/portfolioProject.png'
import jobfinder from '../../../Assets/jobsearch.png'
import pygmameImage from '../../../Assets/pygame.png'
export const projects = [
    {
      id: 1,
      title: "Job Find",
      description: "JobFinder is a responsive web application built with React and Tailwind CSS, designed to help users search and explore job listings in real time. It integrates with an external job API (e.g. RapidAPI JSearch) to fetch live data, offering keyword-based search, location filters, and detailed job views. The app features a clean UI, fast navigation, and modular components for scalability and ease of maintenance",
      image: jobfinder,
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/RichardPharads/DevJobPH",
      live: "https://dev-job-ph.vercel.app/",
      featured: false
    },
    {
      id: 2,
      title: "Arcade Thesis",
      description: "This project builds a modular arcade system using Python, combining Ultralytics YOLO for object detection, PySide6 for GUI, and Pygame for gameplay. It creates an interactive experience where players engage through visual input and real-time feedback. The system showcases how AI and game development can merge to deliver immersive entertainment",
      image: pygmameImage,
      tech: ["Pygame", "Pyside6", "Python"],
      github: "https://github.com/RichardPharads/ArcadeThesis",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful UI animations.",
      image: openWeatherImage,
      tech: ["JavaScript", "React", "Tailwind", "Weather API"],
      github: "https://github.com/RichardPharads/weather-application",
      live: "https://weather-application-mu-neon.vercel.app/",
      featured: true
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my skills and projects with modern animations and smooth transitions.",
      image: portfolioImage ,
      tech: ["React", "Tailwind CSS" , "Vite"],
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

            <div className='flex flex-wrap gap-10 '>
              <div className='image w-full lg:w-[700px] aspect-video border border-accent'></div>
              <article className='md:w-[400px]'>
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