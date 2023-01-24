import React from "react";
import Doted from "../../components/Doted";

const CallToAction = () => {
  return (
    <div className="my-10 bg-gray-900 py-10 md:px-0 px-5 rounded relative">
      <Doted color={"white"} />
      <div className="flex flex-col text-center w-full">
        <h1 className=" text-2xl font-bold mb-4 text-white">
          Our helpline is always open for you
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-white mb-3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep.
        </p>
      </div>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label for="full-name" className="leading-7 text-sm text-white">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative flex-grow w-full">
          <label for="email" className="leading-7 text-sm text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded text-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
