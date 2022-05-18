import { useState } from 'react'
import './styles.css'

export const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handlelogin = (e) => {
    
  }

  return (
    <div id="container-login">
      <h1 className="title">Bem vindo, faça seu Login</h1>
      <form className="form">

        <div className="field">
          <label htmlFor="email">Email: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="email"/>
        </div>
        <div className="field">
          <label htmlFor="password">Senha: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password"/>
        </div>

        <div className="container-btn">
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  )
}