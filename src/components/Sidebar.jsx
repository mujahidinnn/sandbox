import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <nav className="flex flex-col gap-5 text-xl w-[30vw] p-20">
        <NavLink
          to={"/profile-saya"}
          className="text-black"
          style={{
            color: pathname === "/profile-saya" ? "#f7911a" : "black",
          }}
        >
          Profile Saya
        </NavLink>
        <NavLink
          to={"/profile-saya/wisata-saya"}
          className="text-black"
          style={{
            color:
              pathname === "/profile-saya/wisata-saya" ||
              pathname === "/profile-saya/wisata-saya/tambah-wisata"
                ? "#f7911a"
                : "black",
          }}
        >
          Wisata Saya
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
