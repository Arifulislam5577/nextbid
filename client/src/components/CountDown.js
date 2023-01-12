import React from "react";
import Countdown from "react-countdown";

const CountDown = ({ time, handleUpdate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      handleUpdate(true);
      return (
        <h1 className="text-white text-center font-bold pb-2 border-b uppercase text-xl">
          Offer End
        </h1>
      );
    } else {
      return (
        <div className="flex items-center gap-3  my-3 text-2xl text-center justify-center text-white pb-3 border-b font-bold ">
          <div>{days}d</div>
          <div>{hours}h</div>
          <div>{minutes}m</div>
          <div>{seconds}s</div>
        </div>
      );
    }
  };
  return <Countdown renderer={renderer} date={new Date(time)} />;
};

export default CountDown;
