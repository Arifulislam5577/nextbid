import React from "react";
import Timer from "react-compound-timer";

const CountDown = ({ time }) => {
  return (
    <div>
      <Timer initialTime={new Date(time) - new Date()} direction="backward">
        {() => (
          <div className="grid grid-cols-4 gap-3 my-10">
            <p className="col-span-1 bg-red-600 flex items-center justify-center flex-col rounded py-2 px-5">
              <span className="text-4xl font-bold text-white">
                <Timer.Days />
              </span>
              <span className="text-sm lowercase text-gray-200">Days</span>
            </p>

            <p className="col-span-1 bg-red-600 flex items-center justify-center flex-col rounded py-2 px-5">
              <span className="text-4xl font-bold text-white">
                <Timer.Hours />
              </span>
              <span className="text-sm lowercase text-gray-200">Hours</span>
            </p>
            <p className="col-span-1 bg-red-600 flex items-center justify-center flex-col rounded py-2 px-5">
              <span className="text-4xl font-bold text-white">
                <Timer.Minutes />
              </span>
              <span className="text-sm lowercase text-gray-200">Minutes</span>
            </p>
            <p className="col-span-1 bg-red-600 flex items-center justify-center flex-col rounded py-2 px-5">
              <span className="text-4xl font-bold text-white">
                <Timer.Seconds />
              </span>
              <span className="text-sm lowercase text-gray-200">Seconds</span>
            </p>
          </div>
        )}
      </Timer>
    </div>
  );
};

export default CountDown;
