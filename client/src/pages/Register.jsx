import React, { useState } from "react";
// import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logonew from "../assets/img/logo-new.svg";
import { setAlert } from "../actions/alert";
import { register } from '../actions/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    email: "",
    password: "",
    confirm: "",
    phoneNum: "",
    address1: "",
    address2: "",
    city: "",
    county: "",
    state: "",
    zipCode: "",
  });

  const {
    fullName,
    displayName,
    email,
    password,
    confirm,
    phoneNum,
    address1,
    address2,
    city,
    county,
    state,
    zipCode,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    register({
      fullName,
      displayName,
      email,
      password,
      phoneNum,
      address1,
      address2,
      city,
      county,
      state,
      zipCode,
    });
  };

  // if (isAuthenticated) {
  //   return <Navigate to="/dashboard" />;
  // }
  return (
    <div className="relative w-full h-full">
      <Link to="/" className="absolute mt-[30px] ml-[30px]">
        <img src={logonew} alt="" />
      </Link>
      <div className="w-full flex bg-specwhite justify-center items-center h-full text-lightblue">
        <div className="md:w-2/3 w-3/4 my-[100px] bg-specwhite rounded-[20px] drop-shadow-threeDbox px-[50px]">
          <div className="w-full text-center text-[32px] mt-[20px] mb-[10px] font-bold text-darkblue">
            Sign Up
          </div>
          <div className="w-full mb-[20px] flex justify-center">
            <p className="text-[16px] mr-2">Create an account with</p>
            <p className="text-[16px] text-[#2aac8a]">BuyForRetail.</p>
          </div>

          <form onSubmit={onSubmit} className="p-8 pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[70px]">
              <div className="mb-6">
                <label htmlFor="displayName" className="mb-3 block">
                  Display Name *
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={displayName}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full h-[40px]"
                  placeholder="Alexis"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="fullName" className="mb-3 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full h-[40px]"
                  placeholder="Alexis Tyler"
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
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full h-[40px]"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirm" className="mb-3 block">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirm"
                  name="confirm"
                  value={confirm}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full h-[40px]"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="mb-3 block">
                  Email address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full h-[40px]"
                  placeholder="name@address.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phoneNum" className="mb-3 block">
                  Phone Number *
                </label>
                <input
                  type="text"
                  id="phoneNum"
                  name="phoneNum"
                  value={phoneNum}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full h-[40px]"
                  placeholder=""
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="address1" className="mb-3 block">
                  Address1 *
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={address1}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full h-[40px]"
                  placeholder="Address1"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="address2" className="mb-3 block">
                  Address2 *
                </label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  value={address2}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full  h-[40px]"
                  placeholder="Address2"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="county" className="mb-3 block">
                  County *
                </label>
                <input
                  type="text"
                  id="county"
                  name="county"
                  value={county}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full  h-[40px]"
                  placeholder="county"
                />
                
              </div>
              <div className="mb-6">
                <label htmlFor="zipCode" className="mb-3 block">
                  Zip Code *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={zipCode}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full  h-[40px]"
                  placeholder="Zip Code"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="city" className="mb-3 block">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full  h-[40px]"
                  placeholder="Houston"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="state" className="mb-3 block">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={state}
                  onChange={onChange}
                  className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full  h-[40px]"
                  placeholder=""
                />
              </div>
            </div>
            <div className=" flex justify-center">
              <input
                type="submit"
                
                className=" text-center py-[10px] px-12 transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] text-white text-lg focus:outline-none w-full text-[14px]"
                value="Register"/>
                

              
            </div>

            <div className="w-full flex justify-center mt-6 h-[60px] px-[50px]">
              <button className="ml-[80px] transition ease-linear h-[60px] w-[60px] bg-specwhite drop-shadow-threeDbox hover:drop-shadow-threeDboxmiddle text-[#385899] rounded-full  text-lg focus:outline-none flex justify-center items-center">
                <FaFacebookF className="w-[20px] h-[20px]" />
              </button>
              <button className="mx-[40px] transition ease-linear h-[60px] w-[60px] bg-specwhite drop-shadow-threeDbox hover:drop-shadow-threeDboxmiddle text-[#1bb1e4] rounded-full text-lg focus:outline-none flex justify-center items-center">
                <FaTwitter className="w-[20px] h-[20px]" />
              </button>
              <button className="mr-[80px] transition ease-linear h-[60px] w-[60px] bg-specwhite drop-shadow-threeDbox hover:drop-shadow-threeDboxmiddle rounded-full text-lg focus:outline-none flex justify-center items-center">
                <FcGoogle className="w-[20px] h-[20px]" />
              </button>
            </div>
          </form>
          <div className="w-full  mb-[20px] flex justify-center">
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
