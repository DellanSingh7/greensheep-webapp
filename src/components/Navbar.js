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
    <div className="m-0 fixed top-0 w-full">
      <nav className="flex flex-row items-center justify-between px-3 py-4 bg-green-900">
        <div className="flex flex-row items-center text-white">
          <div className="flex items-center justify-center rounded-full bg-white w-14 h-14 mx-4">
            <img className="h-18 w-18" src={logo} alt="greensheep logo" />
          </div>
          <span className="text-lg font-cinzel">GreenSheep</span>
        </div>

        {menuOpen && (
          <ul className="flex flex-col gap-4 px-4 text-white items-center list-none flex-grow pt-8">
            <MenuLink name="Dashboard" to="/" />
            <MenuLink name="Orders" to="/orders" />
            <MenuLink name="Members" to="/members" />
            <MenuLink name="Stock" to="/stock" />
          </ul>
        )}

        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent flex outline-none focus:outline-none"
          type="button"
          onClick={handleMenuClick}
        >
          {menuOpen ? (
            <FaTimes className="hover:text-green-400" />
          ) : (
            <FaBars className="hover:text-green-400" />
          )}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
