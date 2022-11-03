import React from "react";

const MainLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen gap-2">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-900"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-900"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-900"></div>
    </div>
  );
};

export default MainLoader;
