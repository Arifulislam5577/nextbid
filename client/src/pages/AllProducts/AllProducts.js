import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GrPowerReset } from "react-icons/gr";
import Product from "../../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/product/productService";
import ProductLoader from "../../components/ProductLoader";
import ErrorMsg from "../../components/ErrorMsg";
import Pagination from "../../components/Pagination";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Alert } from "@mui/material";
const AllProducts = () => {
  const productCategory = [
    "All Products",
    "car",
    "computer",
    "electronics",
    "mobile",
    "properties",
  ];
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [value, setValue] = useState([0, 10000]);
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const pageNumber = Math.ceil(products?.totalDocuments / 6);

  useEffect(() => {
    if (category === "All Products") {
      setCategory("");
      setPage(1);
    }

    dispatch(getProducts({ page, category, value, keyword }));
  }, [dispatch, page, category, value, keyword]);
  return (
    <motion.section
      initial={{ y: "3%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="py-10"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b pb-3">
                <h1 className="text-gray-600  text-sm">Filter Product</h1>
                <button className="">
                  <GrPowerReset size="18" />
                </button>
              </div>

              <div className="my-4 border-b pb-3">
                <h1 className="text-gray-600  text-sm">Search</h1>
                <fieldset className="w-full space-y-1 dark:text-gray-100">
                  <label htmlFor="Search" className="hidden">
                    Search
                  </label>
                  <form className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button
                        type="submit"
                        title="search"
                        className="p-1 focus:outline-none focus:ring"
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 dark:text-gray-100"
                        >
                          <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      className="py-2 pl-10 text-sm placeholder:text-gray-100 rounded w-full focus:outline-none bg-gray-300 text-gray-900 "
                    />
                  </form>
                </fieldset>
              </div>
              <div className="my-4 border-b pb-3">
                <h1 className="text-gray-600  text-sm">Price</h1>
                <div className="mt-3">
                  <Box>
                    <Slider
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      valueLabelDisplay="auto"
                      min={0}
                      max={10000}
                      aria-labelledby="range-slider"
                      className="text-gray-600"
                    />
                  </Box>
                </div>
              </div>
              <div className="my-4 pb-3">
                <h1 className="text-gray-600  text-sm mb-5">Category</h1>
                <div className="my-2">
                  {productCategory.map((category) => (
                    <button
                      key={category}
                      onClick={() => setCategory(category)}
                      className="block my-2 capitalize text-sm hover:translate-x-1 transition-all"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 w-full ">
            {loading ? (
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ProductLoader />
                <ProductLoader />
                <ProductLoader />
                <ProductLoader />
                <ProductLoader />
                <ProductLoader />
              </div>
            ) : error ? (
              <ErrorMsg error={error} />
            ) : products?.products?.length === 0 ? (
              <Alert variant="filled" severity="warning">
                No Product Found - Try Another Product
              </Alert>
            ) : (
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {products?.products?.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
            )}
            <div
              className={`my-5 w-full flex items-center justify-start ${
                ((category && products?.result) ||
                  !products?.products?.length) &&
                "hidden"
              }`}
            >
              <Pagination pageNum={pageNumber} setPage={setPage} page={page} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AllProducts;
