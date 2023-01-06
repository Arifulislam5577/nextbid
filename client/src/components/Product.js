import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, description, coverPhoto, newPrice, category, sellerInfo, _id } =
    product;

  console.log(description);
  return (
    <div className=" overflow-hidden bg-white rounded shadow transition-all">
      <Link to={`/product/${_id}`}>
        <img src={coverPhoto} className="w-full h-44 object-cover" alt={name} />
      </Link>
      <div className="p-5">
        <Link
          to={`/product/${category}`}
          className="text-xs text-gray-500 rounded bg-gray-100 py-1 px-2 my-1 inline-block capitalize"
        >
          #{category}
        </Link>
        <h2 className="text-base font-bold text-gray-900 hover:text-gray-700">
          <Link to={`/product/${_id}`}>{name}</Link>
        </h2>

        <p className="my-2 text-sm text-gray-500">
          {description?.length > 100
            ? description?.split(" ").slice(0, 11).join(" ")
            : description}
          ...
        </p>

        <div className="border-t">
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-between gap-2">
              <img
                src={sellerInfo?.userImg}
                alt={sellerInfo?.userName}
                className="h-10 w-10 rounded-full"
              />

              <div>
                <h1 className="text-xs font-bold text-gray-600 text-right">
                  {sellerInfo?.userName}
                </h1>
                <p className="text-xs text-gray-500">
                  {sellerInfo?.isAdmin ? "Admin" : "User"}
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-xs font-bold text-gray-600 text-right">
                Last Date
              </h1>
              <p className="text-xs text-gray-500 text-right">10 April,2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
