import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AllProducts from "../pages/AllProducts/AllProducts";
import Bids from "../pages/Dashboard/Bids";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Dashboard/Orders";
import Profile from "../pages/Dashboard/Profile";
import Wishlist from "../pages/Dashboard/Wishlist";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Signin from "../pages/Signin/Signin";

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <Signin /> },
      { path: "/products", element: <AllProducts /> },
      { path: "/product/:id", element: <ProductDetails /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: <Profile /> },
          { path: "orders", element: <Orders /> },
          { path: "wishlist", element: <Wishlist /> },
          { path: "mybids", element: <Bids /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default RootRoutes;
