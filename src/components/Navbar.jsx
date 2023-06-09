import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex jutify-between items-center max-w-7x1 mx-auto">
        <Link to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Parth <span className="sm:block hidden">| Full-Stack Developer </span>
          </p>
        </Link>
        <ul className="list-non hidden sm:flex flex-row justify-end gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
              active === link.title ? "text-white" : "text-secondary"
            }
              hover:text-white text-[18px] font-medium cursor-pointer 
            ` } onClick={() => setActive(link.title)}
              >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
          ))}

      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
        src={menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer">
        </img>
</div>
    </div>

    </nav >
  )
}

export default Navbar