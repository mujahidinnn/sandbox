import React, { useState } from "react";
import axios from "axios";
import formData from "form-data";

import InfoIcon from "../assets/info-circle.svg";
import { Link } from "react-router-dom";

const UbahPassword = () => {
  const [old_password, setOld_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [confirm_new_password, setConfirm_new_password] = useState("");
  const [message, setMessage] = useState("");

  const changePassword = (e) => {
    e.preventDefault();
    if (new_password !== confirm_new_password) {
      setMessage("Konfirmasi password tidak cocok.");
      return false;
    }

    const token_access = JSON.parse(window.localStorage.getItem("access"));

    let FormData = formData;
    let data = new FormData();
    data.append("old_password", old_password);
    data.append("new_password", new_password);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/user/user/change-password/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_access}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setOld_password("");
        setNew_password("");
        setConfirm_new_password("");
        setMessage(response.data.data.msg);
      })
      .catch(function (error) {
        setMessage(error.response.data[0]);
      });
  };
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col gap-4 w-[70vw]">
        <p className="text-4xl font-semibold my-16">Ubah Password</p>
        {message ? (
          <div className="bg-white flex gap-3 px-3 py-1 rounded w-max shadow-sm">
            <img src={InfoIcon} alt="i" />
            <p className="text-sm">{message}</p>
          </div>
        ) : null}
        <div>
          <p className="font-semibold">Password Lama</p>
          <input
            type="text"
            value={old_password}
            onChange={(e) => setOld_password(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
          />
        </div>
        <div>
          <p className="font-semibold">Password Baru</p>
          <input
            type="text"
            value={new_password}
            onChange={(e) => setNew_password(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
          />
        </div>
        <div>
          <p className="font-semibold">Konfirmasi Password Baru</p>
          <input
            type="text"
            value={confirm_new_password}
            onChange={(e) => setConfirm_new_password(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
          />
        </div>
        <div className="flex justify-end gap-3">
          <Link
            to="/"
            className="bg-white hover:bg-orange-400 transition duration-150 border-2 border-[#E9ECEF] text-orange-400 hover:text-white rounded-full px-6 py-3"
          >
            Batal
          </Link>
          <button
            className="bg-orange-400 hover:bg-orange-500 transition duration-150 border-2 border-[#E9ECEF] text-white rounded-full px-6 py-3"
            onClick={changePassword}
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default UbahPassword;
