import React from "react";
import { BiTimer } from "react-icons/bi";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const BiderInfo = ({ biderInfo }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  return (
    <div className="donators  border-b-white border-b py-2">
      <div className="flex gap-5 justify-between items-center">
        <div className="donator-img flex items-center justify-between gap-3">
          <img
            src={biderInfo?.userInfo?.userImg}
            alt={biderInfo?.userInfo?.userName}
            className="h-12 w-12 rounded-full"
          />
          <div className="donate-details">
            <h2 className="text-white  text-sm">
              {biderInfo?.userInfo?.userName}
            </h2>
            <h3 className="text-white text-xs flex items-center gap-1">
              <BiTimer />
              {timeAgo.format(new Date(biderInfo?.createdAt))}
            </h3>
          </div>
        </div>
        <div className="donate-details ">
          <h3 className="text-white text-sm">${biderInfo?.amount}</h3>
        </div>
      </div>
    </div>
  );
};

export default BiderInfo;
