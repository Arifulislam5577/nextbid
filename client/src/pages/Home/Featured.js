import React from "react";
import { MdCompareArrows } from "react-icons/md";
import CountDown from "../../components/CountDown";
const Featured = () => {
  return (
    <div className="py-10">
      <div className="flex gap-5 items-center">
        <div className="w-full lg:w-1/2 ">
          <img
            alt="ecommerce"
            className="w-full"
            src="https://images.unsplash.com/photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
        <div className="lg:w-1/2 w-full p-10 bg-gray-200">
          <h2 className="text-sm text-gray-500 tracking-widest">BRAND NAME</h2>
          <h1 className="text-gray-900 text-3xl  mb-1">
            The Catcher in the Rye
          </h1>
          <div className="flex">
            <span className="flex items-center">
              <span className="text-gray-600 ml-3">4 Bid</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <div className="my-3">
            <CountDown time="2022-10-31" />
          </div>
          {/* <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            impedit inventore et assumenda beatae fugit porro perspiciatis velit
            perferendis illo temporibus incidunt delectus sequi, consequatur
            explicabo obcaecati sapiente quo architecto?
          </p> */}
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 gap-5">
            <h1 className=" text-gray-500">Last Highest Bid</h1>
            <h1 className="text-xl font-bold text-red-600">$200</h1>
          </div>
          <div className="flex">
            <span className="title-font font-bold text-2xl text-gray-900">
              $588.00
            </span>
            <button className="flex ml-auto text-white bg-red-600 border-0 py-2.5 px-6 focus:outline-none  rounded">
              Bid Now
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <MdCompareArrows size="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
