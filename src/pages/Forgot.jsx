import { Link } from "react-router-dom";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaGooglePlusG } from "react-icons/fa";

const Forgot = () => {
  return (
    <div className="w-full bg-[#ecf0f3] flex justify-center items-center h-screen text-lightblue">
      <div className="w-[500px] bg-[#ecf0f3] rounded-[20px] drop-shadow-threeDbox">
        <div className="w-full text-center text-[32px] mt-[20px] mb-[10px] font-bold text-darkblue">
          Forgot Password
        </div>
        <div className="w-full mb-[20px] flex justify-center">
          <p className="text-[16px] mr-2">Enter your email to get a password reset link.</p>
        </div>

        <form action="#" className="p-8 pt-0">
          <div className="mb-6">
            <label htmlFor="email" className="mb-3 block text-gray-700">
              Email address*
            </label>
            <input
              type="email"
              id="email"
              className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
              placeholder="name@address.com"
              required
            />
          </div>
          
          <button
            type="submit"
            className="py-3 px-12 transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] mr-5 text-white text-lg focus:outline-none w-full text-[14px]"
          >
            Reset Password
          </button>
          
        </form>
        <div className="w-full mb-[20px] flex justify-center">
          <p className="text-[16px] mr-2">Remember your password?</p>
          <Link to="/login">
            <p className="text-[16px] text-[#2aac8a]">Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
