import { createContext, useState } from "react"
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [ user, setUser ] = useState(null)
   const navigate = useNavigate()

   const login = (username, password) => {
      if(username === 'admin' && password === '123') {
         setUser(username)
         navigate('/')
      }
      return { error: "Usuário ou Senha invalido"}
   }

   const logout = () =>  {
      setUser(null)
      navigate('/login')
   }


   return (
      <AuthContext.Provider value={{ authenticated: !!user, user, login, logout}}>
         {children}
      </AuthContext.Provider>
   )
}