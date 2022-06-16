import React from "react";
import { Link } from "react-router-dom";
import logonew from "../../assets/img/logo-new.svg";
import favIcon from "../../assets/img/favicon.svg";
// import {
//   FaHome,
//   FaRegClipboard,
//   FaMoneyCheckAlt,
//   FaDiceD6,
//   FaCommentAlt,
//   FaUncharted,
// } from "react-icons/fa";
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-icon"
            >
              <path
                d="M1 6.83333L8.5 1L16 6.83333V16C16 16.442 15.8244 16.8659 15.5118 17.1785C15.1993 17.4911 14.7754 17.6667 14.3333 17.6667H2.66667C2.22464 17.6667 1.80072 17.4911 1.48816 17.1785C1.17559 16.8659 1 16.442 1 16V6.83333Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M5.99878 17.6673V9.33398H10.9988V17.6673"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
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
          <div className="pl-[20px] py-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="sidebar-icon-active"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-icon"
            >
              <path
                d="M13.75 7.83281L6.25 3.50781"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M17.5 13.3329V6.66626C17.4997 6.37399 17.4225 6.08693 17.2763 5.83389C17.13 5.58086 16.9198 5.37073 16.6667 5.22459L10.8333 1.89126C10.58 1.74498 10.2926 1.66797 10 1.66797C9.70744 1.66797 9.42003 1.74498 9.16667 1.89126L3.33333 5.22459C3.08022 5.37073 2.86998 5.58086 2.72372 5.83389C2.57745 6.08693 2.5003 6.37399 2.5 6.66626V13.3329C2.5003 13.6252 2.57745 13.9122 2.72372 14.1653C2.86998 14.4183 3.08022 14.6285 3.33333 14.7746L9.16667 18.1079C9.42003 18.2542 9.70744 18.3312 10 18.3312C10.2926 18.3312 10.58 18.2542 10.8333 18.1079L16.6667 14.7746C16.9198 14.6285 17.13 14.4183 17.2763 14.1653C17.4225 13.9122 17.4997 13.6252 17.5 13.3329Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M2.72501 5.80078L10 10.0091L17.275 5.80078"
                stroke="#6E84A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M10 18.4V10"
                stroke="#6E84A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-icon"
            >
              <path
                d="M11.8 2.80078H13.6C14.0774 2.80078 14.5352 2.99042 14.8728 3.32799C15.2104 3.66555 15.4 4.12339 15.4 4.60078V17.2008C15.4 17.6782 15.2104 18.136 14.8728 18.4736C14.5352 18.8111 14.0774 19.0008 13.6 19.0008H2.8C2.32261 19.0008 1.86477 18.8111 1.52721 18.4736C1.18964 18.136 1 17.6782 1 17.2008V4.60078C1 4.12339 1.18964 3.66555 1.52721 3.32799C1.86477 2.99042 2.32261 2.80078 2.8 2.80078H4.6"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M10.9007 1H5.50074C5.00368 1 4.60074 1.40294 4.60074 1.9V3.7C4.60074 4.19706 5.00368 4.6 5.50074 4.6H10.9007C11.3978 4.6 11.8007 4.19706 11.8007 3.7V1.9C11.8007 1.40294 11.3978 1 10.9007 1Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-icon"
            >
              <g id="question_answer_24px">
                <path
                  id="icon/action/question_answer_24px"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3333 1.66602H2.49999C2.04166 1.66602 1.66666 2.04102 1.66666 2.49935V14.166L4.99999 10.8327H13.3333C13.7917 10.8327 14.1667 10.4577 14.1667 9.99935V2.49935C14.1667 2.04102 13.7917 1.66602 13.3333 1.66602ZM12.5 3.33268V9.16602H4.30832L3.81666 9.65768L3.33332 10.141V3.33268H12.5ZM15.8333 4.99935H17.5C17.9583 4.99935 18.3333 5.37435 18.3333 5.83268V18.3327L15 14.9994H5.83332C5.37499 14.9994 4.99999 14.6244 4.99999 14.166V12.4994H15.8333V4.99935Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-icon-active"
            >
              <path
                d="M18.375 13.9982V6.99821C18.3747 6.69132 18.2937 6.38991 18.1401 6.12422C17.9865 5.85853 17.7658 5.6379 17.5 5.48446L11.375 1.98446C11.109 1.83086 10.8072 1.75 10.5 1.75C10.1928 1.75 9.89103 1.83086 9.625 1.98446L3.5 5.48446C3.23423 5.6379 3.01348 5.85853 2.8599 6.12422C2.70632 6.38991 2.62531 6.69132 2.625 6.99821V13.9982C2.62531 14.3051 2.70632 14.6065 2.8599 14.8722C3.01348 15.1379 3.23423 15.3585 3.5 15.512L9.625 19.012C9.89103 19.1656 10.1928 19.2464 10.5 19.2464C10.8072 19.2464 11.109 19.1656 11.375 19.012L17.5 15.512C17.7658 15.3585 17.9865 15.1379 18.1401 14.8722C18.2937 14.6065 18.3747 14.3051 18.375 13.9982Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M6.5625 3.68359L10.5 5.95859L14.4375 3.68359"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M6.5625 17.3163V12.775L2.625 10.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M18.375 10.5L14.4375 12.775V17.3163"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M2.86133 6.08984L10.5001 10.5086L18.1388 6.08984"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M10.5 19.32V10.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
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
