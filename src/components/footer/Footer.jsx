import React from "react";

import LogoSandBox from "../../assets/logo sandbox 1.png";

const Footer = () => {
  return (
    <div className="bg-[#202a20] w-full h-32 pt-6 pl-20 flex flex-col gap-2 mt-8">
      <img src={LogoSandBox} alt="SandBox" className="w-max" />
      <div className="h-[2px] w-[90%] bg-white/30" />
    </div>
  );
};

export default Footer;
