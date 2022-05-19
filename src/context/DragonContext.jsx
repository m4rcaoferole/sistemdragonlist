import { createContext } from "react";

export const DragonContext = createContext()

export const DragonProvidor = ({ children }) => {

  return (
    <DragonContext.Provider value={ }>
      {children}
    </DragonContext.Provider>
  )
}