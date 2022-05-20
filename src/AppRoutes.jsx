import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserLogin } from "./pages/Login";
import { FormsDragon } from "./pages/FormsDragon";

import { AuthContext, AuthProvider } from './context/Auth'
import { useContext } from "react";
import { DragonProvider } from "./context/DragonContext";

export const AppRouter = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext)

    if(!authenticated)  <Navigate to="/login" />
    return children
  }

  return (
    <BrowserRouter>
      <AuthProvider>
          <DragonProvider>
            <Routes>
              <Route path="/login" element={<UserLogin />} />
                <Route path="/"  element={<Private><Home /></Private>} />
                <Route path="/register" element={<FormsDragon />} />
            </Routes>
          </DragonProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
