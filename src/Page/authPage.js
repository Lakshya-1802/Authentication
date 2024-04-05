import React, { useState } from "react";
import LoginImage from "../Assets/Images/login_page.png";
import Login from "./Login";
import Register from "./Register";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const AuthPage = () => {
  const [method, setMethod] = useState("login");

  const changeMethod = () => {
    setMethod(method === "login" ? "register" : "login");
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-50 mx-1  grid grid-cols-1 items-center gap-10 p-5 rounded-2xl ">
          <div className="max-w-80 grid gap-5">
            {method === "register" ? (
              <>
                <h1 className="text-5xl font-bold text-center text-white">
                  Register
                </h1>
                <p className="font-semibold">
                  Already Have an Account?{" "}
                  <a
                    onClick={changeMethod}
                    className="text-cyan-200 hover:text-cyan-400  font-semibold hover:font-bold cursor-pointer"
                  >
                    Login Here
                  </a>
                </p>
                <Register />
              </>
            ) : (
              <>
                <h1 className="text-5xl font-bold text-center text-white">
                  Login
                </h1>
                <p className="font-semibold">
                  Don't have an account?{" "}
                  <a
                    onClick={changeMethod}
                    className="text-cyan-200  hover:text-cyan-400  font-semibold hover:font-bold cursor-pointer"
                  >
                    Register Here
                  </a>
                </p>
                <Login />
              </>
            )}
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

export default AuthPage;
