import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import SubHeader from "./components/SubHeader";

const About = lazy( () => import("./components/About"))
const InstaMart = lazy( () => import("./components/InstaMart")) 
const InstaDelivery = lazy( () => import("./components/InstaDelivery"))
const FreshMeat = lazy( () => import("./components/FreshMeat"))

const AppLayout = () => {
  return (
    <>
      <Header />
      <SubHeader />
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
        element: <Suspense fallback= {<h1>loading....</h1>}><About /></Suspense>,
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
        path:"/restraunt/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path:"/instamart",
        element: (
        <Suspense fallback ={<Shimmer />}>
          <InstaMart />
        </Suspense>
        ),
      },
      {
        path:"/insta_delivery",
        element: (
        <Suspense fallback ={<Shimmer />}>
          <InstaDelivery />
        </Suspense>
        ),
      },
      {
        path:"/fresh_meat",
        element: (
        <Suspense fallback ={<Shimmer />}>
          <FreshMeat />
        </Suspense>
        ),
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);