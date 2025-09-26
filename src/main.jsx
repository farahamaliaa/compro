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
import Portofolio from "./Pages/Portofolio/Portofolio.jsx";
import Profile from "./Pages/Profile.jsx";
import RootLayout from "./components/Layouts/RootLayout.jsx";
import Product from "./Pages/Product/Product.jsx";
import Index from "./Pages/Product/Kategori/Index.jsx";
import Software from "./Pages/Product/Kategori/Software.jsx";
import Website from "./Pages/Product/Kategori/Website.jsx";
import Mobile from "./Pages/Product/Kategori/Mobile.jsx";
import StructureUsaha from "./Pages/About/StructureUsaha.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashoard /> },
      { path: "Dashboard", element: <Dashoard /> },
      { path: "structure-organisations", element: <StructureOrganisations /> },
      { path: "portofolio", element: <Portofolio /> },
      { path: "profile", element: <Profile/>},
      { path: "logo", element: <LogoPhilosophy /> },
      { path: "team", element: <Team /> },


        {
        path: "product",
        element: <Product />,
        children: [
          { index: true, element: <Index /> },      // /product
          { path: "software", element: <Software /> }, // /product/software
          { path: "website", element: <Website /> },   // /product/website
          { path: "mobile", element: <Mobile /> },     // /product/mobile
        ],
      },
      { path: "structure-usaha", element: <StructureUsaha /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
