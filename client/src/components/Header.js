import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="py-5">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className=" font-bold text-3xl tracking-wider ">
            Next<span className="text-red-600">Bid</span>
          </Link>
        </div>

        <nav>
          <ul className="flex items-center content-center	justify-center gap-5">
            <li className="hidden">
              <NavLink to="/profile" className="text-gray-600 hover:text-black">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="bg-red-600 py-2.5 px-6 text-sm rounded text-white"
              >
                Join Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
