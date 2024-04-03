import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="max-w-80 grid gap-5">
        <h1 className="text-5xl font-bold text-white">Register</h1>
        <p className="font-semibold">
          Already Have an Account?{" "}
          <a className="text-cyan-200 font-semibold cursor-pointer">
            Login Here
          </a>
        </p>
        <form action="" className="space-y-6">
          <label className="block relative">
            <input
              type="email"
              className="w-80 block py-1 px-1 text-lg text-white bg-inherit border-b-2 focus:ring-0 focus:bg-inherit focus:border-cyan-500 outline-none ring-0"
              placeholder="Email Address"
            />
          </label>
          <label className="block relative">
            <input
              type="text"
              className="w-80 block py-1 px-1 text-lg text-white bg-inherit border-b-2 focus:ring-0 focus:bg-inherit focus:border-cyan-500 outline-none ring-0"
              placeholder="Full Name"
            />
          </label>
          <label className="block relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-80 block py-1 px-1 text-lg text-white bg-inherit border-b-2 focus:ring-0 focus:bg-inherit focus:border-cyan-500 outline-none pr-10 ring-0"
              placeholder="Password"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash size={20} color="white" />
              ) : (
                <FaEye size={20} color="white" />
              )}
            </button>
          </label>
          <button className="text-lg bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2 ">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
