import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Template from "./pages/Template";
// import Dashboard from "./pages/Dashboard";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import SidebarItem from "./components/sidebar/SidebarItem";
import WhatsNew from "./pages/WhatsNew";

function App() {
  return (
    <div className="font-Avenir bg-specwhite">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/header" element={<Header />} />
          <Route path="/sidebar" element={<Sidebar />} />

          <Route path="/template" element={<Template />} />
          <Route path="/whatsnew" element={<WhatsNew />} />

          <Route path="/menuItem" element={<SidebarItem />} />

          <Route
            path="/dashboard"
            element={<Template pageType="dashboard" />}
          />
          <Route path="/deals" element={<Template pageType="deals" />} />
          <Route
            path="/shipments"
            element={<Template pageType="shipments" />}
          />
          <Route path="/faqs" element={<Template pageType="FAQpage" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
