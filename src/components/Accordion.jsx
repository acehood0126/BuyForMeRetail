import React, { useState, useRef } from "react";

const Accordion = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };
  return (
    <div
      onClick={HandleOpening}
      className="bg-white border-[1px] rounded-[8px] border-lightblue/20 mb-[12px] hover:drop-shadow-xl transition duration-300 ease-out hover:ease-in"
    >
      <div className="px-[28px] py-[20px] flex justify-between text-lightblue rounded-[8px] border-b-[1px]">
        <h4 className="font-bold">{title}</h4>
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="overflow-hidden transition-all duration-200 rounded-b-[8px] px-[28px]"
      >
        <p className="text-[14px] py-[20px]">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
