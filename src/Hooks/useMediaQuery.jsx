import React, { useEffect, useState } from 'react'

function useMediaQuery({query}) {

    const [matches , setMatches ] = useState(() => window.matchMedia(query).matches)
    useEffect(() => {
        const queryList = window.matchMedia(query)
        const listener = (event) => setMatches(event.matches)
        
        queryList.addEventListener('change' , listener)
        return () => {
            queryList.removeEventListener('change' , listener)
        }
    }, [query])
    return matches
}

export default useMediaQuery