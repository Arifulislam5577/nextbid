import React from "react";

const ErrorMsg = ({ error }) => {
  return (
    <div className="w-full mx-auto py-4 text-center rounded  bg-orange-600 text-gray-100">
      <h1 className="text-center">{error}</h1>
    </div>
  );
};

export default ErrorMsg;
