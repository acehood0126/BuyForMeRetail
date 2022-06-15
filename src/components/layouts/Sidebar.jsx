import React from "react";
import { Link } from "react-router-dom";
import logonew from "../../assets/img/logo-new.svg";
import favIcon from "../../assets/img/favicon.svg";
import {
  FaHome,
  FaRegClipboard,
  FaMoneyCheckAlt,
  FaDiceD6,
  FaCommentAlt,
  FaUncharted,
} from "react-icons/fa";
import SidebarItem from "../sidebar/SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-full h-full transition ease-linear lg:w-[250px] sm:w-[70px] md:block hidden  border-[1px] border-gray-200 ">
      <div className="h-[50px]">
        <div></div>
        <Link
          to="/"
          className="absolute lg:mt-[16px] lg:ml-[23px] mt-[10px] ml-[18px]"
        >
          <img className="lg:block hidden" src={logonew} alt="" />
          <img className="lg:hidden block" src={favIcon} alt="" />
        </Link>
      </div>
      <Link to="/dashboard">
        <div className="lg:w-full w-0 h-[50px] grid grid-cols-[70px_auto] hover:bg-blue-50">
          <div className="pl-[20px] py-[8px] ">
            <FaHome className="w-[30px] h-[30px] text-gray-600" />
          </div>
          <div className="md:hidden lg:block ">
            <p className="h-full flex items-center">Dashboard</p>
          </div>
        </div>
      </Link>
      <Link to="/deals">
        <div className="lg:w-full w-0 h-[50px] grid grid-cols-[70px_auto] hover:bg-blue-50">
          <div className="pl-[20px] py-[8px] ">
            <FaMoneyCheckAlt className="w-[30px] h-[30px] text-gray-600" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center ">Deals</p>
          </div>
        </div>
      </Link>
      <Link to="/shipments">
        <div className="lg:w-full w-0 h-[50px] grid grid-cols-[70px_auto] hover:bg-blue-50">
          <div className="pl-[20px] py-[8px] ">
            <FaUncharted className="w-[30px] h-[30px] text-gray-600" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center ">Shipments</p>
          </div>
        </div>
      </Link>

      <div className="m-[15px] border-[1px]"></div>
      <Link to="/">
        <div className="lg:w-full w-0 h-[50px] grid grid-cols-[70px_auto] hover:bg-blue-50">
          <div className="pl-[20px] py-[8px] ">
            <FaRegClipboard className="w-[30px] h-[30px] text-gray-600" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center ">FAQs</p>
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="lg:w-full w-0 h-[50px] grid grid-cols-[70px_auto] hover:bg-blue-50">
          <div className="pl-[20px] py-[8px] ">
            <FaCommentAlt className="w-[30px] h-[30px] text-gray-600" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center ">Contact Us</p>
          </div>
        </div>
      </Link>
      <Link to="/">
        <div className="lg:w-full w-0 h-[50px] grid grid-cols-[70px_auto] hover:bg-blue-50">
          <div className="pl-[20px] py-[8px] ">
            <FaDiceD6 className="w-[30px] h-[30px] text-gray-600" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center ">What's New</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
