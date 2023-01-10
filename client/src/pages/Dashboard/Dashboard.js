import React from "react";
import { ImHammer2 } from "react-icons/im";
import { VscSignOut } from "react-icons/vsc";
import { BiStoreAlt, BiHeart } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/features/auth/authService";
const Dashboard = () => {
  const { user } = useSelector((state) => state.authReducers);
  const dispatch = useDispatch();

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 bg-white shadow-sm rounded">
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
                      <BiStoreAlt />
                      Orders
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <Link
                      to={`/dashboard/add`}
                      className="flex items-center gap-2  w-full"
                    >
                      <BiHeart />
                      Add Product
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 border-b pb-2 pl-5 hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <Link
                      to={`/dashboard/mybids`}
                      className="flex items-center gap-2  w-full"
                    >
                      <ImHammer2 />
                      My Bids
                    </Link>
                  </li>
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
    </section>
  );
};

export default Dashboard;
