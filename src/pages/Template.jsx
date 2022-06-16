// import { Link } from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import Dashboard from "./Dashboard";
import Deals from "./Deals";
import Shipments from "./Shipments";
import FAQpage from "./FAQs";
import Contactuspage from "./Contactus";
import Whatsnew from "./Whatsnew";

const Template = ({ pageType }) => {
  var loadPage;
  var pageName;
  var linkUrl;
  var userName = "Arata Suzuki";

  if (pageType === "dashboard") {
    pageName = "Dashboard";
    linkUrl = "/dashboard";
    loadPage = <Dashboard userName={userName} />;
  } else if (pageType === "deals") {
    pageName = "Deals";
    linkUrl = "/deals";
    loadPage = <Deals />;
  } else if (pageType === "shipments") {
    pageName = "Shipments";
    linkUrl = "/shipments";
    loadPage = <Shipments />;
  } else if (pageType === "faqs") {
    pageName = "FAQs";
    linkUrl = "/faqs";
    loadPage = <FAQpage />;
  } else if (pageType === "contactus") {
    pageName = "Contact Us";
    linkUrl = "/contactus";
    loadPage = <Contactuspage />;
  } else if (pageType === "whatsnew") {
    pageName = "What's new?";
    linkUrl = "/whatsnew";
    loadPage = <Whatsnew />;
  }

  return (
    <div className="w-full min-h-screen grid lg:grid-cols-[200px_auto] md:grid-cols-[90px_auto] grid-cols-[0px_auto]">
      <div className="w-full h-full relative">
        <Sidebar />
      </div>
      <div className="w-full relative">
        <Header
          className="w-full"
          pageName={pageName}
          userName={userName}
          linkUrl={linkUrl}
        />
        {loadPage}
      </div>
    </div>
  );
};

export default Template;
