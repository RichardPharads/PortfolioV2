import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import react from '../../Assets/atom.png'
import javascript from '../../Assets/javascript.png'
import html from '../../Assets/html.png'
import useMediaQuery from '../../Hooks/useMediaQuery'

function LandingPage() {
  const [text, setText] = useState('')
  const fullText = "Welcome to my portfolio"
  const [currentIndex, setCurrentIndex] = useState(0)
  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  // Download resume function
  const handleDownloadResume = () => {
    // Replace this URL with your actual resume file
    const resumeUrl = '/resume.pdf' // You'll need to add your resume file to the public folder
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'RichardParado_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className='pt-20 flex justify-center items-center'>
        <div className='text-center p-3 md:p-5 gap-6 md:gap-10 grid'>
          <div className='grid gap-4'>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='text-xl md:text-2xl lg:text-3xl text-white/60'
            >
              <h2>Im a Fullstack Developer</h2>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='*:w-[40px] *:h-[40px] md:*:w-[50px] md:*:h-[50px] flex justify-center gap-3 md:gap-4'
          >
            <img className='spinner' src={react} alt="React" />
            <img src={javascript} alt="JavaScript" />
            <img src={html} alt="HTML" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className='flex flex-col gap-3 md:flex-row md:gap-4 justify-center items-center'
          >
            <div className='border rounded-xl w-fit py-2 px-8 border-accent hover:bg-white/10 cursor-pointer duration-500 transition-all hover:scale-105'>
              Get in Touch
            </div>
            <button 
              onClick={handleDownloadResume}
              className='border rounded-xl w-fit py-2 px-8 border-green-500 text-green-500 hover:bg-green-500 hover:text-white cursor-pointer duration-500 transition-all hover:scale-105 flex items-center gap-2'
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
          </motion.div>
        </div>
    </div>
  )
}

export default LandingPage