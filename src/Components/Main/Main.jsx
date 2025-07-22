import React from 'react'
import image from '../../Assets/verify.png'
import {motion , useScroll} from 'motion/react'
import {listContents} from '../../data/mainContents.js'


console.log(listContents[1].map(item => {
  return item
}))


function Main() {
  const {scrollXProgress} = useScroll()
  return (
    <div className='flex-1 z-0  scroll-auto'>
      <motion.div></motion.div>
      <div className="h-[600px] w-full border border-black">
      <div className="h-full flex flex-col  ">
        <div className="overflow-y-auto flex-1 scrollbar-hidden">
          {
            listContents.map(function (items , index) {
              return (
                <div key={items[0].id} className="h-lvh w-full grid place-items-center z-0">{items[0].name}
                  <button className='border py-2 px-5 rounded-md' type='button' onClick={() => alert(items[0].button)}>{items[0].lastname}</button>
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

