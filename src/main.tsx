import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ui/styles/index.css";
import { RouterProvider } from "react-router";
import { app_routes } from "./routes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={app_routes} />
  </StrictMode>,
);
