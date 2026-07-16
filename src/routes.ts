import { createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import CatalogLayout from "./layouts/CatalogLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const app_routes = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: CatalogLayout },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);
