import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-[55px] border-b-[1px] border-gray-200 drop-shadow-[0_0_15px_rgba(0,0,0,0.12)] z-10 top-0 bg-[#f9fafc]">
      <div className="w-full h-full mx-auto flex flex-wrap items-center justify-between mt-0">
        <div className="w-full h-[34px] mx-[25px] flex flex-wrap items-center justify-between">
          <Link to="/" className="">
            <img src="/static/img/logo-new.svg" className="h-[18px]" alt="" />
          </Link>

          <div
            className="lg:w-auto lg:overflow-hidden w-0 h-full lg:content-center lg:items-center hidden lg:block lg:mt-0 z-20 text-[#12263f] text-[14px]"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-center items-center h-full">
              <li className="navlink navlink_selected">
                <Link
                  to="/"
                  className="inline-block hover:text-[#3bbd96] no-underline py-[8px] px-[24px] rounded-[5px] mr-[5px] h-[34px] leading-[18px]"
                >
                  How it Works
                </Link>
              </li>
              <li className="navlink">
                <Link
                  to="/"
                  className="inline-block hover:text-[#3bbd96] no-underline py-[8px] px-[24px] rounded-[5px] mr-[5px] h-[34px] leading-[18px]"
                >
                  Benefits
                </Link>
              </li>
              <li className="navlink">
                <Link
                  to="/"
                  className="inline-block hover:text-[#3bbd96] no-underline py-[8px] px-[24px] rounded-[5px] mr-[5px] h-[34px] leading-[18px]"
                >
                  FAQs
                </Link>
              </li>
              <li className="navlink">
                <Link
                  to="/"
                  className="inline-block hover:text-[#3bbd96] no-underline py-[8px] px-[24px] rounded-[5px] mr-[5px] h-[34px] leading-[18px]"
                >
                  Sign In
                </Link>
              </li>
              <li className="navlink">
                <Link
                  to="/"
                  className="inline-block no-underline text-[#3bbd96] border-[1px] border-[#3bbd96] hover:bg-[#3bbd96] hover:text-white py-[8px] leading-[18px] px-[24px] rounded-[5px] mr-[5px] h-[34px] font-bold"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
