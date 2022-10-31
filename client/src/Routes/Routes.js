import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signin from "../pages/Signin/Signin";

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <Signin /> },
    ],
  },
]);

export default RootRoutes;
