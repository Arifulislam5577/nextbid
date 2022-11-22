import React from "react";

import { ImUpload } from "react-icons/im";
const Profile = () => {
  return (
    <form className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="mb-2 col-span-2">
        <label htmlFor="name" className="mb-1 text-sm text-gray-600 block">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className=" w-full px-3 py-4 focus:outline-none text-sm text-gray-600 bg-gray-300 rounded placeholder:text-xs"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="mb-2 col-span-2">
        <label htmlFor="name" className="mb-1 text-sm text-gray-600 block">
          Your Email
        </label>
        <input
          type="email"
          className=" w-full px-3 py-4 focus:outline-none text-sm text-gray-600 bg-gray-300 rounded placeholder:text-xs"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="mb-2 col-span-2">
        <label htmlFor="name" className="mb-1 text-sm text-gray-600 block">
          Upload Profile Picture
        </label>

        <div className="flex justify-center items-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col justify-center items-center w-full  bg-gray-300 rounded cursor-pointer "
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
  );
};

export default Profile;
