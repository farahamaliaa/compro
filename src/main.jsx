import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainNavbar from './components/Fragments/NavBar/MainNavbar'
import Dashoard from './Pages/Dashboard'
import Structure from './Pages/About/Structure.jsx'
import LogoPhilosophy from './Pages/Profile/LogoPhilosophy.jsx'
import Profile from './Pages/Profile.jsx'


const router = createBrowserRouter([
  {
    path: "",
    element: <Dashoard></Dashoard>
  },
  {
    path: "structure",
    element: <Structure></Structure>
  },
  {
    path: "profile",
    element: <Profile></Profile>
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
