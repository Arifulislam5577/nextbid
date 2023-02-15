import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="py-10">
      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 ">
        <div className="relative">
          <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-5xl">
            Get your products
            <div className="inline-flex mt-2">
              <span class="bg-gradient-to-r from-slate-900 to-orange-600 text-transparent bg-clip-text">
                before sold.
              </span>
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
              className="inline-flex items-center justify-center px-6 py-3 text-sm rounded-full text-white  bg-slate-900 drop-shadow-lg border-2 border-white"
            >
              Start exploring
            </Link>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-full" src="/images/1.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
