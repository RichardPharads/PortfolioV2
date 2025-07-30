import React from 'react'

function ContentButton({scrollBtn , content}) {
  return (
    <button className='hover:border-l-2 px-2 py-1 hover:text-white cursor-pointer border-hidden  duration-700 font-medium text-left'  onClick={() => scrollBtn() }>{content}</button>
  )
}

export default ContentButton