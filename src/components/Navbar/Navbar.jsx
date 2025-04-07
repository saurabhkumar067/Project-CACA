import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const [toggle, setToggle] = useState(false)

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/aboutus",
      submenu: [
        "Overview",
        "Team",
        "Advisors",
        "Partners & Supporters",
        "Directors",
      ],
    },
    {
      name: "Project CACA",
      path: "/projectcaca",
      submenu: [
        "Project Proposal",
        "Open Letters",
        "Testimonials",
        "Project Profile",
        "Bibliography",
        "Project Chronology",
      ],
    },
    {
      name: "Instruments",
      path: "/instruments",
      submenu: [
        "Children Safety Workbooks",
        "Training/Webinar",
        "Assessment for Challenges",
        "School Child Protection Policy",
        "Research/Surveys",
        "Litigation & Psychosocial Support",
        "School Psychology Quiz",
      ],
    },
    {
      name: "Resources",
      path: "/resources",
      submenu: [
        "Children Picture Books",
        "Character Canvas",
        "Supplementary Worksheets",
        "Teacher’s Manual",
        "Parent – Teacher Booklets",
        "Support – Staff Booklets",
        "Posters",
        "Videos",
        "Audios",
      ],
    },
    { name: "Contribute/Internship", path: "/contribute-internship" },
  ];

  const handleNavbar = ()=>{
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
    }

    console.log("clicked");
    
  }
  return (
    <div>
      <header className="bg-[#4A4747] flex justify-between items-center px-28 py-2 text-white md:px-10 xl:px-24 2xl:px-28 min-[320px]:hidden md:flex">
        <ul className="flex gap-3 xl:text-base md:text-xs ">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <GrTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaSquareInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaGooglePlusG />
          </li>
        </ul>
        <h1 className="font-semibold tracking-wide xl:text-sm md:text-xs 2xl:text-base">
          Project CACA, Since 2016
        </h1>
        <div>
          <a href="" className="mr-8 hover:text-[#c5b7b7] duration-30-sm md:text-xs 2xl:text-base">
            Important Links
          </a>
          <a href="" className="hover:text-[#c5b7b7] duration-300 xl:text-sm md:text-xs 2xl:text-base">
            Contact Us
          </a>
        </div>
      </header>
    
      <nav className="flex justify-between items-center px-28 pt-2 md:px-8 xl:px-20 2xl:px-28 min-[320px]:px-2 min-[375px]:px-4 min-[425px]:py-3">

        {/* <div className="flex justify-between border-2 w-full items-center "> */}
        <div className="logo">
          <img
            src="https://projectcaca.org/wp-content/uploads/2021/06/New-logo-project-caca-Cop.png"
            alt="Project CACA"
            className="w-[70%] md:w-[50%] xl:w-[75%] min-[320px]:w-[45%] sm:w-[60%]"
          />
        </div>
      <div onClick={handleNavbar} className="cursor-pointer text-2xl md:hidden  ">
          {toggle?<RxCross2/>:<HiOutlineBars3CenterLeft/>}
      </div>
        
        {/* </div> */}

        <ul className={`flex justify-between items-center gap-8 text-[#6a6a6a] ubuntu-light xl:text-base md:text-sm md:gap-4 xl:gap-6 2xl:gap-8 2xl:text-lg ${toggle?"flex":"hidden"} md:flex`}>
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                className={(e) =>
                  e.isActive
                    ? "text-[#251919]"
                    : "hover:text-[#251919] duration-300"
                }
              >
                {item.name}
              </NavLink>

              {dropdown === item.name && item.submenu && (
                <ul className="absolute top-6 pt-3 left-0 w-48 bg-[#ffffffda] backdrop-blur-3xl text-sm shadow-lg text-black rounded-md z-50">
                  {item.submenu.map((subItem) => {
                    const subItemPath = `${item.path}/${subItem
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`;

                    return (
                      <li key={subItem}>
                        <NavLink
                          to={subItemPath}
                          className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          {subItem}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

{/*
      display: block;
    position: absolute;
    top: 40%;
    z-index: 100;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    height: 62%;
    width: 100%;
    align-items: center;
    padding: 10px 15px;
    */}