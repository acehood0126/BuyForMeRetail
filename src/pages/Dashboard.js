import React from "react";

import Navbar from "../components/layouts/Navbar";
import Landing from "../components/layouts/Landing";
import Joinus from "../components/layouts/Joinus";
import Profitrewards from "../components/layouts/Profitrewards";

const Dashboard = () => {
  return (
    <div className="font-AvenirMedium">
      <Navbar />
      <Landing />
      <Joinus />
      <Profitrewards />
    </div>
  );
};

export default Dashboard;
