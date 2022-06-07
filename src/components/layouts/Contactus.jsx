/* eslint-disable no-sequences */
import { Link } from "react-router-dom";
import fullnameicon from "../../assets/img/full-name-icon.svg";
import emailicon from "../../assets/img/email-icon.svg";
import subjecticon from "../../assets/img/subject-icon.svg";
import messageicon from "../../assets/img/message-icon.svg";

import Compoundinput from "../Compoundinput";

const Contactus = () => {
  return (
    <div className="w-full px-[60px] py-[45px] relative flex justify-center text-lightblue bg-specwhite">
      <div className="max-w-[1200px] px-[15px]">
        {/* Header */}
        <div className="w-full mb-[30px] grid grid-cols-1 justify-items-center">
          <p className="uppercase text-[12px] text-lightgreen font-bold mb-[15px]">
            get in touch
          </p>
          <h1 className="text-[34px] font-bold mb-[8px]">Contact Us</h1>
          <p className="text-[16px] px-[128px]">
            We’d love to hear from you, send us a message and we’ll get back to
            you shortly!
          </p>
        </div>
        {/* Work Steps */}
        <div className="w-full mb-[21px] text-[14px]">
          <div className="w-full grid grid-cols-1">
            <div className="w-full grid grid-cols-2 justify-items-center mb-[16px]">
              <div className="w-full h-full px-[15px]">
                <Compoundinput icon={fullnameicon} placeholder="Full name *" />
              </div>
              <div className="w-full h-full px-[15px]">
                <Compoundinput icon={emailicon} placeholder="Email *" />
              </div>
            </div>
            <div className="w-full h-[45px] px-[15px] mb-[16px]">
              <Compoundinput icon={subjecticon} placeholder="Subject *" />
            </div>
            <div className="w-full px-[15px] mb-[16px]">
              <div className="w-full relative">
                <span className="absolute h-[40px] left-0 flex items-center pl-[10px] z-10">
                  <img src={messageicon} className="w-[15px] h-[15px]" alt="" />
                </span>
                <textarea
                  className="w-full min-h-[210px] border-[1px] h-[210px] px-[30px] rounded-[4px] border-lightblue border-opacity-20 focus:outline-none focus:drop-shadow-blue transition ease-out focus:ease-in text-lightblue text-[14px]"
                  placeholder="Message *"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid justify-center mb-[10px]">
          <Link to="/register">
            <button className="transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] text-white text-[14px] font-bold px-[12px] py-[6px] w-[170px] h-[40px]">
              Send Message
            </button>
          </Link>
        </div>
        <p className="text-center  mb-[10px]">or</p>
        <div className="w-full grid justify-center">
          <p>
            You can email us directly at{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 transition ease-linear"
            >
              deals@buyformeretail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
