import React from 'react'
import {motion , useScroll} from 'motion/react'
import { useSection } from "../../Context/SectionContext.jsx"



function Main() {
  const {sectionRef , listContents} = useSection()
  return (
    <div className='flex-1 z-0  scroll-auto'>
  
      <div className="h-[600px] w-full border border-black">
      <div className="h-full flex flex-col  ">
        <div className="overflow-y-auto flex-1 scrollbar-hidden">
          {
            listContents.map(function (items , index) {
              return (
                <div key={items.id} ref={sectionRef.current[(items.id)]} className="h-lvh w-full border-accent border grid place-items-center z-0">{items.id}
                
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main

