import React from 'react'

function ContentButton({key, scrollBtn , content}) {
  return (
    <div className='border-l-2 px-3 py-2 hover:px-6 hover:border-accent hover:text-accent duration-700 font-medium' key={key} onClick={() => scrollBtn() }>{content}</div>
  )
}

export default ContentButton