import React, { useEffect, useState } from "react";
import axios from "axios";
import formData from "form-data";

// Icon & Image
import User from "../../assets/user.png";
import CameraIcon from "../../assets/camera.svg";

const ProfileSayaForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [full_name, setFull_name] = useState("");
  const [photo, setPhoto] = useState(null);
  const [handphone, setHandphone] = useState("");
  const [address, setAddress] = useState("");

  const [image, setImage] = useState(null);

  const fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const getDataUser = () => {
    const token_access = JSON.parse(localStorage.getItem("access"));
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api-entrytest.sandboxindonesia.id/api/user/user/me/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_access}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setEmail(response.data.data.email);
        setUsername(response.data.data.username);
        setFull_name(response.data.data.full_name);
        setAddress(response.data.data.address);
        setPhoto(response.data.data.photo);
        setHandphone(response.data.data.handphone);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getDataUser();
  }, []);

  // HandleUpdate
  const handleUpdate = async () => {
    const token_access = JSON.parse(window.localStorage.getItem("access"));
    let FormData = formData;
    let data = new FormData();

    if (photo) {
      data.append("photo", photo);
    }
    data.append("email", email);
    data.append("username", username);
    data.append("full_name", full_name);
    data.append("handphone", handphone);
    data.append("address", address);

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `https://api-entrytest.sandboxindonesia.id/api/user/user/me/`,
      headers: {
        "Content-Type": "multipart/formdata",
        Authorization: `Bearer ${token_access}`,
      },

      data: data,
    };
    await axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setFull_name(full_name);
        setEmail(email);
        setAddress(address);
        setHandphone(handphone);
        setPhoto(photo);
        setUsername(username);
      })
      .catch(function (error) {
        console.log(error);
        console.log("errorr");
      });
  };

  return (
    <div className="w-[70%] p-10">
      <div className="flex items-center justify-arround gap-8">
        <div className="relative">
          <img
            src={image ? image : photo === null ? User : photo}
            alt=""
            className="rounded-full border-4 shadow-lg border-white w-[200px] h-[200px]"
          />
          <img
            src={CameraIcon}
            title="No file choosen"
            alt=""
            className="absolute bottom-[2%] right-[10%] z-20 shadow-lg bg-orange-400 hover:bg-orange-500 transition duration-150 border-[2px] border-white rounded-full px-[7px] py-[10px] cursor-pointer"
            onClick={() => document.querySelector(".change-photo").click()}
          />

          <input
            type="file"
            hidden
            className="change-photo"
            onChange={fileChangeHandler}
          />
        </div>
        <div className="flex flex-col justify-center gap-2 w-[30vw]">
          <p className="text-3xl font-semibold">{full_name}</p>
          <p>{address}</p>
        </div>
        <div>
          <button
            className="bg-orange-400 hover:bg-orange-500 text-white transition duration-150 font-semibold px-5 py-3 rounded-full ml-0 shadow-md"
            onClick={handleUpdate}
          >
            Simpan
          </button>
        </div>
      </div>

      <div className="w-[50vw] mt-10">
        <form className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">Nama</p>
            <input
              type="text"
              spellCheck="false"
              value={full_name}
              onChange={(e) => setFull_name(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
            />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <input
              type="email"
              spellCheck="false"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
            />
          </div>
          <div>
            <p className="font-semibold">Alamat</p>
            <textarea
              name="alamat"
              id="alamat"
              cols="30"
              rows="4"
              spellCheck="false"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF] resize-none"
            ></textarea>
          </div>
          <div>
            <p className="font-semibold">No Handphone</p>
            <input
              type="tel"
              spellCheck="false"
              value={handphone}
              onChange={(e) => setHandphone(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border-2 border-[#E9ECEF]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSayaForm;
