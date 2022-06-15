import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logonew from "../assets/img/logo-new.svg";

const Register = () => {
  return (
    <div className="relative w-full h-full">
      <Link to="/" className="absolute mt-[30px] ml-[30px]">
        <img src={logonew} alt="" />
      </Link>
      <div className="w-full flex bg-specwhite justify-center items-center h-screen text-lightblue">
        <div className="w-[500px]  bg-specwhite rounded-[20px] drop-shadow-threeDbox">
          <div className="w-full text-center text-[32px] mt-[20px] mb-[10px] font-bold text-darkblue">
            Sign Up
          </div>
          <div className="w-full mb-[20px] flex justify-center">
            <p className="text-[16px] mr-2">Create an account with</p>
            <p className="text-[16px] text-[#2aac8a]">BuyForRetail.</p>
          </div>

          <form action="#" className="p-8 pt-0">
            <div className="mb-6">
              <label htmlFor="email" className="mb-3 block">
                Email address *
              </label>
              <input
                type="email"
                id="email"
                className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
                placeholder="name@address.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="mb-3 block">
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
                placeholder="password"
                required
              />
            </div>
            <button
              type="submit"
              className="py-[10px] px-12 transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] mr-5 text-white text-lg focus:outline-none w-full text-[14px]"
            >
              Next
            </button>
            <div className="w-full flex justify-between mt-6 h-[60px] px-[50px]">
              <button className="transition ease-linear h-[60px] w-[60px] bg-specwhite drop-shadow-threeDbox hover:drop-shadow-threeDboxmiddle text-[#385899] rounded-full  text-lg focus:outline-none flex justify-center items-center">
                <FaFacebookF className="w-[20px] h-[20px]" />
              </button>
              <button className="transition ease-linear h-[60px] w-[60px] bg-specwhite drop-shadow-threeDbox hover:drop-shadow-threeDboxmiddle text-[#1bb1e4] rounded-full text-lg focus:outline-none flex justify-center items-center">
                <FaTwitter className="w-[20px] h-[20px]" />
              </button>
              <button className="transition ease-linear h-[60px] w-[60px] bg-specwhite drop-shadow-threeDbox hover:drop-shadow-threeDboxmiddle rounded-full text-lg focus:outline-none flex justify-center items-center">
                <FcGoogle className="w-[20px] h-[20px]" />
              </button>
            </div>
          </form>
          <div className="w-full mb-[20px] flex justify-center">
            <p className="text-[16px] mr-2">Already have an account?</p>
            <Link to="/login">
              <p className="text-[16px] text-[#2aac8a]">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
