import React from 'react'
import {complex, motion , useScroll} from 'motion/react'
import { useSection } from "../../Context/SectionContext.jsx"



function Main() {
  const {sectionRef , listContents} = useSection()
  return (
    <div className='flex-1 z-0  scroll-auto'>
  
      <div className="h-[600px] w-full border border-black">
      <div className="h-full flex flex-col  ">
        <div className="overflow-y-auto flex-1 scrollbar-hidden pb-20">
          {
            listContents.map(function (items , index) {
              return (
                <div key={items.id} ref={el => sectionRef[items.id] = { current: el }} className="min-h-lvh w-full  z-0 ">
                  <h1 className='text-5xl border-accent border-2 w-fit p-2'>{items.id}</h1>
                  <p className='text-6xl py-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus nam quam ipsa molestias ad natus impedit minima perspiciatis reprehenderit?</p>
                  {
                    items.components && items.components()
                  }
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

