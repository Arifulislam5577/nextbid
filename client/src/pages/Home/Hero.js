import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-10">
      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-5xl">
            Get your products
            <div className="relative inline-flex">
              <span className="absolute inset-x-0 bottom-0 border-b-[20px] border-orange-600"></span>
              <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-5xl">
                before sold.
              </h1>
            </div>
          </h1>

          <p className="my-8 text-base text-black ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>

          <div className=" sm:flex sm:items-center ">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-6 py-3 text-sm rounded text-white transition-all duration-200 bg-orange-600 hover:bg-orange-600 focus:bg-orange-600"
            >
              Start exploring
            </Link>
          </div>
        </div>

        <div>
          <img
            className="w-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
