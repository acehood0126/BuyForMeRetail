import Navbar from "../components/layouts/Navbar";
import Banner from "../components/layouts/Banner";
import Joinus from "../components/layouts/Joinus";
import Profitrewards from "../components/layouts/Profitrewards";
import Howitworks from "../components/layouts/Howitworks";
import Whatsinside from "../components/layouts/Whatsinside";
import FAQs from "../components/layouts/Faqs";
import Contactus from "../components/layouts/Contactus";
import Footer from "../components/layouts/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
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

export default LandingPage;
