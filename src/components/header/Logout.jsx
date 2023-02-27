import axios from "axios";
import formData from "form-data";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();

    let FormData = formData;
    let data = new FormData();
    data.append("refresh", JSON.parse(localStorage.getItem("refresh")));

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/auth/logout/",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setIsLogin(false);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="hover:text-orange-500 transition duration-150 w-full text-left"
      >
        Keluar
      </button>
    </div>
  );
};

export default Logout;
