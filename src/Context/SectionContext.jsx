import React, { createContext, useContext, useReducer, useRef, useState } from 'react'
import { listContents } from "../data/MainContents"


//Creating Reducer for navigation when is clicked for dynamic Data kase tamad ako 
const SectionContextAPI = createContext()
const pageReducer = (state , action ) =>{
  switch(action.type){
    case "home":
      return {page:0}
    case "about":
      return {page:1}
    case "projects":
      return {page:2}

    default:
      return state
  }
}

const initialPage = {
  page: 0
}



function SectionProvider({ children }) {

  const [state , dispatch] = useReducer(pageReducer, initialPage)

  // Flatten listContents if it's a 2D array
  const flatContents = Array.isArray(listContents[state.page]) ? listContents[state.page] : listContents

  const [selectedSection, setSelectedSection] = useState(flatContents[state.page]?.id || 1)
  const sectionRef = useRef(
    flatContents.reduce((acc, component) => {
      acc[component.id] = React.createRef()
      return acc
    }, {})
  )

  return (
    <SectionContextAPI.Provider value={{
      sectionRef,
      listContents: flatContents,
      selectedSection,
      setSelectedSection,
      dispatch
    }}>
      {children}
    </SectionContextAPI.Provider>
  )
}

export const useSection = () => useContext(SectionContextAPI)

export default SectionProvider