import { createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import CatalogLayout from "./layouts/CatalogLayout";

export const app_routes = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "/products", Component: CatalogLayout },
    ],
  },
]);
