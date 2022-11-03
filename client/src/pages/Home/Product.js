import React from "react";
import { ImHammer2 } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="col-span-1 overflow-hidden bg-gray-100 rounded hover:shadow-md transition-all">
      <Link to={`/product/id`}>
        <img src="images/demo.jpg" className="" alt="" />
      </Link>
      <div className="px-5 py-6 text-center">
        <h2 className="text-sm text-gray-700 hover:text-gray-600">
          <Link to={`/product/id`}>The Catcher in the Rye</Link>
        </h2>
        <h1 className="text-gray-400 text-xs my-1">Current Bid : $300</h1>
        <div className="flex gap-2 items-center mt-2 justify-center ">
          <Link
            to={`/product/id`}
            className="h-7 w-7 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-900 transition-all"
            title="Bid Now"
          >
            <ImHammer2 size="12" />
          </Link>
          <Link
            to={`/product/id`}
            className="h-7 w-7 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-900 transition-all"
            title="wishlist"
          >
            <BsHeart size="12" />
          </Link>
          <Link
            to={`/product/id`}
            className="h-7 w-7 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-900 transition-all"
            title="add to compair"
          >
            <MdCompareArrows size="12" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
