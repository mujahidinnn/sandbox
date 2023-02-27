import React, { useState } from "react";
import SearchIcon from "../../assets/search.svg";
import FilterIcon from "../../assets/filter.svg";

import Cards from "./Cards";

const Search = () => {
  const [cari, setCari] = useState("");
  const handleSelect = (e) => {
    const value = e.target.value;
    setLimit(parseInt(value));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex gap-5 w-[70%]">
        <div className="w-full flex gap-2 items-center bg-white rounded-full pr-2 pl-3 mb-5">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Cari potensi"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            className="bg-transparent w-full outline-none py-3"
          />
          <div className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full cursor-pointer">
            Cari
          </div>
        </div>
        <div className="flex gap-2 items-center w-full bg-white rounded-full px-4 mb-5">
          <img src={FilterIcon} alt="" />

          <select
            onChange={handleSelect}
            className="w-full bg-transparent outline-none cursor-pointer"
          >
            <option>Pilih Kategori</option>
            <option value="kategoriA">kategoriA</option>
            <option value="kategoriB">kategoriB</option>
            <option value="kategoriC">kategoriC</option>
            <option value="kategoriD">kategoriD</option>
          </select>
        </div>
      </div>
      <Cards search={cari.toLowerCase()} />
    </div>
  );
};

export default Search;
