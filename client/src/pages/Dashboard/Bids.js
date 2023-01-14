import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyPage from "../../components/EmptyPage";
import ErrorMsg from "../../components/ErrorMsg";
import TableLoader from "../../components/TableLoader";
import { getUserBid } from "../../redux/features/productBids/productBidService";
const Bids = () => {
  const dispatch = useDispatch();
  const { loading, error, userBid } = useSelector((state) => state.productBid);

  useEffect(() => {
    dispatch(getUserBid());
  }, [dispatch]);

  if (loading) {
    return <TableLoader />;
  }

  if (error) {
    return <ErrorMsg error={error} />;
  }

  if (userBid?.length <= 0) {
    return <EmptyPage name="bids" />;
  }

  function checkStatus(isSold, isWinner) {
    if (isSold && isWinner) {
      return "winner";
    } else if (!isSold && !isWinner) {
      return "pending";
    } else if (isSold && !isWinner) {
      return "loser";
    }
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
                Bid
              </th>

              <th scope="col" className="py-5 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {userBid?.map((bid) => {
              return (
                <tr key={bid._id} className="bg-white border-b text-gray-600">
                  <th className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap">
                    {bid?.productInfo?.name}
                  </th>
                  <td className="py-3 px-6 capitalize">
                    {bid?.productInfo?.category}
                  </td>
                  <td className="py-3 px-6">${bid?.productInfo?.newPrice}</td>
                  <td className="py-3 px-6">${bid?.amount}</td>
                  <td className="text-center py-3 px-6 text-gray-900 capitalize text-sm ">
                    {checkStatus(bid?.productInfo?.isSold, bid?.isWinner)}
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

export default Bids;
