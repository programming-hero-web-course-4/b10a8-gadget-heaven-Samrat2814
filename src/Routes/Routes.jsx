import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import CoffeeDetails from "../Pages/CoffeeDetails";
import Cart from "../Components/Cart";
import WishList from "../Components/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/product.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/details/:id",
        element: <CoffeeDetails />,
        loader: () => fetch("/product.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true, // Default route for /dashboard
            element: <Cart />,
          },
          {
            path: "cart", // Relative to /dashboard
            element: <Cart />,
          },
          {
            path: "wishlist", // Relative to /dashboard
            element: <WishList />,
          },
        ],
      },
    ],
  },
]);

export default router;
