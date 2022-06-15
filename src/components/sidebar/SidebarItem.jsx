import React from "react";
// import { FaHome } from "react-icons/fa";
// import { FaQuestionCircle } from "react-icons/fa";

const SidebarItem = ({text,icon,url}) =>{
  return (
    <div className="flex w-full h-[35px]">
      <div className="flex pl-[23px] pt-[8px] " >
        <icon/><h2>{text}</h2>
      </div>
      <div className="">

      </div>
    </div>
  );
};

export default SidebarItem;