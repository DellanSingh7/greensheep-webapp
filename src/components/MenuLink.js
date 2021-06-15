import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuLink({ name, to }) {
  return (
    <li className="hover:text-green-400">
      <NavLink exact to={to}>
        {name}
      </NavLink>
    </li>
  );
}
