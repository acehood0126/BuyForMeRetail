import { MdOutlineDashboard, MdOutlineBusinessCenter } from "react-icons/md";
import { FiBox, FiUsers } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { IoFootstepsOutline } from "react-icons/io5";
import logo from "../../../../assets/img/favicon.svg";

// import logo from "../../../Assets/Images/logo.png";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full border-r-[1px] border-darkblue/0 font-bold bg-transparent">
      <Link
        to="/"
        className="w-full text-[12px] mt-[30px] lg:ml-[20px] ml-[10px] flex items-center"
      >
        <img src={logo} alt="" className="w-[30px] h-[30px] mr-[10px]" />
        <p className="lg:block hidden font-extrabold text-[16px]">
          BuyForMeRetail
        </p>
      </Link>
      <div className="w-full h-full text-[12px] mt-[30px]">
        <Link
          to="/admin/dashboard"
          className={`flex items-center my-[20px] lg:pl-[40px] pl-[16px] w-full border-l-[3px] ${
            location.pathname === "/admin/dashboard"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <MdOutlineDashboard className="w-[18px] h-[18px] mr-[15px]" />
          <p className="lg:block hidden">Dashboard</p>
        </Link>
        <Link
          to="/admin/products"
          className={`flex items-center my-[20px] lg:pl-[40px] pl-[16px] w-full border-l-[3px] ${
            location.pathname === "/admin/products"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#122844"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sidebar-icon-active mr-[15px]"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          <p className="lg:block hidden">Deals</p>
        </Link>
        <Link
          to="/admin/tracking"
          className={`flex items-center my-[20px] lg:pl-[40px] pl-[16px] w-full border-l-[3px] ${
            location.pathname === "/admin/tracking"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sidebar-icon mr-[15px]"
          >
            <path
              d="M13.75 7.83281L6.25 3.50781"
              stroke="#122844"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.5 13.3329V6.66626C17.4997 6.37399 17.4225 6.08693 17.2763 5.83389C17.13 5.58086 16.9198 5.37073 16.6667 5.22459L10.8333 1.89126C10.58 1.74498 10.2926 1.66797 10 1.66797C9.70744 1.66797 9.42003 1.74498 9.16667 1.89126L3.33333 5.22459C3.08022 5.37073 2.86998 5.58086 2.72372 5.83389C2.57745 6.08693 2.5003 6.37399 2.5 6.66626V13.3329C2.5003 13.6252 2.57745 13.9122 2.72372 14.1653C2.86998 14.4183 3.08022 14.6285 3.33333 14.7746L9.16667 18.1079C9.42003 18.2542 9.70744 18.3312 10 18.3312C10.2926 18.3312 10.58 18.2542 10.8333 18.1079L16.6667 14.7746C16.9198 14.6285 17.13 14.4183 17.2763 14.1653C17.4225 13.9122 17.4997 13.6252 17.5 13.3329Z"
              stroke="#122844"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2.72501 5.80078L10 10.0091L17.275 5.80078"
              stroke="#122844"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10 18.4V10"
              stroke="#122844"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="lg:block hidden">Shipments</p>
        </Link>
        <Link
          to="/admin/users"
          className={`flex items-center my-[20px] lg:pl-[40px] pl-[16px] w-full border-l-[3px] ${
            location.pathname === "/admin/users"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <FiUsers className="w-[18px] h-[18px] mr-[15px]" />
          <p className="lg:block hidden">Users</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
