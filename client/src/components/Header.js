import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.authReducers);

  return (
    <header>
      <div className="py-1 bg-gray-900">
        <div className="container flex items-center justify-between">
          <h2 className="text-sm text-gray-200">Welcome to NextBid</h2>

          <div className="flex items-center gap-5">
            <FaFacebookF color="white" />
            <FaTwitter color="white" />
            <FaLinkedinIn color="white" />
          </div>
        </div>
      </div>
      <div className="py-5 bg-white shadow-sm">
        <div className="container flex items-center justify-between">
          <div className="logo">
            <Link to="/" className=" text-xl flex items-center">
              <TbBrandNextjs size={32} />
              ext<span className="text-orange-600">Bid</span>
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
      </div>
    </header>
  );
};

export default Header;
