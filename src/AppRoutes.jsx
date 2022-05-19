import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserLogin } from "./pages/Login";
import { RegistersDragon } from "./pages/RegistersDragon";

import { AuthContext, AuthProvider } from './context/Auth'
import { useContext } from "react";

export const AppRouter = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext)

    if(!authenticated) {
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/"  element={<Private><Home /></Private>} />
          <Route path="/register" element={<Private><RegistersDragon /></Private>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
