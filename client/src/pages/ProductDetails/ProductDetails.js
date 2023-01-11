import React, { useEffect, useState } from "react";
import BiderInfo from "./BiderInfo";
import { ImPriceTags } from "react-icons/im";
import { AiFillCarryOut } from "react-icons/ai";
import { motion } from "framer-motion";
import ErrorMsg from "../../components/ErrorMsg";
import ProductLoader from "../../components/ProductLoader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  updateProductById,
} from "../../redux/features/product/productService";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "react-countdown";
import RelatedProduct from "./RelatedProduct";
import {
  createNewProductBid,
  getProductBid,
} from "../../redux/features/productBids/productBidService";
import { resetBids } from "../../redux/features/productBids/productBidSlice";

const ProductDetails = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [amount, setAmount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { error, productInfo, loading, updateSuccess } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.authReducers);

  const {
    loading: bidLoader,
    error: bidError,
    success,
    bidInfo,
  } = useSelector((state) => state.productBid);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(
        createNewProductBid({
          userInfo: user._id,
          productInfo: productInfo?.product?._id,
          amount: amount * 1,
        })
      );

      setAmount(0);
    } else {
      navigate(`/login?redirect=${location.pathname}`);
    }
  };

  const handleComplete = (completed) => {
    setIsCompleted(completed);
  };

  useEffect(() => {
    handleComplete(isCompleted);
  }, [isCompleted]);

  useEffect(() => {
    if (id || updateSuccess) {
      dispatch(getProductById(id));
      dispatch(getProductBid(id));
    }
  }, [dispatch, id, updateSuccess]);

  useEffect(() => {
    if (success) {
      dispatch(resetBids());
      dispatch(getProductBid(id));
    }
  }, [dispatch, success, id]);

  useEffect(() => {
    if (isCompleted) {
      dispatch(updateProductById(id));
    }
  }, [isCompleted, dispatch, bidInfo, id]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      handleComplete(completed);
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

            <h1 className="text-xl font-bold my-3 text-gray-900 flex items-center gap-1">
              {productInfo?.product?.name}
            </h1>
            <hr />
            <h1 className="text-sm font-bold my-3 text-gray-600 flex items-center gap-1">
              <ImPriceTags />
              Description
            </h1>
            <hr />

            <div
              className="text-gray-500 text-sm my-2"
              dangerouslySetInnerHTML={{
                __html: productInfo?.product?.description,
              }}
            ></div>
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="lg:py-6 lg:px-8 p-5 bg-orange-600 rounded shadow ">
              <Countdown
                renderer={renderer}
                date={new Date(productInfo?.product?.lastDate)}
              />

              <div className="flex items-center justify-between my-3 text-base text-white">
                <h2 className="flex items-center  gap-1">
                  <ImPriceTags />
                  Sell Price
                </h2>
                <h2>${productInfo?.product?.newPrice}</h2>
              </div>
              <div className="flex items-center justify-between my-3 text-base text-white">
                <h2 className="flex items-center gap-1">
                  <ImPriceTags />
                  Highest Bid
                </h2>
                <h2>${bidInfo?.highestBid}</h2>
              </div>
              <div className="flex items-center justify-between my-3 text-base text-white">
                <h2 className="flex items-center gap-1">
                  <AiFillCarryOut />
                  Total Bid
                </h2>
                <h2>{bidInfo?.totalBid}</h2>
              </div>
              <div className="mb-3">
                <h1 className="text-center text-white font-bold pb-2 border-b">
                  Lastest Bids
                </h1>
                {bidError && (
                  <p className="text-center my-2 text-white text-sm">
                    {bidError}
                  </p>
                )}
                {bidInfo?.lastThreeBid?.length <= 0 ? (
                  <p className="text-center my-2 text-white text-sm">
                    No Bids Available
                  </p>
                ) : (
                  bidInfo?.lastThreeBid?.map((bidInfo) => (
                    <BiderInfo key={bidInfo._id} biderInfo={bidInfo} />
                  ))
                )}
              </div>
              <div className="my-3">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-4 mb-3">
                    <div className="col-span-1">
                      <img
                        src={
                          user
                            ? user?.userImg
                            : "https://www.shareicon.net/data/2016/05/24/770107_man_512x512.png"
                        }
                        alt={user ? user?.userName : "user"}
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="col-span-3">
                      <input
                        type="number"
                        min={productInfo?.product?.newPrice}
                        value={amount ? amount : ""}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full  border-b py-2 text-sm text-white focus:outline-none placeholder:text-xs placeholder:text-gray-300 px-3 bg-transparent"
                        placeholder="$enter your amount"
                        required
                      />
                    </div>
                  </div>

                  {productInfo?.product?.isSold ? (
                    <button
                      disabled
                      className={`w-full py-2.5 text-white capitalize text-sm 
                        bg-gray-500 
                      rounded`}
                    >
                      Product Sold
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={bidLoader}
                      className="w-full py-2.5 text-white capitalize text-sm bg-gray-900 rounded"
                    >
                      {bidLoader ? "Loading..." : "bid now"}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <RelatedProduct relatedProduct={productInfo?.relatedProduct} />
      </div>
    </motion.section>
  );
};

export default ProductDetails;
