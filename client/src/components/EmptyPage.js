import React from "react";
import { Link } from "react-router-dom";

const EmptyPage = ({ name }) => {
  return (
    <div className="py-5">
      <img
        src="/images/empty.svg"
        alt=""
        className="animate-bounce	 h-44 w-1/2 mx-auto"
      />
      <div className="text-center">
        <h2 className="mt-2 lg:text-3xl text-xl font-bold uppercase">
          Couldn't find any {name}.
        </h2>

        <p>
          But dont worry, you can find lot's of products on our{" "}
          <Link to="/products" className="text-orange-600">
            product page.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmptyPage;
