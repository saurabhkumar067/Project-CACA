import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectCaca from "./pages/ProjectCaca";
import ContributeIntership from "./pages/ContributeIntership";
import Instruments from "./pages/Instruments";
import Overview from "./pages/aboutSection/Overview";
import SchoolChildProtectionPolicy from "./pages/instrumentsSection/SchoolChildProtectionPolicy";
import Team from "./pages/aboutSection/Team";
import Resources from "./pages/ResourcesSection/Resources";
import ChildrenPicturebooks from "./pages/ResourcesSection/ChildrenPicturebooks";
import CharacterCanvas from "./pages/ResourcesSection/CharacterCanvas";
import SupplementaryWorksheets from "./pages/ResourcesSection/SupplementaryWorksheets";
import TeachersManual from "./pages/ResourcesSection/TeachersManual";
import ParentTeacherBooklets from "./pages/ResourcesSection/ParentTeacherBooklets";
import SupportStaffbooklets from "./pages/ResourcesSection/SupportStaffbooklets";
import Posters from "./pages/ResourcesSection/Posters";
import Video from "./pages/ResourcesSection/Video";
import Audios from "./pages/ResourcesSection/Audios";

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
          element: <Resources/>,
        },
        {
          path:"/resources/children-picture-books",
          element:<ChildrenPicturebooks/>
        },
        {
          path:"/resources/character-canvas",
          element:<CharacterCanvas/>
        },
        {
          path:"/resources/supplementary-worksheets",
          element:<SupplementaryWorksheets/>
        },
        {
          path:"/resources/teacher’s-manual",
          element:<TeachersManual/>
        },
        {
          path:"/resources/parent-–-teacher-booklets",
          element:<ParentTeacherBooklets/>
        },
        {
          path:"/resources/support-–-staff-booklets",
          element:<SupportStaffbooklets/>,
        },
        {
          path:"/resources/posters",
          element:<Posters/>
        },
        {
          path:"/resources/videos",
          element:<Video/>
        },
        {
          path:"/resources/audios",
          element:<Audios/>
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
