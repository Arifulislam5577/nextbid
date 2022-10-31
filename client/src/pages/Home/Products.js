import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-5">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="my-5 flex items-center justify-center w-full">
        <Link
          to="/products"
          className="py-2.5 px-6 bg-red-600 text-white rounded"
        >
          View All
        </Link>
      </div>
    </>
  );
};

export default Products;
