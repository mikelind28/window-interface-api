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
import type { Style } from "./types/types.ts";


export const miniMoverStyle: Style = {
  containerClass: "",
  h1Class: "",
  h2Class: "",
  h3Class: "",
  h4Class: "",
  pClass: "",
  spanClass1: "",
  spanClass2: "inline text-xl font-extralight text-lime-600 text-shadow-none",
  inputClass: "block  w-13 p-1 text-base text-slate-950 bg-blue-50 rounded-sm caret-blue-500 focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 focus:outline-none invalid:border-red-500",
  buttonClass:
    "bg-blue-300 m-2 p-4 text-slate-950 outline-2 outline-offset-2 outline-slate-300 rounded-lg hover:bg-slate-500 active:bg-slate-600",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/window-mover",
    element: <MiniMover style={miniMoverStyle}/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
