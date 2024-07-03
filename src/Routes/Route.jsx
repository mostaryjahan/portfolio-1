import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layOuts/Main";
import Home from "../Home/Home"
import About from "../pages/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    },
  ]);


  