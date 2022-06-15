import { Link } from "react-router-dom";
import { BiRefresh } from "react-icons/bi";

const BtnRefresh = ({ title, linkUrl }) => {
  return (
    <div>
      <div className="flex items-center" >
        <p>{title}</p>
        <Link to={linkUrl} className="flex items-center ml-[5px]">
          <BiRefresh className="h-[20px] w-[20px] text-gray-500 hover:text-blue-500"/>
        </Link>
      </div>
    </div>
  );
};

export default BtnRefresh;
