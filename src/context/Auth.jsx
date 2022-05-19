import { createContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [ user, setUser ] = useState(null)
   const navigate = useNavigate()

   useEffect(() => {
      const storage = localStorage.getItem('user')

      if(storage) {
         setUser(JSON.parse(storage))
      }
   }, [])

   const login = (username, password) => {
      const loggerd = {id: '123', username}

      localStorage.setItem('user', JSON.stringify(loggerd))

      if(username === 'admin' && password === '123') {
         setUser(loggerd)
         navigate('/')
      }
      return { error: "Usuário ou Senha invalido"}
   }

   const logout = () =>  {
      setUser(null)
      localStorage.removeItem('user')
      navigate('/login')
   }


   return (
      <AuthContext.Provider value={{ authenticated: !!user, user, login, logout}}>
         {children}
      </AuthContext.Provider>
   )
}