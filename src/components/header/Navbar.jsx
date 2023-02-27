import React, { useState } from "react";
import LogoSandBox from "../../assets/logo sandbox 2.png";
import FormLogin from "./FormLogin";
import { Link } from "react-router-dom";

const NavbarAuthenticated = ({ setIsLogin, isLogin }) => {
  const [loginPopup, setLoginPopup] = useState(false);
  return (
    <>
      <div className="bg-white w-full flex justify-between px-28 py-2 shadow">
        <div>
          <Link to="/" className="cursor-default">
            <img src={LogoSandBox} alt="SandBox" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to="/"
            className="bg-orange-500 text-white text-base font-semibold rounded-full px-4 py-2
          "
            onClick={() => setLoginPopup(true)}
          >
            Login
          </Link>
        </div>
      </div>
      {loginPopup ? (
        <FormLogin
          setLoginPopup={setLoginPopup}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
      ) : null}
    </>
  );
};

export default NavbarAuthenticated;
