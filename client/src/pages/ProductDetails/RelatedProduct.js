import React from "react";
import Product from "../../components/Product";

const RelatedProduct = ({ relatedProduct }) => {
  return (
    <>
      <div className="border-gray-200 my-10 pb-4 items-center justify-between border-b md:flex">
        <div className="w-full">
          <h2 className="mb-2 text-2xl font-semibold text-black">
            Related Product items
          </h2>
          <p className="text-body-color text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices lectus sem.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5">
        {relatedProduct?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default RelatedProduct;
