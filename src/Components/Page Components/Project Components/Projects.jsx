import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import openWeatherImage from '../../../Assets/WeatherAPP.png'
import portfolioImage from '../../../Assets/portfolioProject.png'
import jobfinder from '../../../Assets/jobsearch.png'
import pygmameImage from '../../../Assets/pygame.png'
import featured from '../../../Assets/featured.png'
export const projects = [
    {
      id: 1,
      title: "Job Find",
      description: "JobFinder is a responsive React and Tailwind CSS web app that integrates with a job API to provide real-time listings with keyword search, location filters, and detailed job views. It offers a clean UI, fast navigation, and scalable modular components.",
      image: jobfinder,
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/RichardPharads/DevJobPH",
      live: "https://dev-job-ph.vercel.app/",
      featured: false
    },
    {
      id: 2,
      title: "Arcade Thesis",
      description: "This project is a modular arcade system using Python with YOLO for object detection, PySide6 for GUI, and Pygame for gameplay, merging AI and game development for an interactive, real-time experience.",
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
              <div className='image w-full lg:w-[700px]  bg-white aspect-video'>
                <img src={featured} alt="" className='h-full hover:scale-90 transition-transform duration-600' />
              </div>
              <article className='md:w-[600px]'>
                <h2 className='text-2xl'>Front Neo Dashboard</h2>
                <p className=' font-light text-gray-300 py-3'> FrontNeo is an AI-powered platform with a smart dashboard designed to monitor and manage watts or electricity usage in real time. It provides users with clear visual analytics, predictive insights, and automated recommendations to optimize power consumption. With FrontNeo, individuals, businesses, or facilities can track electricity usage efficiently, identify patterns, and reduce energy costs while promoting sustainability. The dashboard is intuitive and adaptive, making energy management accessible to both technical and non-technical users.</p>

              </article>
            </div>
        </div>
      </div>

  )
  
}

export default Projects 