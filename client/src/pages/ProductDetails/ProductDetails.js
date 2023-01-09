import React, { useEffect } from "react";
import BiderInfo from "./BiderInfo";
import { ImPriceTags } from "react-icons/im";
import { AiFillCarryOut } from "react-icons/ai";
import { motion } from "framer-motion";
import Product from "../../components/Product";
import ErrorMsg from "../../components/ErrorMsg";
import ProductLoader from "../../components/ProductLoader";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/features/product/productService";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "react-countdown";
import { isBidActive } from "../../redux/features/product/productSlice";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { error, productInfo, loading, bidActive } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.authReducers);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      dispatch(isBidActive());
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
  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="container my-8">
        <div className="animate-pulse">
          <div className="flex items-center gap-5 mb-5">
            <div className="bg-gray-300 lg:h-64 lg:w-3/4 w-full  rounded"></div>
            <div className="bg-gray-300 lg:h-64 lg:w-1/4 w-full  rounded"></div>
          </div>
          <div className="bg-gray-300 p-5"></div>
          <div className="bg-gray-300 p-5"></div>
          <div className="bg-gray-300 p-5"></div>
          <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <ErrorMsg error={error} />
      </div>
    );
  }

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
              src={productInfo?.product?.coverPhoto}
              alt=""
              className="rounded"
            />

            <h1 className="text-xl font-bold my-3 text-gray-600 flex items-center gap-1">
              {productInfo?.product?.name}
            </h1>
            <hr />
            <h1 className="text-sm font-bold my-3 text-gray-600 flex items-center gap-1">
              <ImPriceTags />
              Description
            </h1>
            <hr />
            <div className="my-3">
              <p className="text-gray-500 text-sm my-2">
                {productInfo?.product?.description
                  .split(".")
                  .slice(0, 3)
                  .join(".")}
              </p>
              <p className="text-gray-500 text-sm my-2">
                {productInfo?.product?.description
                  .split(".")
                  .slice(3, 6)
                  .join(".")}
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="lg:py-6 lg:px-8 p-5 bg-orange-600 rounded shadow">
              <Countdown
                renderer={renderer}
                date={new Date("2023-02-09T17:10:00.466+00:00") + 10000}
              />

              <div className="flex items-center justify-between my-3 text-base text-white">
                <h2 className="flex items-center  gap-1">
                  <ImPriceTags />
                  Minimum Sell Price
                </h2>
                <h2>${productInfo?.product?.newPrice}</h2>
              </div>
              <div className="flex items-center justify-between my-3 text-base text-white">
                <h2 className="flex items-center gap-1">
                  <ImPriceTags />
                  Highest Bid
                </h2>
                <h2>${productInfo?.highestBid}</h2>
              </div>
              <div className="flex items-center justify-between my-3 text-base text-white">
                <h2 className="flex items-center gap-1">
                  <AiFillCarryOut />
                  Total Bid
                </h2>
                <h2>{productInfo?.totalBid}</h2>
              </div>
              <div className="mb-3">
                <h1 className="text-center text-white font-bold pb-2 border-b">
                  Lastest Bids
                </h1>

                {productInfo?.productBid?.length <= 0
                  ? "No Bid"
                  : productInfo?.productBid?.map((bidInfo) => (
                      <BiderInfo key={bidInfo._id} biderInfo={bidInfo} />
                    ))}
              </div>
              <div className="my-3">
                <form>
                  <div className="grid grid-cols-4 mb-3">
                    <div className="col-span-1">
                      <img
                        src={user?.userImg}
                        alt={user?.userName}
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="col-span-3">
                      <input
                        type="number"
                        min={productInfo?.product?.newPrice}
                        className="w-full  border-b py-2 text-sm text-white focus:outline-none placeholder:text-xs placeholder:text-gray-300 px-3 bg-transparent"
                        placeholder="$enter your amount"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!bidActive}
                    className={`w-full py-2.5 text-white capitalize text-sm ${
                      !bidActive ? "bg-gray-500" : "bg-gray-900"
                    } rounded`}
                  >
                    {!bidActive ? "bid off" : "bid now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="border-gray-200 my-10 pb-4 items-center justify-between border-b md:flex">
          <div className="w-full">
            <h2 className="mb-2 text-2xl font-semibold text-black">
              Related Product items
            </h2>
            <p className="text-body-color text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices lectus sem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5">
          {productInfo?.relatedProduct?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetails;
