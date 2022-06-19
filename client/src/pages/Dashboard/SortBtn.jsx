import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SortBtn = ({ title, state }) => {
  return (
    <div className="flex text-[12px] justify-end items-center ">
      <div className="text-center">{title}</div>
      <div className="text-[10px]">
        <FaChevronUp
          className={`ml-[5px] ${
            state === "1" ? "text-gray-700" : "text-gray-400"
          }`}
        />
        <FaChevronDown
          className={`ml-[5px] ${
            state === "2" ? "text-gray-700" : "text-gray-400"
          }`}
        />
      </div>
    </div>
  );
};

export default SortBtn;
