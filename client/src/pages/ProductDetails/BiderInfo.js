import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const BiderInfo = ({ biderInfo }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  return (
    <div className="donators  border-b-white border-b mb-2 rounded bg-slate-100 p-2">
      <div className="flex gap-5 justify-between items-center">
        <div className="donator-img flex items-center justify-between gap-3">
          <img
            src={biderInfo?.userInfo?.userImg}
            alt={biderInfo?.userInfo?.userName}
            className="h-12 w-12 rounded-full p-1 border-2 border-white"
          />
          <div className="donate-details">
            <h2 className="text-slate-900  text-sm">
              {biderInfo?.userInfo?.userName}
            </h2>
            <h3 className="text-slate-900 text-xs flex items-center gap-1">
              {timeAgo.format(new Date(biderInfo?.createdAt))}
            </h3>
          </div>
        </div>
        <div className="donate-details ">
          <h3 className="text-slate-900 text-sm">${biderInfo?.amount}</h3>
        </div>
      </div>
    </div>
  );
};

export default BiderInfo;
