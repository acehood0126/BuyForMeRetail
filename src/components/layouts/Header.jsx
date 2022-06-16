import { Link } from "react-router-dom";
import { GoThreeBars, GoChevronDown } from "react-icons/go";
import { BiRefresh } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

// /import logonew from "../../assets/img/logo-new.svg";

const Header = ({ pageName, userName, linkUrl }) => {
  const data = { currentBalance: "10.00" };
  return (
    <div className="bg-white w-full h-[50px] z-10 top-0 transition ease-linear">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center">
          <GoThreeBars className="mx-[10px] h-[30px] w-[30px] lg:hidden block hover:text-blue-400 text-lightblue" />
          <div>
            <p className="lg:ml-[20px]">{pageName}</p>
          </div>
          <Link to={linkUrl}>
            <BiRefresh className="ml-[5px] h-[20px] w-[20px] text-gray-500 hover:text-blue-400" />
          </Link>
        </div>
        <div className="flex items-center h-full justify-end ">
          <div className="flex w-[150px] p-[5px] rounded-full bg-gray-200">
            <BsCoin className="pl-[10px] w-[30px] h-[30px] font-bold text-yellow-400" />
            <div className="ml-[10px]">
              <h1 className="font-bold text-[12px] text-lightblue ">
                Lifetime Payment
              </h1>
              <p className="text-lightgreen font-bold text-[14px] leading-[14px]">
                $.{data.currentBalance}
              </p>
            </div>
          </div>
          <Link className="hover:text-blue-400 text-lightblue" to="/">
            <div className="sm:block hidden">
              <div className="flex items-center w-[150px] pl-[15px] ">
                <div>
                  <p>{userName}</p>
                </div>
                <div>
                  <GoChevronDown />
                </div>
              </div>
            </div>
            <div className="sm:hidden block ">
              <FaUserCircle className="w-[30px] h-[30px] m-[10px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
