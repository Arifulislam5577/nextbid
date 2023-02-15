import React from "react";

const ProductDesc = ({ price, bid }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-lg ">
      <div className="flex items-center justify-between">
        <p>Sell Price</p>
        <p>${price}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Highest Bid</p>
        <p>${bid?.highestBid}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Total Bid</p>
        <p>{bid?.totalBid}</p>
      </div>
    </div>
  );
};

export default ProductDesc;
