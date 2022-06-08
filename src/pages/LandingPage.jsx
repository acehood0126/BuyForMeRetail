import React, { useRef } from "react";

import Navbar from "../components/layouts/Navbar";
import Landing from "../components/layouts/Landing";
import Joinus from "../components/layouts/Joinus";
import Profitrewards from "../components/layouts/Profitrewards";
import Howitworks from "../components/layouts/Howitworks";
import Whatsinside from "../components/layouts/Whatsinside";
import FAQs from "../components/layouts/Faqs";
import Contactus from "../components/layouts/Contactus";
import Footer from "../components/layouts/Footer";

const LandingPage = () => {
  //const refs = useRef([]);
  const howitworksref = useRef(null);
  // const benefitsref = useRef();
  // const faqsref = useRef();

  const handlescrollhiw = () => {
    howitworksref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-Avenir bg-specwhite">
      <Navbar ref={howitworksref} onhiwClick={handlescrollhiw} />
      <Landing />
      <Joinus />
      <Profitrewards />
      <Howitworks ref={howitworksref} onhiwClick={handlescrollhiw} />
      <Whatsinside />
      <FAQs />
      <Contactus />
      <Footer />
    </div>
  );
};

export default LandingPage;
