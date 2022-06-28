import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import AllRoutes from "./routes";
import { AuthProvider } from "./contexts/JWTContext";

function App() {
  const MyRoutes = () => {
    let routes = useRoutes(AllRoutes);
    return routes;
  };
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
