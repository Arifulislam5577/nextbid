import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../../components/ErrorMsg";
import {
  createPayment,
  getUserOrders,
} from "../../redux/features/order/orderService";
import TableLoader from "../../components/TableLoader";
import EmptyPage from "../../components/EmptyPage";

const Orders = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const { loading, orders, error, url, paymentLoad } = useSelector(
    (state) => state.orderReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  useEffect(() => {
    if (url) {
      window.location.assign(url);
    }
  }, [url]);

  const handlePayment = (orderId) => {
    setSelectedProduct(orderId);
    dispatch(createPayment(orderId));
  };

  if (loading) {
    return <TableLoader />;
  }

  if (error) {
    return <ErrorMsg error={error} />;
  }

  if (orders?.length <= 0) {
    return <EmptyPage name="order" />;
  }

  return (
    <section className="relative">
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
                    {order?.isPaid ? (
                      <button
                        disabled={order?.isPaid}
                        className="border text-gray-900 px-5 border-gray-300 block py-2 rounded  capitalize"
                      >
                        Paid
                      </button>
                    ) : (
                      <button
                        disabled={paymentLoad}
                        onClick={() => handlePayment(order._id)}
                        className="border text-gray-100 px-5 bg-gray-900 block py-2 rounded  capitalize"
                      >
                        {selectedProduct === order._id
                          ? "Loading..."
                          : "Pay Now"}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
