import React from "react";
import { ImHammer2 } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className=" overflow-hidden bg-white rounded hover:shadow-md transition-all">
      <Link to={`/product/id`}>
        <img src="images/demo.jpg" className="md:h-40 h-52 w-full" alt="" />
      </Link>
      <div className="px-5 py-6">
        <h2 className="text-sm font-bold text-gray-700 hover:text-gray-600">
          <Link to={`/product/id`}>🎯The Catcher in the Rye</Link>
        </h2>

        <p className="my-3 text-xs text-gray-500">
          📑Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo unde
          quis, at, mollitia neque architecto officiis esse distinctio nostrum
        </p>
        <div className="flex gap-2 items-center mt-2">
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
