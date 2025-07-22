import React from 'react'
import { listContents } from '../../data/mainContents'
function Contents() {
  return (
    <div className='w-[200px] z-50 h-full  py-4 '>
      <div className=' h-full rounded-lg pt-15 p-4 font-bold'>
        <h2>On this page</h2>

        <ul className='mt-2 cursor-pointer text-sm font-light text-gray-500'>
          {
            listContents.map((content , index) => (
              <button key={index} className='text-left hover:border-l-1 ease-in-out duration-500 border-accent hover:p-4 p-2 hover:text-accent'>{content[0].contents}</button>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Contents