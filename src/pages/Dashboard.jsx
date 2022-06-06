import React from "react";

import Navbar from "../components/layouts/Navbar";
import Landing from "../components/layouts/Landing";
import Joinus from "../components/layouts/Joinus";
import Profitrewards from "../components/layouts/Profitrewards";
import Howitworks from "../components/layouts/Howitworks";
import Whatsinside from "../components/layouts/Whatsinside";
import FAQs from "../components/layouts/Faqs";
import Contactus from "../components/layouts/Contactus";
import Footer from "../components/layouts/Footer";

const Dashboard = () => {
  // const howitworksref = useRef();
  // const benefitsref = useRef();
  // const faqsref = useRef();

  // const handlescrollhiw = () => {
  //   howitworksref.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="font-Avenir">
      <Navbar />
      <Landing />
      <Joinus />
      <Profitrewards />
      <Howitworks />
      <Whatsinside />
      <FAQs />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Dashboard;
