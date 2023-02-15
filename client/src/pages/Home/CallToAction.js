import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-black rounded-2xl">
      <div className="flex flex-col items-start justify-center p-10">
        <h1 className="lg:text-4xl text-3xl font-bold bg-gradient-to-r from-slate-100 to-orange-600 text-transparent bg-clip-text ">
          Connect to NextBid with proven business experience
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <Link
          to="/login"
          className="inline-flex items-center justify-center px-6 py-3 text-sm rounded-full text-white  bg-slate-900 drop-shadow-lg border-2 border-white my-5"
        >
          Join With Us
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
