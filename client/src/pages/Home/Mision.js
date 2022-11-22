import React from "react";

const Mision = () => {
  return (
    <div className="flex items-center lg:justify-between justify-center flex-col lg:flex-row gap-10">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 md:justify-center mx-auto flex items-center md:mb-0 mb-10 lg:gap-0 gap-5">
        <img className="" alt="hero" src="/images/work.svg" />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mb-5">
          <h1 className="lg:text-5xl lg:text-left text-center text-3xl font-bold text-gray-900">
            About Next<span className="text-red-600">Bid</span>
          </h1>
        </div>
        <div className="lg:text-left text-center">
          <p className="text-sm text-gray-400  mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            non omnis quo quasi rem distinctio culpa similique explicabo, est
            pariatur esse mollitia. Esse doloribus voluptas adipisci velit, quia
            sint.
          </p>
          <p className="text-sm text-gray-400 mt-2 lg:block hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            non omnis quo quasi rem distinctio culpa similique explicabo, est
            pariatur esse mollitia. Esse doloribus voluptas adipisci velit, quia
            sint.
          </p>

          <button className="inline-flex text-white bg-red-600 py-2.5 px-6 rounded text-sm mt-5">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mision;
