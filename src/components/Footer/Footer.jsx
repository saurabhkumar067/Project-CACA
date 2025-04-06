import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGooglePlusSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="pt-4 pb-7 mt-14 bg-[#F5F6FD] flex justify-center items-center flex-col gap-3 min-[320px]:mt-4">
        <div className="logo">
          <img
            src="https://projectcaca.org/wp-content/uploads/2021/06/New-logo-project-caca-Cop.png"
            alt="Project CACA"
            className=""
          />
        </div>

        <ul className="flex justify-center items-center gap-10 text-2xl min-[320px]:text-lg min-[320px]:gap-4">
          <li className="cursor-pointer duration-300 hover:text-[#817575]">
            <FaSquareFacebook />
          </li>
          <li className="cursor-pointer duration-300 hover:text-[#817575]">
            <FaSquareTwitter />
          </li>
          <li className="cursor-pointer duration-300 hover:text-[#817575]">
            <IoLogoLinkedin />
          </li>
          <li className="cursor-pointer duration-300 hover:text-[#817575]">
            <FaSquareInstagram />
          </li>
          <li className="cursor-pointer duration-300 hover:text-[#817575]">
            <IoLogoYoutube />
          </li>
          <li className="cursor-pointer duration-300 hover:text-[#817575]">
            <FaGooglePlusSquare />
          </li>
        </ul>
      </div>
      <div className="bg-[#c8cad6] text-center font-semibold  py-3 md:text-xs xl:text-sm 2xl:text-base min-[320px]:text-xs">
        @ Copyright 2024 SAF – Social Axiom Foundation, Since 2016 All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
