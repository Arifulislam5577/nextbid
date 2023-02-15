import React from "react";
import Countdown from "react-countdown";

const CountDown = ({ time, handleUpdate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      handleUpdate(true);
      return (
        <div className="bg-white rounded-xl flex p-5 items-center justify-center gap-3 uppercase text-center font-bold text-2xl shadow-xl">
          <h1 className="text-white text-center font-bold pb-2 border-b uppercase text-xl">
            Offer End
          </h1>
        </div>
      );
    } else {
      return (
        <div className="bg-white rounded-xl flex p-5 items-center justify-center gap-3 uppercase text-center font-bold text-2xl shadow-lg">
          <div className="bg-gradient-to-r from-slate-900 to-orange-600 text-transparent bg-clip-text">
            {days}d
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-orange-600 text-transparent bg-clip-text">
            {hours}h
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-orange-600 text-transparent bg-clip-text">
            {minutes}m
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-orange-600 text-transparent bg-clip-text">
            {seconds}s
          </div>
        </div>
      );
    }
  };
  return <Countdown renderer={renderer} date={new Date(time)} />;
};

export default CountDown;
