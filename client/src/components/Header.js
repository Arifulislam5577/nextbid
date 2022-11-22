import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.authReducers);

  return (
    <header className="py-8">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className=" font-bold text-3xl tracking-wider ">
            💎Next<span className="text-red-600">Bid</span>
          </Link>
        </div>

        <nav>
          <ul className="flex items-center content-center	justify-center gap-5">
            {user ? (
              <>
                <li className="">
                  <NavLink
                    to="/dashboard"
                    className="bg-red-600 py-2.5 px-6 text-sm rounded text-white"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="bg-red-600 py-2.5 px-6 text-sm rounded text-white"
                >
                  Join Us
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
