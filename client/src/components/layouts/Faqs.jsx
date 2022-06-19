/* eslint-disable no-sequences */
import { Link } from "react-router-dom";
import Accordion from "../Accordion";
import faqsideimg from "../../assets/img/faq-image.svg";

const FAQs = () => {
  const data = [
    {
      title: "1. Is there a way I can archive shipments?",
      content:
        "You can archive old shipments by clicking on the check box next to  shipment and the clicking archive. Archiving will not change the  status of the tracking number, but simply move it to the Archived  tab and out of the way. You can also attach a handy note that is  only visible to you.",
    },
    {
      title: "2. Can I choose which deal alerts I get?",
      content:
        "Yes you can! You can select which deals you’ll get notifications for in your settings. You can choose which emails are important to you by checking the boxes for the retailer and deal types you prefer. Please note that this only applies to deal alerts and you will still receive all other important notifications from us.",
    },
    {
      title: "3. How is Two-Step Verification (2SV)?",
      content:
        "Two-Step Verification adds an additional security layer to your account. After enabling it, you will sign in using your existing password, and a code you receive on your authentication app. You’ll receive a confirmation email and a popup letting you know that 2SV is enabled. Two-Step Verification will also be required to make any changes to your sensitive profile information.",
    },
    {
      title: "4. Do you have a drop-off location?",
      content:
        "At this time, we do not have drop off locations. Packages dropped off at our addresses can not be accepted.",
    },
    {
      title:
        "5. If I want to ship items from home but the payout price is scheduled to decrease before I can, what amount will I be paid",
      content:
        "When we change the payout price of a deal, we will monitor submitted tracking numbers for movement. If tracking numbers are submitted before the deadline but do not show any movement for two days, they will be paid out the lower price on the items received. Do not attempt to submit tracking numbers and ship your packages days later, they will not be processed at the higher price.",
    },
  ];

  return (
    <div
      id="FAQsSection"
      className="w-full px-[15px] py-[45px] relative flex justify-center text-lightblue bg-specwhite"
    >
      <div className="w-[1140px] px-[15px]">
        {/* Header */}
        <div className="w-full mb-[30px] grid grid-cols-1 justify-items-center">
          <p className="uppercase text-[12px] text-lightgreen font-bold mb-[15px]">
            learn more
          </p>
          <h1 className="text-[34px] font-bold mb-[8px]">
            Frequently Asked Questions
          </h1>
          <p className="text-[16px] px-[128px]">
            If your question isn’t included here, please{" "}
            <span>
              <Link to="/" className="text-[#2e9bff] hover:text-[#0056b3]">
                contact us!
              </Link>
            </span>{" "}
            We'd be happy to answer it.
          </p>
        </div>
        {/* Work Steps */}
        <div className="w-full mb-[21px]">
          <div className="flex items-center text-[14px]">
            <div className="mr-[7px]">
              <button className="h-[30px] px-[12px] border-[1px] border-lightblue/30 rounded-full">
                All
              </button>
            </div>
            <div className="mr-[7px]">
              <button className="h-[30px] px-[12px] border-[1px] border-lightblue/30 rounded-full">
                Getting Started
              </button>
            </div>
          </div>
        </div>
        {/* Accordion */}
        <div className="w-full">
          {data.map((item) => (
            <Accordion
              key={(item.title, item.content)}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="w-full grid grid-cols-1 justify-items-center mt-[30px]">
          <Link to="/">
            <button className="transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] text-white text-[14px] font-bold px-[12px] py-[6px] w-[185px] h-[40px]">
              View More
            </button>
          </Link>
        </div>
        <img
          src={faqsideimg}
          className="absolute right-[8px] bottom-[3px] w-[200px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default FAQs;
