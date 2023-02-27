import React, { useState } from "react";
import SearchIcon from "../../assets/search.svg";
import PlusIcon from "../../assets/plus2.svg";
import { Link } from "react-router-dom";

const SearchWisata = () => {
  const [cari, setCari] = useState("");
  return (
    <div className="flex gap-6 items-center justify-end">
      <div className="w-[50%] flex gap-2 items-center bg-white rounded-full pr-2 pl-3 shadow">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Cari potensi"
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          className="bg-transparent w-full outline-none py-3"
        />
        <div className="bg-orange-400 text-white font-semibold px-5 py-2 rounded-full cursor-pointer">
          Cari
        </div>
      </div>
      <Link
        to="/profile-saya/wisata-saya/tambah-wisata"
        className="flex gap-3 items-center bg-orange-400 hover:bg-orange-500 transition duration-150 rounded-full py-2 px-4 shadow"
      >
        <img src={PlusIcon} alt="" className="w-[30px]" />
        <p className="text-lg font-semibold text-white">Tambah</p>
      </Link>
    </div>
  );
};

export default SearchWisata;
