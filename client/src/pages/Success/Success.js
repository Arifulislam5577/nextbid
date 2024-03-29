import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { updatePayment } from "../../redux/features/order/orderService";
const Success = () => {
  useTitle("Payment Success");
  const { success } = useSelector((state) => state.orderReducers);
  const { search } = useLocation();
  const navigate = useNavigate();
  const sessionToken = search?.split("=")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionToken) {
      dispatch(updatePayment(sessionToken));
    }

    if (success) {
      navigate("/dashboard");
    }
  }, [navigate, sessionToken, dispatch, success]);

  return (
    <div className=" lg:py-10 py-5">
      <div className=" md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-orange-600 w-24 h-24 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> We Will Contact You soon! </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
