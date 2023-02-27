import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Navbar from "../components/header/Navbar";
import NavbarAuthenticated from "../components/header/NavbarAuthenticated";
import Footer from "../components/footer/Footer";

// Pages
import BerandaLogin from "../pages/BerandaLogin";
import DetailWisata from "../pages/DetailWisata";
import ProfileSaya from "../pages/ProfileSaya";
import UbahPassword from "../pages/UbahPassword";
import Missing from "../pages/Missing";

const Routers = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access") && localStorage.getItem("refresh")) {
      setIsLogin(!isLogin);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLogin ? (
          <NavbarAuthenticated setIsLogin={setIsLogin} isLogin={isLogin} />
        ) : (
          <Navbar setIsLogin={setIsLogin} isLogin={isLogin} />
        )}

        <Routes>
          <Route path="/" element={<BerandaLogin />} />
          <Route path="/profile-saya/*" element={<ProfileSaya />} />
          <Route path="/ubah-password" element={<UbahPassword />} />
          <Route path="/detail-wisata" element={<DetailWisata />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routers;
