import React from "react";

import Navbar from "../components/layouts/Navbar";
import Landing from "../components/layouts/Landing";
import Joinus from "../components/layouts/Joinus";
import Profitrewards from "../components/layouts/Profitrewards";
import Howitworks from "../components/layouts/Howitworks";
import Footer from "../components/layouts/Footer";

const Dashboard = () => {
  return (
    <div className="font-Avenir">
      <Navbar />
      <Landing />
      <Joinus />
      <Profitrewards />
      <Howitworks />
      <Footer />
    </div>
  );
};

export default Dashboard;
