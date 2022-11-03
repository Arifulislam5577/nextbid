import { RouterProvider } from "react-router-dom";
import MainLoader from "./components/MainLoader";
import RootRoutes from "./Routes/Routes";

function App() {
  return (
    <RouterProvider router={RootRoutes} fallbackElement={<MainLoader />} />
  );
}

export default App;
