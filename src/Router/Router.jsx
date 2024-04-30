import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About/About";
import Buy from "../Pages/Buy";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/buy",
        element: <Buy/>
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default Router;
