import React from "react";
import { Link } from "react-router-dom";

const Mision = () => {
  return (
    <div className="flex flex-wrap items-center justify-between py-5">
      <div className="w-full lg:w-6/12 lg:order-1 order-2">
        <img src="/images/2.png" alt="cover" />
      </div>
      <div className="w-full  lg:w-1/2 xl:w-5/12 lg:order-2 order-1">
        <div className="mt-10 lg:mt-0">
          <span className="text-primary mb-2 block text-lg font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
            Experience the thrill of the bid on{" "}
            <div className="inline-flex">
              <h1 className="relative text-3xl font-bold  sm:text-4xl md:text-[40px] mt-2 bg-gradient-to-r from-slate-900 to-orange-600 text-transparent bg-clip-text">
                NextBid.
              </h1>
            </div>
          </h2>

          <p className="text-body-color mb-8 text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less.
          </p>
          <p className="text-body-color mb-12 text-base">
            A domain name is one of the first steps to establishing your brand.
            Secure a consistent brand image with a domain name that matches your
            business.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-6 py-3 text-sm rounded-full text-white  bg-slate-900 drop-shadow-lg border-2 border-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mision;
