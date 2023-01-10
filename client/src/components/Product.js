import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, description, coverPhoto, newPrice, _id } = product;
  return (
    <div className=" overflow-hidden bg-white rounded shadow transition-all">
      <Link to={`/product/${_id}`}>
        <img src={coverPhoto} className="w-full h-44" alt={name} />
      </Link>
      <div className="p-5 text-center">
        <h2 className=" font-bold text-gray-900 hover:text-gray-700">
          <Link to={`/product/${_id}`}>{name}</Link>
        </h2>

        <div
          className="my-1 text-sm text-gray-500"
          dangerouslySetInnerHTML={{
            __html: description?.split(" ").slice(0, 10).join(" "),
          }}
        ></div>
        <div className="flex items-center justify-center my-3 mb-5">
          <p className="font-bold text-gray-600 text-sm ">${newPrice}</p>
        </div>
        <Link
          to={`/product/${_id}`}
          className="py-2 px-5 rounded-full border border-gray-600 text-gray-600 text-sm hover:bg-orange-600 hover:border-orange-600 hover:text-white duration-300 transition-all"
        >
          Bid Now
        </Link>
      </div>
    </div>
  );
};

export default Product;
