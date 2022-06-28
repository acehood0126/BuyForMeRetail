import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes";
import { AuthProvider } from "./contexts/JWTContext";

function App() {
  let routes = useRoutes(AllRoutes);

  return <AuthProvider>{routes}</AuthProvider>;
}

export default App;
