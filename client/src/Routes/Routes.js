import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AllProducts from "../pages/AllProducts/AllProducts";
import Bids from "../pages/Dashboard/Bids";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Dashboard/Orders";
import AddProduct from "../pages/Dashboard/AddProduct";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Signin from "../pages/Signin/Signin";
import PrivateRoute from "./PrivateRoutes";

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
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Orders /> },
          { path: "add", element: <AddProduct /> },
          { path: "mybids", element: <Bids /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default RootRoutes;
