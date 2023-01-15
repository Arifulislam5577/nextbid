import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyPage from "../../components/EmptyPage";
import ErrorMsg from "../../components/ErrorMsg";
import Pagination from "../../components/Pagination";
import TableLoader from "../../components/TableLoader";
import { getUserProduct } from "../../redux/features/product/productService";
const MyProduct = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {
    loading,
    error,
    products: { products, totalDocuments },
  } = useSelector((state) => state.products);

  const pageNumber = Math.ceil(totalDocuments / 6);

  useEffect(() => {
    dispatch(getUserProduct(page));
  }, [dispatch, page]);

  if (loading) {
    return <TableLoader />;
  }

  if (error) {
    return <ErrorMsg error={error} />;
  }

  if (products?.length <= 0) {
    return <EmptyPage name="products" />;
  }

  return (
    <section>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-100 uppercase bg-gray-900">
            <tr>
              <th scope="col" className="py-5 px-6">
                Product name
              </th>

              <th scope="col" className="py-5 px-6">
                Category
              </th>
              <th scope="col" className="py-5 px-6">
                Sell Price
              </th>

              <th scope="col" className="py-5 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => {
              return (
                <tr
                  key={product?._id}
                  className="bg-white border-b text-gray-600"
                >
                  <th className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap">
                    {product?.name}
                  </th>
                  <td className="py-3 px-6 capitalize">{product?.category}</td>
                  <td className="py-3 px-6">${product?.newPrice}</td>
                  <td className="text-center py-3 px-6 text-gray-900 capitalize text-sm ">
                    {product?.isSold ? "Sold" : "Not sold"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          className={`mt-5  items-center justify-end ${
            totalDocuments < 6 ? "flex" : "hidden"
          }`}
        >
          <Pagination pageNum={pageNumber} setPage={setPage} page={page} />
        </div>
      </div>
    </section>
  );
};

export default MyProduct;
