import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "./pages";
import { PageNotFound } from "./pages/unAuthenticated";

export const router = () =>
  createBrowserRouter([
    {
      path: "/vite-project",
      element: <Home />,
    },
    {
      path: "/vite-project/about",
      element: <About />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
