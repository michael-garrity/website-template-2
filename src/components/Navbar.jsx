import React, { useState } from 'react'

import logo from "../assets/logo.svg"
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"
import { navLinks } from "../constants/navLinks.js"

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 text-primary justify-between items-center navbar">
      <a href="#" className="z-50"><img src={logo} alt="logo" className="w-[124px] h-[32px]" /></a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-montserrat z-50 font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "underline" : null
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="z-50 sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="cursor-pointer w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black text-secondary absolute top-20 right-2 mx-4 my-2 min-w-[140px] z-50 sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-montserrat font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "underline" : null
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar