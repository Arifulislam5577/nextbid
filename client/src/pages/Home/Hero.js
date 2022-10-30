import React from "react";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center ">
      <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mt-0 mt-10 lg:mb-0 items-center text-center">
        <h1 className=" sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
          Get your favorite <br className="hidden lg:inline-block" />
          products before sold
        </h1>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-red-600 py-2.5 px-6 rounded text-sm">
            Buy Now
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 md:justify-center mx-auto flex items-center md:mb-0 mb-20 lg:gap-0 gap-5">
        <img
          className="object-cover object-center rounded md:h-[26rem]   h-72 md:w-60 w-1/2 mx-auto mt-10 shadow-lg"
          alt="hero"
          src="images/hero.jpg"
        />
        <img
          className="object-cover object-center rounded md:h-[26rem]   h-72 md:w-60 w-1/2 mx-auto -mt-10"
          alt="hero"
          src="images/hero.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
