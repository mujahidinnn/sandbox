import axios from "axios";
import formData from "form-data";
import React, { useEffect, useState } from "react";

// Icons
import CloseIcon from "../../assets/close-square.svg";
import EyeSlashIcon from "../../assets/eye-slash.svg";
import EyeIcon from "../../assets/eye.svg";
import KeyIcon from "../../assets/key.svg";
import UserIcon from "../../assets/user-octagon.svg";

const FormLogin = ({ setLoginPopup, setIsLogin, isLogin }) => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logging, setLogging] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusPassword, setOnFocusPassword] = useState(false);

  const response401 =
    "Tidak ada akun aktif yang ditemukan dengan kredensial yang diberikan*";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogging(true);
    let FormData = formData;
    let data = new FormData();
    data.append("email", email);
    data.append("password", password);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/auth/login/",
      headers: {},
      data: data,
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        localStorage.setItem("refresh", JSON.stringify(response.data.refresh));
        localStorage.setItem("access", JSON.stringify(response.data.access));
        setLoginPopup(false);
        setIsLogin(!isLogin);
        setLogging(false);
      })
      .catch(function (error) {
        // console.log(error.response.status);
        setErrorMessage(error.response.data.detail);
        setLogging(false);
      });
  };

  return (
    <div className="flex justify-center fixed inset-0 bg-[rgba(0,0,0,0.7)] w-full h-screen z-50">
      <div className="flex flex-col bg-white shadow p-5 rounded-xl w-[500px] h-[380px] mt-[30vh] ">
        <form className="flex flex-col gap-8 items-center">
          <div className="flex justify-between gap-48">
            <p></p>
            <p className="text-lg font-semibold">Login</p>
            <img
              src={CloseIcon}
              alt=""
              className="float-right w-5 cursor-pointer"
              onClick={() => setLoginPopup(false)}
            />
          </div>
          <div className="flex-col w-full">
            <div className=" text-sm font-semibold">Username</div>
            <div
              className={`border-2 ${
                errorMessage ? "border-red-400" : "border-[#8080808c]"
              } flex gap-2 items-center bg-gray-100 rounded-lg p-2`}
              style={{
                borderColor: onFocusEmail
                  ? "orange"
                  : errorMessage
                  ? "red"
                  : "#8080808c",
              }}
            >
              <img src={UserIcon} alt="user" />
              <input
                id="email"
                type="text"
                onFocus={() => setOnFocusEmail(true)}
                onBlur={() => setOnFocusEmail(false)}
                spellCheck="false"
                name="email"
                className="bg-transparent outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errorMessage ? (
              <p className="text-xs text-red-600">{errorMessage}</p>
            ) : null}
          </div>

          <div className="flex-col w-full">
            <p className="text-sm font-semibold">Password</p>
            <div
              className={`border-2 ${
                errorMessage ? "border-red-400" : "border-[#8080808c]"
              } flex gap-2 items-center bg-gray-100 rounded-lg p-2 justify-between`}
              style={{
                borderColor: onFocusPassword
                  ? "orange"
                  : errorMessage
                  ? "red"
                  : "#8080808c",
              }}
            >
              <div className="flex gap-3">
                <img src={KeyIcon} alt="key" className="w-5" />
                <input
                  id="password"
                  type={visible ? "text" : "password"}
                  onFocus={() => setOnFocusPassword(true)}
                  onBlur={() => setOnFocusPassword(false)}
                  name="password"
                  className="bg-transparent outline-none"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="eye">
                {visible ? (
                  <img
                    src={EyeSlashIcon}
                    alt="hide"
                    onClick={() => setVisible(!visible)}
                    className="cursor-pointer"
                  />
                ) : (
                  <img
                    src={EyeIcon}
                    alt="show"
                    onClick={() => setVisible(!visible)}
                    className="cursor-pointer"
                  />
                )}
              </p>
            </div>
            {errorMessage ? (
              <p className="text-xs text-red-600">{errorMessage}</p>
            ) : null}
          </div>

          <button
            className="bg-orange-400 hover:bg-orange-500 transition duration-150  text-white font-semibold rounded-full py-2 w-[60%] cursor-pointer"
            type="submit"
            onClick={handleSubmit}
          >
            {logging ? "Logging . . ." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
