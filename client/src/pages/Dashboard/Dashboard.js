import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImHammer2, ImUpload } from "react-icons/im";
import { VscSignOut } from "react-icons/vsc";
import { BiStoreAlt, BiHeart } from "react-icons/bi";
const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 bg-gray-100 rounded">
              <div className="mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
                  alt=""
                  className="h-28 w-28 p-2 border border-gray-200 bg-white rounded-full mx-auto "
                />
              </div>
              <div className="my-3">
                <h1 className="text-center text-sm text-gray-600 font-bold">
                  Md Ariful Islam
                </h1>

                <ul className="text-sm text-gray-600 mt-4 flex flex-col gap-3">
                  <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer ">
                    <BsFillPersonLinesFill />
                    Profile
                  </li>
                  <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <BiStoreAlt />
                    Orders
                  </li>
                  <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <BiHeart />
                    Wishlist
                  </li>
                  <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <ImHammer2 />
                    Your Bid
                  </li>
                  <li className="flex items-center gap-2 pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <VscSignOut />
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-1 w-full">
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="mb-2 col-span-2">
                <label
                  htmlFor="name"
                  className="mb-1 text-sm text-gray-600 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className=" w-full px-3 py-4 focus:outline-none text-sm text-gray-600 bg-gray-100 placeholder:text-xs"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-2 col-span-2">
                <label
                  htmlFor="name"
                  className="mb-1 text-sm text-gray-600 block"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  className=" w-full px-3 py-4 focus:outline-none text-sm text-gray-600 bg-gray-100 placeholder:text-xs"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-2 col-span-2">
                <label
                  htmlFor="name"
                  className="mb-1 text-sm text-gray-600 block"
                >
                  Upload Profile Picture
                </label>

                <div className="flex justify-center items-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col justify-center items-center w-full  bg-gray-100 cursor-pointer "
                  >
                    <div className="flex gap-3 justify-center items-center py-5">
                      <ImUpload />
                      <p className=" text-xs text-gray-600 ">
                        Click to upload or drag and drop
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>

                <div className="mt-5">
                  <button className="py-2.5 text-sm px-3 text-center text-white capitalize bg-red-600 rounded">
                    update now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
