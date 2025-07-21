import React from 'react'

function Contents() {
  return (
    <div className='w-[200px] z-50 h-full  py-4 '>
      <div className=' h-full rounded-lg pt-15 p-4 font-bold'>
        <h2>On this page</h2>
        <ul className='border-l border-accent mt-2 *:px-6 *:py-2 *:hover:pl-5 *:duration-500 ease-in-out cursor-pointer text-sm font-light text-gray-500 *:hover:text-accent'>
          <li className='font-normal'>Scroll Triggered Animation</li>
                    <li className='font-normal'>My Skills</li>
          <li className='font-normal'>Workshops and Experience</li>

        </ul>
      </div>
    </div>
  )
}

export default Contents