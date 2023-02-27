import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProfileSayaForm from "../components/profile/ProfileSayaForm";
import Sidebar from "../components/Sidebar";
import Missing from "./Missing";
import TambahWisata from "./TambahWisata";
import UbahWisata from "./UbahWisata";
import WisataSaya from "./WisataSaya";

const ProfileSaya = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("refresh") && !localStorage.getItem("access")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex w-full">
      <Sidebar />
      <Routes>
        <Route path="" element={<ProfileSayaForm />} />
        <Route path="wisata-saya" element={<WisataSaya />} />
        <Route path="wisata-saya/tambah-wisata" element={<TambahWisata />} />
        <Route path="wisata-saya/ubah-wisata" element={<UbahWisata />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
};

export default ProfileSaya;
