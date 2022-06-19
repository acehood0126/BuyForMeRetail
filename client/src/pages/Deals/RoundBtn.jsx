// import { Link } from "react-router-dom";

const RoundBtn = ({ title, linkUrl, state }) => {
  return (
    <div className="flex justify-end">
      <div
        className={`ml-[10px] flex items-center justify-center h-[40px] w-[120px] rounded  text-white ${
          state === 0 ? "bg-green-300" : "bg-green-400"
        } hover:bg-green-500 `}
      >
        <p>{title}</p>
      </div>
    </div>
  );
};

export default RoundBtn;
