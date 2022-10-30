import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-5">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
