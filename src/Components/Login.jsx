import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Login = () => {
  return (
    <>
      <div className="max-w-80 grid gap-5">
        <h1 className="text-5xl font-bold text-white">Login</h1>
        <p className="font-semibold">
          Don't have an account?{" "}
          <a className="text-cyan-200 font-semibold cursor-pointer">
            Register Here
          </a>
        </p>
        <form action="" className="space-y-6">
          <label className="block">
            <input
              type="email"
              className="w-80 block py-1 px-1 text-lg text-white bg-inherit border-b-2 focus:ring-0 focus:bg-inherit focus:border-cyan-500 outline-none"
              placeholder="Email Address"
            />
          </label>
          <label className="block">
            <input
              type="password"
              className="w-80 block py-1 px-1 text-lg text-white bg-inherit border-b-2 focus:ring-0 focus:bg-inherit focus:border-cyan-500 outline-none"
              placeholder="Password"
            />
          </label>
          <button class="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold  rounded-full py-2">
            Login
          </button>
        </form>
        <div className="text-dull-white border-t font-semibold border-white-light pt-4 space-y-4 text-sm">
          <p>
            Forgot password?{" "}
            <a className="text-cyan-200  cursor-pointer">Click Here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
