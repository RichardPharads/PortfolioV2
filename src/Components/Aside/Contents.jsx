import React, { createRef, useRef } from 'react'
import { listContents } from '../../data/MainContents'
import { useSection } from '../../App'
import ContentButton from './ContentButton'
function Contents() {
  const {sectionRef} = useSection()

      const scrollBtn = (contentId) => {
      sectionRef.current[contentId]?.current?.scrollIntoView({
                behavior: "smooth"
      })
    }
  return (



    <div className='w-[200px] z-50 border h-[600px] overflow-y-auto'>
      <div className=' h-full rounded-lg pt-15 p-4 font-bold '>
        <h2>On this Page</h2>

        <ul className='mt-2 cursor-pointer text-sm font-light text-gray-500 p-2 '>
          {
            listContents.map((content , index) => (

              <ContentButton key={content.id} scrollBtn={() => scrollBtn(content.id)} content={content.contents} />
            ))
          } 
        </ul>
      </div>
    </div>
  )
}

export default Contents