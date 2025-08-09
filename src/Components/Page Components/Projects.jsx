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
    <div className='w-full min-h-lvh '>
      <div className='text-center'>
        <h3 className='text-2xl md:text-3xl lg:text-4xl mb-4'>Welcome to my Project page</h3>
        <p className='text-sm md:text-base px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam!</p>
      </div>

      <div className='mt-12'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.filter((project) => project.featured).map((projectItem, index) => (
            <motion.div
              key={projectItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={projectItem.image} 
                  alt={projectItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {projectItem.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {projectItem.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectItem.tech.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/30 hover:bg-accent/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {projectItem.tech.length > 4 && (
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full">
                      +{projectItem.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={projectItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  
                  <a 
                    href={projectItem.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-accent hover:bg-accent/80 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Projects Section */}
      <div className='mt-16'>
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Other Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.filter((project) => !project.featured).map((projectItem, index) => (
            <motion.div
              key={projectItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={projectItem.image} 
                  alt={projectItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {projectItem.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {projectItem.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {projectItem.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-accent/15 text-accent text-xs font-medium rounded-md border border-accent/20 hover:bg-accent/25 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {projectItem.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/40 text-gray-300 text-xs font-medium rounded-md">
                      +{projectItem.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a 
                    href={projectItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800/80 hover:bg-gray-700 text-white text-center py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  
                  <a 
                    href={projectItem.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-accent/80 hover:bg-accent text-white text-center py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>

              {/* Subtle Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-16"
      >
        <p className="text-gray-300 mb-6 text-lg">
          Interested in working together? Let's discuss your next project!
        </p>
        <a 
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Get In Touch
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  )
  
}

export default Projects 