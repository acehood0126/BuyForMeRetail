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
          Comparison Site
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
          to="/admin/companies"
          className={`flex items-center my-[20px] lg:pl-[40px] pl-[16px] w-full border-l-[3px] ${
            location.pathname === "/admin/companies"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <MdOutlineBusinessCenter className="w-[18px] h-[18px] mr-[15px]" />
          <p className="lg:block hidden">Companies</p>
        </Link>
        <Link
          to="/admin/products"
          className={`flex items-center my-[20px] lg:pl-[40px] pl-[16px] w-full border-l-[3px] ${
            location.pathname === "/admin/products"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <FiBox className="w-[18px] h-[18px] mr-[15px]" />
          <p className="lg:block hidden">Products</p>
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
        <Link
          to="/admin/tracking"
          className={`flex items-center my-[20px] lg:pl-[40px] pl-[16px] w-full border-l-[3px] ${
            location.pathname === "/admin/tracking"
              ? "border-darkblue"
              : "border-transparent"
          } hover:border-darkblue transition ease-linear duration-300 py-[5px]`}
        >
          <IoFootstepsOutline className="w-[18px] h-[18px] mr-[15px]" />
          <p className="lg:block hidden">Tracking</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
