import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Doted from "../../components/Doted";
import ErrorMsg from "../../components/ErrorMsg";
import Product from "../../components/Product";
import ProductLoader from "../../components/ProductLoader";
import { getProducts } from "../../redux/features/product/productService";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts({ isFeatured: true, isSold: false, limit: 3 }));
  }, [dispatch]);
  return (
    <>
      <div className="py-10 grid lg:grid-cols-4 grid-cols-1 gap-5">
        <div className="col-span-1 p-8 hidden bg-gray-200 text-slate-900  lg:flex flex-col gap-2 items-start justify-center rounded relative">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-slate-900 to-orange-600 text-transparent bg-clip-text mb-4">
            Our Latest Products
          </h1>
          <p className="text-sm">
            A domain name is one of the first steps to establishing your brand.
          </p>
          <p className="text-sm">
            Secure a consistent brand image with a domain name that matches your
            business.
          </p>
        </div>

        {loading ? (
          <div className="lg:col-span-3 w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 md:gap-3 gap-5 items-center justify-center lg:justify-between">
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
          </div>
        ) : error ? (
          <ErrorMsg error={error} />
        ) : products?.products?.length === 0 ? (
          "No Products"
        ) : (
          <div className="lg:col-span-3 w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 md:gap-3 gap-5 items-center justify-center lg:justify-between">
            {products?.products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <div className="lg:col-span-3 w-full flex items-center lg:justify-end justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 text-sm rounded-full text-white  bg-slate-900 drop-shadow-lg border-2 border-white"
              >
                View All
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
