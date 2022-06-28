// import { Link } from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import Dashboard from "./Dashboard";
import Deals from "./Deals";
import Shipments from "./Shipments";
import FAQpage from "./FAQs";
import Contactuspage from "./Contactus";
import Whatsnew from "./Whatsnew";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
// import { useState } from "react";

const Template = ({ children }) => {
  var loadPage;
  var pageName;
  var linkUrl;
  var userName = "Arata Suzuki";
  var currentTab = 0;
  // const [currentTab, setcurrentTab] = useState(0);
  const { signIn, isAuthenticated, errMsg, removeErrorMsg } = useAuth();

  console.log("isAuthenticated");
  console.log(isAuthenticated);
  // useEffect(()=>{
    var pageType = "dashboard";
  if (pageType === "dashboard") {
    // setcurrentTab(0);
    currentTab = 0;
    pageName = "Dashboard";
    linkUrl = "/dashboard";
    loadPage = <Dashboard userName={userName} />;
  } else if (pageType === "deals") {
    // setcurrentTab(1);
    currentTab = 1;
    pageName = "Deals";
    linkUrl = "/deals";
    loadPage = <Deals />;
  } else if (pageType === "shipments") {
    // setcurrentTab(2);
    currentTab = 2;
    pageName = "Shipments";
    linkUrl = "/shipments";
    loadPage = <Shipments />;
  } else if (pageType === "faqs") {
    // setcurrentTab(3);
    currentTab = 3;
    pageName = "FAQs";
    linkUrl = "/faqs";
    loadPage = <FAQpage />;
  } else if (pageType === "contactus") {
    // setcurrentTab(4);
    currentTab = 4;
    pageName = "Contact Us";
    linkUrl = "/contactus";
    loadPage = <Contactuspage />;
  } else if (pageType === "whatsnew") {
    // setcurrentTab(5);
    currentTab = 5;
    pageName = "What's new?";
    linkUrl = "/whatsnew";
    loadPage = <Whatsnew />;
  }
  // },[]);

  return (
    <div className="w-full min-h-screen grid lg:grid-cols-[200px_auto] md:grid-cols-[60px_auto] grid-cols-[0px_auto]">
      <div className="w-full h-full relative">
        <Sidebar current={currentTab} />
      </div>
      <div className="w-full relative">
        <Header
          className="w-full"
          pageName={pageName}
          userName={userName}
          linkUrl={linkUrl}
        />
        {children}
        <Outlet/>
      </div>
    </div>
  );
};

export default Template;
