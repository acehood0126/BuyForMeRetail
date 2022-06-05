import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-[500px]  bg-gray-100 shadow-sm rounded-md ">
        <div className="w-full text-center text-[32px] my-[10px]">Sign In</div>
        <div className="w-full mb-[20px] flex justify-center">
          <p className="text-[16px] mr-2">Access your account's dashboard.</p>
          <p className="text-[16px] text-[#2aac8a]">BuyForRetail.</p>
        </div>

        <form action="#" className="p-8 pt-0">
          <div className="mb-6">
            <label htmlFor="email" className="mb-3 block text-gray-700">
              Email address
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
            <label htmlFor="email" className="mb-3 block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
              placeholder="password"
              required
            />
          </div>
          <div className="mb-2">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="py-3 px-12 bg-teal-500 hover:bg-teal-600 mr-5 rounded-md text-white text-lg focus:outline-none w-full"
          >
            Next
          </button>
          <div className="flex w-full grid-cols-3 mt-6 h-[60px]">
            <div className="h-full bg-[#3a579d] hover:bg-[#254ba7]  rounded-l-md text-white text-lg focus:outline-none w-full flex justify-center items-center">
              <FaFacebookF className="w-[30px] h-[30px]" />
            </div>
            <div className="h-full bg-[#03a9f4] hover:bg-[#0a9adb]  text-white text-lg focus:outline-none w-full flex justify-center items-center">
              <FaTwitter className="w-[30px] h-[30px]" />
            </div>
            <div className="h-full bg-[#db2721] hover:bg-[#ca1913]  rounded-r-md text-white text-lg focus:outline-none w-full flex justify-center items-center">
              <FaGooglePlusG className="w-[45px] h-[45px]" />
            </div>
          </div>
        </form>
        <div className="w-full mb-[20px] flex justify-center">
          <p className="text-[16px] mr-2">Don't have an account yet?</p>
          <Link to="/register">
            <p className="text-[16px] text-[#2aac8a]">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
