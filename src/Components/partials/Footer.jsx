import React from "react";
import siteLogo from "../../../public/images/siteLogo.svg";

const Footer = () => {
  return (
    <div className="py-20 flex flex-col items-center">
      <img src={siteLogo} alt="" className="w-4/5" />
      <div className="flex flex-col gap-6">
        <h1 className="px-20 text-2xl text-white text-center font-semibold">
          archondesgroup @gmail.com
        </h1>
        <h1 className="text-sm text-white text-center">
          © 2024 TONYS.CARPET All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
