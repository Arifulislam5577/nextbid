import React from "react";
import { TbHammer } from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import { BsBox, BsBag, BsBagPlus, BsClipboardData } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useTitle from "../../hooks/useTitle";
import { logOut } from "../../redux/features/auth/authService";
const Dashboard = () => {
  useTitle("Dashboard");
  const { user } = useSelector((state) => state.authReducers);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1 w-full">
          <div className="p-5 bg-white shadow-sm rounded-md relative">
            <div className="mx-auto">
              <img
                src={user?.userImg}
                alt={user?.userName}
                className="h-28 w-28 p-2 border border-gray-200 bg-white rounded-full mx-auto "
              />
            </div>
            <div className="my-3">
              <ul className="text-sm text-gray-600 mt-4 flex flex-col gap-3">
                <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                  <Link
                    to={`/dashboard`}
                    className="flex items-center gap-2  w-full"
                  >
                    <BsBag />
                    Orders
                  </Link>
                </li>
                <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                  <Link
                    to={`/dashboard/myproducts`}
                    className="flex items-center gap-2  w-full"
                  >
                    <BsBox />
                    My Products
                  </Link>
                </li>

                <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                  <Link
                    to={`/dashboard/add`}
                    className="flex items-center gap-2  w-full"
                  >
                    <BsBagPlus />
                    Add Product
                  </Link>
                </li>
                <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                  <Link
                    to={`/dashboard/mybids`}
                    className="flex items-center gap-2  w-full"
                  >
                    <TbHammer />
                    My Bids
                  </Link>
                </li>

                {user?.isAdmin && (
                  <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <Link
                      to={`/admin`}
                      className="flex items-center gap-2  w-full"
                    >
                      <BsClipboardData />
                      Admin Dashboard
                    </Link>
                  </li>
                )}

                <li
                  className="flex items-center gap-2 pb-2 pl-5 hover:translate-x-2 transition-all hover:text-orange-600 duration-200 cursor-pointer"
                  onClick={() => dispatch(logOut)}
                >
                  <VscSignOut />
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
