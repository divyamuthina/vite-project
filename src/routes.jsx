import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "./pages";
import { PageNotFound } from "./pages/unAuthenticated";

export const router = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
