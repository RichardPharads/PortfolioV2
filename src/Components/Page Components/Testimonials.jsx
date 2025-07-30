import React from 'react'
import TestimonialsCard from './TestimonialsCard'

function Testimonials() {
  return (
    <div className=''>
         <h2 className='py-10 text-2xl'>Testimonials</h2>

        
        <div className='flex flex-wrap gap-3'>
        {[1,2,].map(item =>(
            <TestimonialsCard/>
        ))

        }
       </div>
    </div>
  )
}

export default Testimonials