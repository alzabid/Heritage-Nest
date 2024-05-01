import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About/About";
import Buy from "../Pages/Buy";
import Details from "../Pages/Details";
import Property from "../Pages/Property";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buy",
        element: <Buy />,
      },
      {
        path: "/property",
        element: <Property />,
      },
      {
        path: "/details",
        element: <Details/>
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default Router;
