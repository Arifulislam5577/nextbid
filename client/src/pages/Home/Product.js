import React from "react";

const Product = () => {
  return (
    <div className="col-span-1 overflow-hidden hover:bg-gray-100">
      <img src="https://picsum.photos/400/280" className="rounded" alt="" />
      <div className="p-3 text-center">
        {/* <div className="flex items-center justify-between mb-2">
          <p className="text-sm line-through text-gray-500">💰500</p>
          <p className="text-sm text-gray-500">💰320</p>
          <p className="text-sm text-gray-500">🧑‍🏫Abdullah</p>
        </div> */}

        <h1 className="text-red-600 font-bold my-2">$300</h1>
        <h2 className="text-base font-bold text-gray-600">
          The Catcher in the Rye
        </h2>
        {/* <p className="text-sm text-gray-500 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          quia...
        </p> */}

        <div className="flex items-center mt-2 justify-center text-center">
          <button className=" w-full  text-center text-sm hover:text-red-600">
            🙈view detail
          </button>
          <button className=" w-full  text-center text-sm hover:text-red-600">
            🎯compair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
