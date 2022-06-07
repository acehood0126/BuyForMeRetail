import { forwardRef } from "react";
import { Link } from "react-router-dom";
import logonew from "../../assets/img/logo-new.svg";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Navbar = forwardRef(({ onhiwClick }, ref) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  return (
    // <nav className="fixed w-full h-[55px] border-b-[1px] border-gray-200 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] z-10 top-0 bg-specwhite">
    <nav
      className={classNames(
        scrollPosition > 0
          ? "drop-shadow-md bg-white/70 backdrop-blur-sm"
          : "drop-shadow-none bg-none",
        "fixed w-full h-[55px] z-10 top-0 transition ease-linear"
      )}
    >
      <div className="w-full h-full mx-auto flex flex-wrap items-center justify-between mt-0">
        <div className="w-full h-[34px] mx-[25px] flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link to="/" className="">
            <img src={logonew} className="h-[18px]" alt="" />
          </Link>
          {/* NavMenu */}
          <div
            className="lg:w-auto lg:overflow-hidden w-0 h-full lg:content-center lg:items-center hidden lg:block lg:mt-0 z-20 text-darkblue text-[14px]"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-center items-center h-full">
              <li className="navlink navlink_selected">
                <button
                  onClick={onhiwClick}
                  className="transition ease-linear inline-block no-underline hover:bg-lightgreen hover:text-white py-[8px] leading-[18px] px-[24px] rounded-full mr-[5px] h-[34px]"
                >
                  How it Works
                </button>
              </li>
              <li className="navlink">
                <Link
                  to="/"
                  className="transition ease-linear inline-block no-underline hover:bg-lightgreen hover:text-white py-[8px] leading-[18px] px-[24px] rounded-full mr-[5px] h-[34px]"
                >
                  Benefits
                </Link>
              </li>
              <li className="navlink">
                <Link
                  to="/"
                  className="transition ease-linear inline-block no-underline hover:bg-lightgreen hover:text-white py-[8px] leading-[18px] px-[24px] rounded-full mr-[5px] h-[34px]"
                >
                  FAQs
                </Link>
              </li>
              <li className="navlink">
                <Link
                  to="/login"
                  className="transition ease-linear inline-block no-underline hover:bg-lightgreen hover:text-white py-[8px] leading-[18px] px-[24px] rounded-full mr-[5px] h-[34px]"
                >
                  Sign In
                </Link>
              </li>
              <li className="navlink">
                <Link
                  to="/register"
                  className="transition ease-linear inline-block no-underline hover:bg-lightgreen hover:text-white py-[8px] leading-[18px] px-[24px] rounded-full mr-[5px] h-[34px]"
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
});

export default Navbar;
