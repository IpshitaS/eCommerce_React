import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/about",
        element: <About />,
        children: [
          {
            path:"/about/profile",
            element: <Profile />,
          },
        ]
      },
      {
        path:"/contact",
        element: <Contact />,
      },
      {
        path:"/cart",
        element: <Cart />,
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantsMenu />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);