import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "aos/dist/aos.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavbar from "./components/Fragments/NavBar/MainNavbar";
import Dashoard from "./Pages/Dashboard";
import Structure from "./Pages/About/StructureOrganisations.jsx";
import LogoPhilosophy from "./Pages/Profile/LogoPhilosophy.jsx";
import Team from "./Pages/Profile/Team.jsx";
import StructureOrganisations from "./Pages/About/StructureOrganisations.jsx";
import RootLayout from "./components/Layouts/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashoard /> },
      { path: "Dashboard", element: <Dashoard /> },
      { path: "structure-organisations", element: <StructureOrganisations /> },
      { path: "logo", element: <LogoPhilosophy /> },
      { path: "team", element: <Team /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
