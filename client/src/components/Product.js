import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className=" overflow-hidden bg-white rounded shadow transition-all">
      <Link to={`/product/id`}>
        <img
          src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg"
          className="w-full"
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link
          to={`/product/id`}
          className="text-xs text-gray-500 rounded bg-gray-100 py-1 px-2 my-1"
        >
          #Category
        </Link>
        <h2 className="text-xl font-bold text-gray-900 hover:text-gray-700">
          <Link to={`/product/id`}>The Catcher in the Rye</Link>
        </h2>

        <p className="my-3 text-sm text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo unde
          quis.
        </p>

        <div className="border-t">
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-between gap-2">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
                alt=""
                className="h-10 w-10 rounded-full"
              />

              <div>
                <h1 className="text-xs font-bold text-gray-600 text-right">
                  John Smith
                </h1>
                <p className="text-xs text-gray-500">User</p>
              </div>
            </div>
            <div>
              <h1 className="text-xs font-bold text-gray-600 text-right">
                Last Date
              </h1>
              <p className="text-xs text-gray-500 text-right">10 April,2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
