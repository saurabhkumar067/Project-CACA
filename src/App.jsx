import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectCaca from "./pages/ProjectCaca";
import ContributeIntership from "./pages/ContributeIntership";
import Instruments from "./pages/Instruments";
import Resources from "./pages/Resources";
import Overview from "./pages/aboutSection/Overview";
import SchoolChildProtectionPolicy from "./pages/instrumentsSection/SchoolChildProtectionPolicy";
import Team from "./pages/aboutSection/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutus",
          element: <About />,
        },
        {
          path: "/aboutus/overview",
          element: <About />,
        },
        {
          path: "/aboutus/team",
          element: <Team />,
        },
        {
          path: "/projectcaca",
          element: <ProjectCaca />,
        },
        {
          path: "/instruments",
          element: <Instruments />,
        },
        {
          path: "/instruments/school-child-protection-policy",
          element: <SchoolChildProtectionPolicy />,
        },
        {
          path: "/resources",
          element: <Resources />,
        },
        {
          path: "/contribute-internship",
          element: <ContributeIntership />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
