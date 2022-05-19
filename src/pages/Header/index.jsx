import { useContext } from 'react'
import { AuthContext } from '../../context/Auth'
import './styles.css'

export const Header = () => {
   const { logout } = useContext(AuthContext)

   const handleLogout = () => {
      logout()
   }

   return (
      <header className="head-menu">
        <div>The Dragons</div>
        <button onClick={handleLogout} >Sair</button>
      </header>
   )
}