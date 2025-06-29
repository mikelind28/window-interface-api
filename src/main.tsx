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
import { styleClass1 } from "./styles/styles.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/window-mover",
    element: <MiniMover style={styleClass1}/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
