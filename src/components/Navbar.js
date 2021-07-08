import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuLink from "./MenuLink";
import logo from "../logo.svg";

function Navbar({ pageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <div className="m-0 top-0 w-full relative ">
      <nav className="flex flex-row items-center justify-between px-3 py-4 bg-green-900 max-h-30">
        <Logo />

        {menuOpen && <MenuList />}

        <HamburgerButton
          onClick={handleMenuClick}
          icon={
            menuOpen ? (
              <FaTimes className="hover:text-green-400" />
            ) : (
              <FaBars className="hover:text-green-400" />
            )
          }
        />
      </nav>
    </div>
  );
}

const Logo = () => {
  return (
    <div className="flex flex-row items-center text-white">
      <div className="flex items-center justify-center rounded-full bg-white w-14 h-14 mx-4">
        <img className="h-18 w-18" src={logo} alt="greensheep logo" />
      </div>
      <span className="text-lg font-cinzel">GreenSheep</span>
    </div>
  );
};

const MenuList = () => {
  return (
    <ul className="flex flex-col gap-4 px-4 text-white items-center list-none flex-grow pt-8 ">
      <MenuLink name="Dashboard" to="/" />
      <MenuLink name="Orders" to="/orders" />
      <MenuLink name="Members" to="/members" />
      <MenuLink name="Stock" to="/stock" />
    </ul>
  );
};

const HamburgerButton = ({ onClick, icon }) => {
  return (
    <button
      className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent flex outline-none focus:outline-none"
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default Navbar;
