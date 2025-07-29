import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Categories from "../components/Categories";
import CoffeeCard from "../components/CoffeeCard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children:[
          {
            path:"/",
            element:<CoffeeCard></CoffeeCard>,
            loader: () => fetch("/coffees.json"),
          },
          {
            path:"/category/:category",
            element:<CoffeeCard></CoffeeCard>,
            loader: () => fetch("/coffees.json"),
          },
        ]
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("/coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

export default router;