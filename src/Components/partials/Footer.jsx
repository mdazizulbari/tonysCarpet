import siteLogo from "../../../public/images/siteLogo.svg";
import React from "react";

const Footer = () => {
  return (
    <div className="py-20 flex flex-col items-center">
      <img
        src={siteLogo}
        alt=""
        className="w-full max-h-[700px] object-cover"
      />
      <div className="flex flex-col gap-6">
        <a
          href="mailto:archondesgroup@gmail.com"
          className="px-20 text-2xl text-white text-center font-semibold"
        >
          archondesgroup@gmail.com
        </a>
        <h1 className="text-sm text-white text-center">
          © 2024 TONYS.CARPET All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
