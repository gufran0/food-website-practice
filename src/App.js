import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  // authentication code

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Gufran Rahman",
    };
    setUserInfo(data?.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app">
          <Header />
          <Outlet></Outlet>
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
