import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth components
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
// import Page404 from "./pages/auth/Page404";
// import Page500 from "./pages/auth/Page500";
// import { LOGOUT } from "./actions/types";

import LandingPage from "./pages/LandingPage";

import Template from "./pages/Template";

import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import SidebarItem from "./components/sidebar/SidebarItem";

import { AuthProvider } from "./contexts/JWTContext";

import AuthLayout from "./layouts/Auth";
import Dashboard from "./pages/Dashboard";

//Admin
import AdminLayout from "./components/layouts/Main/Admin";
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminShipments from "./pages/Admin/Shipments";
import AdminDeals from "./pages/Admin/Deals";

const AllRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "shipments",
        element: <AdminShipments />,
      },
      {
        path: "deals",
        element: <AdminDeals />,
      },
    ],
  },

  // {
  //   path: "404",
  //   element: <Page404 />,
  // },
  // {
  //   path: "500",
  //   element: <Page500 />,
  // },
];
// const oldAllRoutes = () => {
//   return (
//     <div className="font-Avenir bg-specwhite">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/forgot" element={<Forgot />} />
//           <Route path="/header" element={<Header />} />
//           <Route path="/sidebar" element={<Sidebar />} />

//           <Route path="/template" element={<Template />} />

//           <Route path="/menuItem" element={<SidebarItem />} />

//           <Route
//             path="/dashboard"
//             element={<Template pageType="dashboard" />}
//           />
//           <Route path="/deals" element={<Template pageType="deals" />} />
//           <Route
//             path="/shipments"
//             element={<Template pageType="shipments" />}
//           />
//           <Route path="/faqs" element={<Template pageType="faqs" />} />
//           <Route
//             path="/contactus"
//             element={<Template pageType="contactus" />}
//           />
//           <Route path="/whatsnew" element={<Template pageType="whatsnew" />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

export default AllRoutes;
