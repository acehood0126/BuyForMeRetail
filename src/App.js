import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/asdfv" element={<Nasasv />} />
        <Route path="/asdff" element={<Navbar />} />
        <Route path="/notouch" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
