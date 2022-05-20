import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import "./styles.css";


export const UserLogin = () => {
  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = (e) => {
    e.preventDefault();
    console.log(username, "user")
    console.log(password, "pass")
    login(username, password)
  };

  return (
    <div id="container-login">
      <h1 className="title">Bem vindo, faça seu Login</h1>
      <form onSubmit={handlelogin} className="form">
        <div className="field">
          <label htmlFor="username">Usuário: </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="email"
            id="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            id="password"
          />
        </div>
        <div className="container-btn">
          <button>LOGIN</button>
        </div>
      </form>
    </div>
  );
};
