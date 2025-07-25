import React from 'react'

function ContentButton({scrollBtn , content}) {
  return (
    <button className='hover:border-l-2 px-3 py-2 hover:bg-accent/10 hover:rounded-md hover:border-accent hover:text-accent duration-700 font-medium'  onClick={() => scrollBtn() }>{content}</button>
  )
}

export default ContentButton