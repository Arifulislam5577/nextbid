import React from "react";
import BiderInfo from "./BiderInfo";
import { ImPriceTags } from "react-icons/im";
import { AiFillCarryOut } from "react-icons/ai";
import { motion } from "framer-motion";
const ProductDetails = () => {
  return (
    <motion.section
      className="py-10"
      initial={{ y: "3%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 col-span-1 w-full">
            <img
              src="https://api.tailgrids.com/images/product/9783dd36-e489-4e62-b143-9e95a4c5ca84.jpg"
              alt=""
            />

            <h1 className="text-xl font-bold my-3 text-gray-600 flex items-center gap-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              harum!
            </h1>
            <hr />
            <h1 className="text-sm font-bold my-3 text-gray-600 flex items-center gap-1">
              <ImPriceTags />
              Description
            </h1>
            <hr />
            <div className="my-3">
              <p className="text-gray-500 text-sm my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus nemo at quo itaque rem deserunt reprehenderit nihil
                aspernatur alias! Temporibus at perferendis iusto odio,
                accusamus voluptates aspernatur ab exercitationem vel!
              </p>
              <p className="text-gray-500 text-sm my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus nemo at quo itaque rem deserunt reprehenderit nihil
                aspernatur alias! Temporibus at perferendis iusto odio,
                accusamus voluptates aspernatur ab exercitationem vel!
              </p>
              <p className="text-gray-500 text-sm my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus nemo at quo itaque rem deserunt reprehenderit nihil
                aspernatur alias! Temporibus at perferendis iusto odio,
                accusamus voluptates aspernatur ab exercitationem vel!
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 w-full ">
            <h1 className="text-2xl uppercase text-gray-600 pb-3 border-b font-bold ">
              Summary
            </h1>
            <div className="flex items-center justify-between my-3 text-sm text-gray-500">
              <h2 className="flex items-center gap-1">
                <ImPriceTags />
                Minimum Sell Price
              </h2>
              <h2>$200</h2>
            </div>
            <div className="flex items-center justify-between my-3 text-sm text-gray-500">
              <h2 className="flex items-center gap-1">
                <ImPriceTags />
                Current Bid
              </h2>
              <h2>$200</h2>
            </div>
            <div className="flex items-center justify-between my-3 text-sm text-gray-500">
              <h2 className="flex items-center gap-1">
                <AiFillCarryOut />
                Total Bid
              </h2>
              <h2>4</h2>
            </div>
            <div className="mb-2">
              <BiderInfo />
              <BiderInfo />
              <BiderInfo />
              <BiderInfo />
            </div>
            <div className="my-3">
              <form>
                <div className="grid grid-cols-4 mb-3">
                  <div className="col-span-1">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
                      alt=""
                      className="h-12"
                    />
                  </div>
                  <div className="col-span-3">
                    <input
                      type="text"
                      className="w-full  border-b py-2 text-sm text-gray-500 focus:outline-none placeholder:text-xs"
                      placeholder="$enter amount"
                    />
                  </div>
                </div>

                <button className="w-full py-2.5 text-white capitalize text-sm bg-orange-600 rounded">
                  bid now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetails;
