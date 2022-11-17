import React from "react";

const Mision = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="w-full lg:w-1/2">
        <img className="" alt="hero" src="/images/work.svg" />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to Next<span className="text-red-600">Bid</span>
          </h1>
        </div>
        <div>
          <h1 className="text-base text-gray-900 font-bold uppercase">
            Our Mission
          </h1>
          <p className="text-sm text-gray-400 pl-10 mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            non omnis quo quasi rem distinctio culpa similique explicabo, est
            pariatur esse mollitia. Esse doloribus voluptas adipisci velit, quia
            sint.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-base text-gray-900 font-bold uppercase">
            Our Vission
          </h1>
          <p className="text-sm text-gray-400 pl-10 mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            non omnis quo quasi rem distinctio culpa similique explicabo, est
            pariatur esse mollitia. Esse doloribus voluptas adipisci velit, quia
            sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mision;
