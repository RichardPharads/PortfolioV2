import React, { useState } from 'react'

function ButtonToggle({toggleVal }) {
    const [isToggle , setIsToggle ] = useState(toggleVal)

    const toggleBtn = () => {
         setIsToggle((prev) => {
            return !prev
        })
    }
  return {isToggle , toggleBtn }
}

export default ButtonToggle