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
import { useState } from "react";
// import SidebarItem from "../sidebar/SidebarItem";

const Sidebar = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-full transition ease-linear lg:w-[200px] sm:w-[70px] md:block hidden text-[14px] bg-[#06163a] z-10">
      <div className="h-[50px]">
        <Link
          to="/dashboard"
          className="absolute lg:mt-[20px] lg:ml-[23px] mt-[10px] ml-[18px]"
        >
          <img className="lg:block hidden" src={logonew} alt="" />
          <img className="lg:hidden block" src={favIcon} alt="" />
        </Link>
      </div>
      <Link
        to="/dashboard"
        onClick={() => {
          setCurrent(0);
        }}
      >
        <div
          className={`transition ease-linear lg:w-full w-0 h-[40px] my-[10px] grid grid-cols-[50px_auto] items-center border-l-[2px] text-white ${
            current === 0
              ? "border-orange"
              : "border-[#06163a] hover:border-lightorange"
          }`}
        >
          <div className="pl-[20px] py-[8px]">
            <FaHome className="w-[15px] h-[15px]" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center">Dashboard</p>
          </div>
        </div>
      </Link>
      <Link
        to="/deals"
        onClick={() => {
          setCurrent(1);
        }}
      >
        <div
          className={`transition ease-linear lg:w-full w-0 h-[40px] my-[10px] grid grid-cols-[50px_auto] items-center border-l-[2px] text-white ${
            current === 1
              ? "border-orange"
              : "border-[#06163a] hover:border-lightorange"
          }`}
        >
          <div className="pl-[20px] py-[8px] ">
            <FaMoneyCheckAlt className="w-[15px] h-[15px]" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center">Deals</p>
          </div>
        </div>
      </Link>
      <Link
        to="/shipments"
        onClick={() => {
          setCurrent(2);
        }}
      >
        <div
          className={`transition ease-linear lg:w-full w-0 h-[40px] my-[10px] grid grid-cols-[50px_auto] items-center border-l-[2px] text-white ${
            current === 2
              ? "border-orange"
              : "border-[#06163a] hover:border-lightorange"
          }`}
        >
          <div className="pl-[20px] py-[8px] ">
            <FaUncharted className="w-[15px] h-[15px]" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center ">Shipments</p>
          </div>
        </div>
      </Link>
      <Link
        to="/faqs"
        onClick={() => {
          setCurrent(3);
        }}
      >
        <div
          className={`transition ease-linear lg:w-full w-0 h-[40px] my-[10px] grid grid-cols-[50px_auto] items-center border-l-[2px] text-white ${
            current === 3
              ? "border-orange"
              : "border-[#06163a] hover:border-lightorange"
          }`}
        >
          <div className="pl-[20px] py-[8px] ">
            <FaRegClipboard className="w-[15px] h-[15px]" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center ">FAQs</p>
          </div>
        </div>
      </Link>
      <Link
        to="/contactus"
        onClick={() => {
          setCurrent(4);
        }}
      >
        <div
          className={`transition ease-linear lg:w-full w-0 h-[40px] my-[10px] grid grid-cols-[50px_auto] items-center border-l-[2px] text-white ${
            current === 4
              ? "border-orange"
              : "border-[#06163a] hover:border-lightorange"
          }`}
        >
          <div className="pl-[20px] py-[8px] ">
            <FaCommentAlt className="w-[15px] h-[15px]" />
          </div>
          <div className="md:hidden lg:block">
            <p className="h-full flex items-center ">Contact Us</p>
          </div>
        </div>
      </Link>
      <Link
        to="/whatsnew"
        onClick={() => {
          setCurrent(5);
        }}
      >
        <div
          className={`transition ease-linear lg:w-full w-0 h-[40px] my-[10px] grid grid-cols-[50px_auto] items-center border-l-[2px] text-white ${
            current === 5
              ? "border-orange"
              : "border-[#06163a] hover:border-lightorange"
          }`}
        >
          <div className="pl-[20px] py-[8px] ">
            <FaDiceD6 className="w-[15px] h-[15px]" />
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
