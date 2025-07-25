import React, { createRef, useRef } from 'react'
import { useSection } from '../../Context/SectionContext'
import ContentButton from './ContentButton'
function Contents() {
  const {sectionRef , listContents} = useSection()

      const scrollBtn = (contentId) => {
      sectionRef[contentId]?.current?.scrollIntoView({
                behavior: "smooth"
      })
    }
  return (



    <div className='w-[200px] z-50  h-[600px] overflow-y-auto custom-scrollbar'>
      <div className=' h-full rounded-lg pt-5 p-4 font-bold '>
        <h2 className='py-14'>On this Page</h2>

        <ul className='mt-2 cursor-pointer text-sm font-light text-gray-500 px-2 pt-4 pb-20  border-l-2 border-white/10 grid gap-2'>
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