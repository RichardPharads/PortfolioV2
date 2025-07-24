import React, {createContext , useContext , useRef} from 'react'
import { listContents } from "../data/mainContents"
const SectionContextAPI = createContext()

function SectionProvider({children ,}) {

      const sectionRef = useRef(
        listContents.reduce((acc , component) =>{
          acc[component.id] = useRef()
          return acc
        },{})
      )

  return (
     <SectionContextAPI.Provider value={{sectionRef ,  listContents}}>
            {children}
    </SectionContextAPI.Provider>
  )
}
export const useSection = () => useContext(SectionContextAPI)

export default SectionProvider