import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.authReducers);

  return (
    <header className="py-8">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link
            to="/"
            className="flex font-bold items-center justify-end uppercase text-xl"
          >
            <TbBrandNextjs size={32} color="orange" />
            extBID
          </Link>
        </div>

        <nav>
          <ul className="flex items-center content-center	justify-center gap-5">
            {user ? (
              <>
                <li className="">
                  <NavLink to="/dashboard">
                    <img
                      src={user?.userImg}
                      alt="user"
                      className="h-11 w-11 rounded-full p-1 border"
                    />
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="text-sm text-gray-600 flex items-center gap-1"
                >
                  <FaRegUser />
                  Sign In/Sign Up
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
