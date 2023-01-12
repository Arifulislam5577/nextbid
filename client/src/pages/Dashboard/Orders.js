import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../../components/ErrorMsg";
import { Link } from "react-router-dom";
import { getUserOrders } from "../../redux/features/order/orderService";
const Orders = () => {
  const { loading, orders, error } = useSelector(
    (state) => state.orderReducers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex flex-col gap-2">
        <div className="w-full h-14 bg-gray-300 animate-pulse"></div>
        <div className="w-full h-14 bg-gray-300 animate-pulse"></div>
        <div className="w-full h-14 bg-gray-300 animate-pulse"></div>
        <div className="w-full h-14 bg-gray-300 animate-pulse"></div>
        <div className="w-full h-14 bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  if (error) {
    return <ErrorMsg error={error} />;
  }

  if (orders?.length <= 0) {
    return (
      <div className="py-5">
        <img src="/images/empty.svg" alt="" className=" w-1/2 mx-auto" />
        <div className="text-center">
          <h2 className="mt-2 lg:text-3xl text-xl font-bold uppercase">
            Couldn't find any order.
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
  }

  return (
    <section>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-sm text-gray-100 uppercase bg-gray-900">
            <tr>
              <th scope="col" className="py-5 px-6">
                Product name
              </th>

              <th scope="col" className="py-5 px-6">
                Category
              </th>
              <th scope="col" className="py-5 px-6">
                Amount
              </th>

              <th scope="col" className="py-5 px-6">
                Paid Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => {
              return (
                <tr key={order._id} className="bg-white border-b text-gray-600">
                  <th className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap">
                    {order?.productInfo?.name}
                  </th>
                  <td className="py-3 px-6 capitalize">
                    {order?.productInfo?.category}
                  </td>
                  <td className="py-3 px-6">${order?.amount}</td>
                  <td className="text-center py-3 px-6 text-white capitalize text-sm ">
                    <button
                      disabled={order?.isPaid}
                      className="border text-gray-900 px-5 border-gray-300 block py-2 rounded  capitalize"
                    >
                      {order?.isPaid ? "Paid" : "pay now"}
                    </button>
                  </td>
                </tr>
              );
            })}{" "}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
