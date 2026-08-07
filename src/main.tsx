// CSS imports
import "./index.css";

// React imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React Router imports
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./components/Widgets/ErrorPage.tsx";
import { MiniMover } from "./components/Widgets/MoveWindow.tsx";

// TODO: different error page for MiniMover
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/window-mover",
    element: <MiniMover />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
