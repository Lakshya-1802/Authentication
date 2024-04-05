import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <>
      

      <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-50 mx-1  grid grid-cols-1 items-center gap-10 p-5 rounded-2xl ">
          <div className="max-w-80 grid gap-5">
           
                <h1 className="text-5xl font-bold text-center text-white">
                  Login
                </h1>
                <p className="font-semibold">
                  Don't have an account?{" "}
                  <NavLink
                    to="/register"
                    className="text-cyan-200  hover:text-cyan-400  font-semibold hover:font-bold cursor-pointer"
                  >
                    Register Here
                  </NavLink>
                </p>
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
              
            <p className="text-center text-white font-semibold text-2xl">OR</p>
            <div className="flex justify-center space-x-4">
              <button>
                <FcGoogle className=" rounded-full hover:size-7" size={32} />
              </button>
              <button>
                <FaGithub className=" rounded-full hover:size-7" size={32} />
              </button>
              <button>
                <FaLinkedinIn
                  className=" rounded-sm hover:size-7"
                  size={32}
                  color="#0077B5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
