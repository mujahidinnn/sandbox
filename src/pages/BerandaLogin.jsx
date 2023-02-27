import React from "react";

import Search from "../components/home/Search";

const BerandaLogin = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <p className="text-4xl font-semibold mt-36">Wisata</p>
      <div className="h-[3px] w-16 bg-orange-400 my-4" />
      <p className="mb-12 text-lg">
        Temukan potensi menarik tentang Desa Toapaya Utara disini
      </p>
      <Search />
    </div>
  );
};

export default BerandaLogin;
