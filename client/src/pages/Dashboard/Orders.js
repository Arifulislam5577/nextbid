import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import ErrorMsg from "../../components/ErrorMsg";
import { getUserOrders } from "../../redux/features/order/orderService";
import TableLoader from "../../components/TableLoader";
import EmptyPage from "../../components/EmptyPage";
const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const [methodName, setMethodName] = useState("");
  const { loading, orders, error } = useSelector(
    (state) => state.orderReducers
  );
  const dispatch = useDispatch();

  const handlePayment = (order) => {
    console.log(order);
    setShowModal(true);
  };

  console.log(methodName);
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

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
      <div
        className={`fixed inset-0 z-10 shadow-lg ${showModal ? "" : "hidden"}`}
      >
        <div className="flex items-center justify-center h-screen ">
          <div className="bg-gray-200 p-10 rounded-lg relative">
            <button
              className="absolute right-5 top-5"
              onClick={() => setShowModal(!showModal)}
            >
              <FaTimes />
            </button>
            <h1 className="text-base mb-3 text-gray-900">
              Select Payment Method
            </h1>

            <div className="flex flex-col items-center justify-center gap-3">
              <button
                onClick={() => setMethodName("Stripe")}
                className="py-3.5 rounded w-full block bg-slate-900 text-white text-base"
              >
                Stripe
              </button>

              <button
                onClick={() => setMethodName("Paypal")}
                className="py-3.5 w-full block bg-orange-600 text-white text-base rounded"
              >
                Paypal
              </button>

              <button
                onClick={() => setMethodName("SSLCommerez")}
                className="py-3.5 w-full block bg-blue-600 text-white text-base rounded"
              >
                SSLCommerez
              </button>
            </div>
          </div>
        </div>
      </div>
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
                      onClick={() => handlePayment(order?.productInfo)}
                      disabled={order?.isPaid}
                      className="border text-gray-900 px-5 border-gray-300 block py-2 rounded  capitalize"
                    >
                      {order?.isPaid ? "Paid" : "pay now"}
                    </button>
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
