import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "./pages";
import { PageNotFound } from "./pages/unAuthenticated";

export const router = () =>
  createBrowserRouter([
    {
      path: "/My-First-React-App",
      element: <Home />,
    },
    {
      path: "/My-First-React-App/about",
      element: <About />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
