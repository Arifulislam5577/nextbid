import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="col-span-1 overflow-hidden bg-gray-100 rounded hover:shadow-md transition-all">
      <Link to={`/product/id`}>
        <img src="images/demo.jpg" className="" alt="" />
      </Link>
      <div className="px-5 py-6 text-left">
        <h1 className="text-red-600 font-bold">$300</h1>
        <h2 className="text-sm font-bold text-gray-600 hover:text-gray-500">
          <Link to={`/product/id`}>The Catcher in the Rye</Link>
        </h2>
        <div className="flex items-center mt-2 justify-start ">
          <Link
            to={`/product/id`}
            className=" w-full text-gray-500 text-sm hover:text-red-600"
          >
            🙈view detail
          </Link>
          <button className=" w-full text-gray-500  text-sm hover:text-red-600">
            🎯compair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
