import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./layouts/mainLayout";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import "./index.module.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Portfolio />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<AboutMe />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
