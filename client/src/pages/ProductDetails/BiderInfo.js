import React from "react";
import { BiTimer } from "react-icons/bi";
const BiderInfo = () => {
  return (
    <div className="donators  border-b-white border-b py-2">
      <div className="flex gap-5 justify-between items-center">
        <div className="donator-img flex items-center justify-between gap-3">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <div className="donate-details">
            <h2 className="text-white  text-sm">Md Ariful Islam</h2>
            <h3 className="text-white text-xs flex items-center gap-1">
              <BiTimer />
              20h ago
            </h3>
          </div>
        </div>
        <div className="donate-details ">
          <h3 className="text-white text-sm">$230</h3>
        </div>
      </div>
    </div>
  );
};

export default BiderInfo;
