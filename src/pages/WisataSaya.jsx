import React from "react";
import SearchWisata from "../components/wisata/SearchWisata";
import TabelWisataSaya from "../components/wisata/TabelWisataSaya";

const WisataSaya = () => {
  return (
    <div className="mt-20 w-[50vw]">
      <SearchWisata />
      <TabelWisataSaya />
    </div>
  );
};

export default WisataSaya;
