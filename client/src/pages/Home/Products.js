import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="py-10 grid lg:grid-cols-4 grid-cols-1 gap-5">
        <div className="col-span-1 p-8 hidden bg-gray-900 text-white  lg:flex flex-col items-center justify-center  rounded">
          <h1 className="font-bold text-3xl">Our Latest Products</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            voluptatum quibusdam cumque in dignissimos rerum.
          </p>
        </div>
        <div className="lg:col-span-3 w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 md:gap-3 gap-5 items-center justify-center lg:justify-between">
          <Product />
          <Product />
          <Product />

          <div className="lg:col-span-3 w-full flex items-center lg:justify-end justify-center">
            <Link
              to="/products"
              className="py-2.5 px-6 bg-red-600 text-white rounded"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
