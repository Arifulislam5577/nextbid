import React from "react";

const TableLoader = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-14 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-full h-14 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-full h-14 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-full h-14 bg-gray-300 animate-pulse rounded"></div>
      <div className="w-full h-14 bg-gray-300 animate-pulse rounded"></div>
    </div>
  );
};

export default TableLoader;
