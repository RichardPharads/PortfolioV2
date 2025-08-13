import React from 'react'
import { useState } from 'react'

function ToggleIcons() {
      const [isBtnHover , setIsBtnHover ] = useState(false)

  return (
         <div className='relative'>
          {
            isBtnHover && <div className='absolute left-12/12 bottom-4 bg-neutral-950 rounded-sm border border-neutral-500'>
                    <div className='p-2 text-sm font-light'>RichardPharads</div>
                  </div>
          }
          <i onClick={() => alert("btn click")} onMouseLeave={() => setIsBtnHover(false)} onMouseEnter={() => setIsBtnHover(true)} className="devicon-github-original text-3xl "></i>

        </div>
  )
}

export default ToggleIcons