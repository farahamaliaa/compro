import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'aos/dist/aos.css';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainNavbar from './components/Fragments/NavBar/MainNavbar'
import Dashoard from './Pages/Dashboard'
import Structure from './Pages/About/StructureOrganisations.jsx'
import LogoPhilosophy from './Pages/Profile/LogoPhilosophy.jsx'
import StructureOrganisations from './Pages/About/StructureOrganisations.jsx'


const router = createBrowserRouter([
  {
    path: "",
    element: <Dashoard></Dashoard>
  },
  {
    path: "structure-organisations",
    element: <StructureOrganisations></StructureOrganisations>
  },
  {
    path: "logo",
    element: <LogoPhilosophy></LogoPhilosophy>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
