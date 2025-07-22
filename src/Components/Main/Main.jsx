import React from 'react'
import image from '../../Assets/verify.png'
import {motion , useScroll} from 'motion/react'
import {listContents} from '../../data/MainContents.js'
import { useSection } from '../../App.jsx'
import Component1 from '../Component1.jsx'



function Main() {
  const {sectionRef} = useSection()
  return (
    <div className='flex-1 z-0  scroll-auto'>
  
      <div className="h-[600px] w-full border border-black">
      <div className="h-full flex flex-col  ">
        <div className="overflow-y-auto flex-1 scrollbar-hidden">
          {
            listContents.map(function (items , index) {
              return (
                <div key={items.id} ref={sectionRef.current[(items.id)]} className="h-lvh w-full border-accent border grid place-items-center z-0">{items.id}
                
                  {/* <button className='border py-2 px-5 rounded-md' type='button' onClick={() => alert(items.button)}></button> */}
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

