import React from "react";
import "../index.css";
import logo from "../../images/logo36.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-slate-200 text-base text-center mx-2 cursor-pointer">
            Home
          </p>
          <p className="text-slate-200 text-base text-center mx-2 cursor-pointer">
            Admin Login
          </p>
          <p className="text-slate-200 text-base text-center mx-2 cursor-pointer">
            User Login
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-slate-200 text-lg text-center">Vote wisely</p>
        <p className="text-slate-200 text-sm text-center font-medium mt-2">
          nsa.engineers21@gmail.com
        </p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-slate-200 text-sm text-left text-xs">
          Team No Sleep
        </p>
        <p className="text-slate-200 text-sm text-right text-xs">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
