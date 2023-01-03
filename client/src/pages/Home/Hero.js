import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // <div className="flex lg:flex-row flex-col-reverse items-center h-[90vh]">
    //   <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mt-0  lg:mb-0 items-center text-center">
    //     <h1 className=" sm:text-6xl text-4xl mb-4 font-bold text-gray-900">
    //       Get your favorite products{" "}
    //       <span className=" text-red-600">before</span> sold
    //     </h1>
    //     <p className="mb-8 leading-relaxed">
    //       Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
    //       plant cold-pressed tacos poke beard tote bag.
    //     </p>
    //     <div className="flex justify-center">
    //       <button className="inline-flex text-white bg-red-600 py-2.5 px-6 rounded text-sm">
    //         Buy Now
    //       </button>
    //     </div>
    //   </div>
    //   <div className="lg:max-w-lg lg:w-full md:w-1/2 md:justify-center mx-auto grid grid-cols-2 items-center md:mb-0 mb-10 lg:gap-2 gap-5 overflow-hidden">
    //     <img
    //       className="rounded-3xl h-full p-5  object-contain"
    //       alt="hero"
    //       src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    //     />
    //     <img
    //       className="rounded-3xl h-full p-5  object-contain"
    //       alt="hero"
    //       src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    //     />
    //   </div>
    // </div>

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

          <p className="mt-8 text-base text-black sm:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>

          <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-600 hover:bg-orange-600 focus:bg-orange-600"
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
