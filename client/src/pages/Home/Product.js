import React from "react";

const Product = () => {
  return (
    <div className="col-span-1 rounded overflow-hidden bg-gray-100 shadow relative">
      <img src="https://picsum.photos/400/280" alt="" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm line-through text-gray-500">💰500</p>
          <p className="text-sm text-gray-500">💰320</p>
          <p className="text-sm text-gray-500">🧑‍🏫Abdullah</p>
        </div>
        <h2 className="text-base font-bold text-gray-600">
          The Catcher in the Rye
        </h2>
        <p className="text-sm text-gray-500 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          quia...
        </p>

        <div className="flex items-center mt-2">
          <button className=" w-full  text-left text-sm hover:text-red-600">
            🙈view detail
          </button>
          <button className=" w-full  text-left text-sm hover:text-red-600">
            🎯compair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
