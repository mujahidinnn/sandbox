import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logout from "./Logout";

import LogoSandBox from "../../assets/logo sandbox 2.png";
import Arrow from "../../assets/arrow.svg";
import User from "../../assets/user.png";

const NavbarAuthenticated = ({ setIsLogin }) => {
  const [listDown, setListDown] = useState(false);

  let listpopup = null;
  if (listDown) {
    listpopup = (
      <div
        className="absolute z-50 bg-transparent w-full h-screen"
        onClick={() => setListDown(!listDown)}
      >
        <div className="animate-dropdown flex flex-col gap-2 bg-white shadow w-max px-5 py-3 rounded-xl absolute top-[6vh] right-[4vw] divide-y">
          <Link
            to="/profile-saya"
            className="hover:text-orange-500 transition duration-150"
          >
            Profile saya
          </Link>
          <Link
            to="/ubah-password"
            className="hover:text-orange-500 transition duration-150"
          >
            Ubah password
          </Link>
          <Logout setIsLogin={setIsLogin} />
        </div>
      </div>
    );
  }

  const [full_name, setFull_name] = useState("");
  const [photo, setPhoto] = useState(null);

  const getDataUser = () => {
    const token_access = localStorage.getItem("access");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/user/user/me/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token_access)}`,
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setFull_name(response.data.data.full_name);
        setPhoto(response.data.data.photo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      {listpopup}
      {}
      <div className="bg-white w-full flex justify-between px-28 py-2 shadow">
        <div>
          <Link to="/" className="cursor-default">
            <img src={LogoSandBox} alt="SandBox" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={photo === null ? User : photo}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <p className="font-semibold">{full_name}</p>
          <img
            src={Arrow}
            alt=""
            className="rotate-90 cursor-pointer"
            onClick={() => setListDown(!listDown)}
          />
        </div>
      </div>
    </>
  );
};

export default NavbarAuthenticated;
