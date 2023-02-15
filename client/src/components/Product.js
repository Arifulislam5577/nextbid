import React from "react";
import { Link } from "react-router-dom";
import { MdLaunch } from "react-icons/md";

const Product = ({ product }) => {
  const { name, description, coverPhoto, newPrice, _id, category } = product;
  return (
    <div className="overflow-hidden bg-white rounded-xl shadow transition-all p-5">
      <Link to={`/product/${_id}`} className="rounded block">
        <img src={coverPhoto} className="w-full rounded block" alt={name} />
      </Link>
      <div className="flex gap-3 my-3">
        <span className="bg-slate-200 capitalize px-1 py-1 rounded text-xs">
          price ${newPrice}
        </span>
        <span className="bg-slate-200 capitalize px-1 py-1 rounded text-xs">
          {category}
        </span>
      </div>
      <div className=" pt-1">
        <h2 className="text-sm font-bold text-gray-900 hover:text-gray-700 line mb-2">
          <Link to={`/product/${_id}`}>{name}</Link>
        </h2>

        <div
          className="mb-3 text-sm text-gray-400 line"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>

        <Link
          to={`/product/${_id}`}
          className="bg-slate-200 w-full flex items-center justify-center gap-1 p-2 text-center rounded text-sm font-semibold text-gray-500 hover:bg-slate-300 transition-all duration-200"
        >
          <MdLaunch />
          Bid Now
        </Link>
      </div>
    </div>
  );
};

export default Product;
