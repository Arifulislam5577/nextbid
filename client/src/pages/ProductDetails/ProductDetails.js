import React, { useEffect, useState } from "react";
import BiderInfo from "./BiderInfo";
import { ImPriceTags } from "react-icons/im";
import { motion } from "framer-motion";
import ErrorMsg from "../../components/ErrorMsg";
import ProductLoader from "../../components/ProductLoader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  updateProductById,
} from "../../redux/features/product/productService";
import { useDispatch, useSelector } from "react-redux";
import RelatedProduct from "./RelatedProduct";
import {
  createNewProductBid,
  getProductBid,
} from "../../redux/features/productBids/productBidService";
import { resetBids } from "../../redux/features/productBids/productBidSlice";
import CountDown from "../../components/CountDown";
import useTitle from "../../hooks/useTitle";
import ProductDesc from "./ProductDesc";

const ProductDetails = () => {
  const [completed, setCompleted] = useState(false);
  const [amount, setAmount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { error, productInfo, loading, updateSuccess } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.authReducers);

  useTitle("Product Details");

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

  const handleUpdate = (value) => {
    if (value) {
      setCompleted(true);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
      dispatch(getProductBid(id));
    }

    if (productInfo?.product?.isSold) {
      navigate("/products");
    }
  }, [dispatch, id, productInfo?.product?.isSold, navigate]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id, updateSuccess]);

  useEffect(() => {
    if (success) {
      dispatch(resetBids());
      dispatch(getProductBid(id));
    }
  }, [dispatch, success, id]);

  useEffect(() => {
    if (completed) {
      dispatch(updateProductById(id));
    }
  }, [completed, dispatch, id]);

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
      className=""
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
              className="rounded-xl"
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
          <div className="lg:col-span-1 w-full flex flex-col gap-5">
            <CountDown
              handleUpdate={handleUpdate}
              time={productInfo?.product?.lastDate}
            />
            <ProductDesc price={productInfo?.product?.newPrice} bid={bidInfo} />
            <div className="p-8 bg-white rounded-xl shadow-lg ">
              <div className="mb-3">
                <h1 className=" text-slate-900 font-bold pb-2 text-xl">
                  Bid from here
                </h1>
                {bidError && (
                  <p className="my-2 text-slate-900 text-sm">{bidError}</p>
                )}
                {bidInfo?.lastThreeBid?.length <= 0 ? (
                  <p className="my-2 text-slate-900 text-sm">
                    No Bids Available
                  </p>
                ) : (
                  bidInfo?.lastThreeBid?.map((bidInfo) => (
                    <BiderInfo key={bidInfo._id} biderInfo={bidInfo} />
                  ))
                )}
              </div>

              <div className="my-3">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-end"
                >
                  <div className="w-full mb-3">
                    <input
                      type="number"
                      min={productInfo?.product?.newPrice}
                      value={amount ? amount : ""}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-gray-50 border border-slate-300 py-3 text-sm text-slate-900 focus:outline-none placeholder:text-xs placeholder:text-gray-300 px-5 rounded-full"
                      placeholder="$enter your amount"
                      required
                    />
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
                      className="py-2.5 text-white capitalize text-sm bg-gray-900 rounded-full px-6"
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
