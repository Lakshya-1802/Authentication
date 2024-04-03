import React from "react";
import LoginImage from "../Assets/Images/login_page.png";
import Login from "../Components/Login";
import Register from "../Components/Register";
const AuthPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center h-screen">
        <div className=" bg-black bg-opacity-50 grid grid-cols-2 items-center gap-10 p-3 rounded-2xl">
          <div>
            <img src={LoginImage} alt="" />
            {/* <img src="assets/teamwork.svg" alt="" className="absolute top-36"/> */}
          </div>

          <div className="max-w-80 grid gap-3">
            {/* <Login /> */}
            <Register />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
