import React from 'react'
import { useSection } from '../../Context/SectionContext'
function UserProfile() {
    const {dispatch} = useSection()
  return (
     <div className='flex flex-col items-center gap-2 ' onClick={() => dispatch({type:"profile"})} key="21">
        <div className={`w-14 h-14 rounded-full border-accent border-2 bg-cover]`}></div>
      </div>
  )
}

export default UserProfile