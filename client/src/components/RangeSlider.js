import { useState } from "react";

function RangeSlider() {
  const [values, setValues] = useState([25, 75]);

  function handleChange(event) {
    setValues(event.target.value.split(",").map(Number));
  }

  return (
    <div className="relative rounded-md shadow-sm my-3">
      <input
        type="range"
        className="block w-full rounded-md  focus:outline-none cursor-pointer"
        value={values.join(",")}
        onChange={handleChange}
        min={0}
        max={100}
        step={1}
        multiple
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-xs font-medium leading-5 text-slider-blue-dark">
          {values[0]}
        </span>
      </div>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span className="text-xs font-medium leading-5 text-slider-blue-dark">
          {values[1]}
        </span>
      </div>
      <div
        className="absolute inset-y-0 h-full bg-slider-blue rounded-md"
        style={{ left: `${values[0]}%`, width: `${values[1] - values[0]}%` }}
      ></div>
    </div>
  );
}

export default RangeSlider;
