import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logonew from "../assets/img/logo-new.svg";

import useAuth from "../hooks/useAuth";

//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Login = () => {
  // const navigate = useNavigate();
  const {user, signIn, isAuthenticated, errMsg, removeErrorMsg } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    
  };

  useEffect(() => {
    if (errMsg !== "none") {
      if (errMsg) {
        toast.error(errMsg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
        });
        console.log(user);
      } else {
      }
      removeErrorMsg();
    }
  }, [errMsg]);

    console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="relative w-full h-full">
      <ToastContainer className="text-[12px]" />
      <Link to="/" className="absolute mt-[30px] ml-[30px]">
        <img src={logonew} alt="" />
      </Link>
      <div className="w-full bg-specwhite flex justify-center items-center h-screen text-lightblue">
        <div className="w-[500px] bg-specwhite rounded-[20px] drop-shadow-threeDbox">
          <div className="w-full text-center text-[32px] mt-[20px] mb-[10px] font-bold text-darkblue">
            Sign In
          </div>
          <div className="w-full mb-[20px] flex justify-center">
            <p className="text-[16px] mr-2">Access your account's dashboard.</p>
          </div>

        

          <form onSubmit={onSubmit} className="p-8 pt-0">
            <div className="mb-6">
              <label htmlFor="email" className="mb-3 block text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
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
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
                className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
                placeholder="password"
                required
              />
            </div>
            <div className="mb-[20px] flex justify-between">
              <div>
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label inline-block text-lightblue"
                  htmlFor="flexCheckDefault"
                >
                  Remember me
                </label>
              </div>
              <Link to="/forgot">
                <p className="text-[15px] hover:text-blue-500 hover:underline">
                  Forgot Password?
                </p>
              </Link>
            </div>
            <button
              type="submit"
              className="text-center py-[10px] px-12 transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] mr-5 text-white text-lg focus:outline-none w-full text-[14px]"
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
            <p className="text-[16px] mr-2">Don't have an account yet?</p>
            <Link to="/register">
              <p className="text-[16px] text-[#2aac8a]">Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
