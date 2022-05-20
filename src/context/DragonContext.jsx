import axios from "axios";
import { createContext } from "react";

export const DragonContext = createContext({})

export const DragonProvidor = ({ children }) => {
  function handleDelete(id) {
    axios.delete(`api/v1/dragon/${id}`)
  }
  return (
    <DragonContext.Provider value={{ handleDelete }}>
      {children}
    </DragonContext.Provider>
  )
}