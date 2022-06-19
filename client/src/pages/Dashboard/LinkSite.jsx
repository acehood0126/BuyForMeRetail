import { Link } from "react-router-dom";
import { FaCopy } from "react-icons/fa";
const LinkSite = ({ linkSite, linkAddress, prodName }) => {
  return (
    <div className="mt-[10px] text-[14px]">
      <div className="siteName ">
        <h6 className="leading-[22.5px] ">{linkSite}</h6>
      </div>
      <div className="flex">
        <span className="mr-10px text-purple-400">{linkAddress}</span>
        <FaCopy className="ml-[10px]" />
      </div>
      <div className="prodName"></div>
      <Link to="/">
        <p className="text-blue-500">{prodName}</p>
      </Link>
    </div>
  );
};

export default LinkSite;
