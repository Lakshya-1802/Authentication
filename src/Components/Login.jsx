import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Login = () => {
  return (
    <>
      <div className=" ">
        <form action="" className="space-y-6">
          <label className="block relative">
            <input
              type="email"
              className="w-80 block py-1 px-1 text-lg text-white bg-inherit border-b-2 focus:ring-0 focus:bg-inherit focus:border-cyan-500 outline-none"
              placeholder="Email Address"
            />
          </label>
          <label className="block relative">
            <input
              type="password"
              className="w-80 block py-1 px-1 text-lg text-white bg-inherit border-b-2 focus:ring-0 focus:bg-inherit focus:border-cyan-500 outline-none"
              placeholder="Password"
            />
          </label>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-300 w-80 font-semibold  rounded-full py-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400">
            Login
          </button>
        </form>
        <div className="text-dull-white mt-2 font-semibold pt-3 text-sm">
          <p>
            Forgot password?{" "}
            <a className="text-cyan-200 hover:text-cyan-400  font-semibold hover:font-bold  cursor-pointer">Click Here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
