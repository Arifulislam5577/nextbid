import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import MainLoader from "./components/MainLoader";
import { auth } from "./config/firebase.config";
import { userInDB } from "./redux/features/auth/authService";
import { isLoginUser } from "./redux/features/auth/authSlice";
import RootRoutes from "./Routes/Routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        localStorage.setItem("img", JSON.stringify(user?.photoURL));
        const token = await user.getIdToken();
        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
          dispatch(userInDB(token));
          return;
        } else {
          dispatch(isLoginUser(null));
          return;
        }
      }
      dispatch(isLoginUser(null));
    });

    return () => subscribe();
  }, [dispatch]);
  return (
    <RouterProvider router={RootRoutes} fallbackElement={<MainLoader />} />
  );
}

export default App;
