import React from 'react'

function ContentButton({scrollBtn , content}) {
  return (
    <button className='hover:border-l-2 px-3 py-3 border-hidden hover:bg-accent/10 rounded-md hover:text-accent duration-700 font-medium text-left'  onClick={() => scrollBtn() }>{content}</button>
  )
}

export default ContentButton