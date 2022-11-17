import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="my-10 bg-gray-900 p-10 rounded">
      <div className="">
        <h1 className="text-3xl text-gray-100">
          Do you want to sell/buy products via nextBid?
        </h1>
        <p className="text-sm text-gray-300  max-w-md mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          dolorum minus necessitatibus, dolorem culpa laborum.
        </p>
        <Link
          to="/login"
          className=" mt-5 inline-block py-2.5 px-6 bg-red-600 text-white rounded"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
