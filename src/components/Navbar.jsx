import { useState } from "react";
import React from "react";
import { logo, close, menu } from "../assets"
import {  navLinks} from "../assets/constants";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="logo image" className="w-[124px] h-[32px]"/>
        <ul className="list-none sm:flex hidden justify-end items-center gap-2 flex-1">
            {navLinks.map((nav, index)=>(
              <li
              key={nav.id}
               className={`font-poppins font-normal cursor-pointer text-[16px] ${ active === nav.title ? "text-white": "text-gray-400"} ${index === navLinks.length - 1 ? "mr-0": "mr-10"}`} onClick={()=> setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
            }
        </ul>

        {/* Mobile Menu  */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="" 
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle?"hidden":"flex"} p-6 bg-black-gradient absolute right-0 top-20 mx-4 my-2 min-w-[140px]  rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-start gap-2 flex-1">
            {navLinks.map((nav, index)=>(
              <li
              key={nav.id}
               className={`font-poppins font-normal cursor-pointer text-[16px] ${ active === nav.title ? "text-white": "text-gray-400"} ${index === navLinks.length - 1 ? "mr-0": "mr-10"}`} onClick={()=> setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
            }
        </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;