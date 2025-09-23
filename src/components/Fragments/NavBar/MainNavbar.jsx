import { useEffect } from "react";
import LinkTo from "../../Elements/Links/link";
import Aos from "aos";
import 'aos/dist/aos.css'

const MainNavbar = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
    return (
      <>
     
    <nav data-aos='fade-down' className="bg-white shadow-sm w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="images/logo/hummatech-dark.png" 
            alt="Logo"
            className="h-10 w-50"
          />
        </div>


        <div className="hidden md:flex space-x-8 text-gray-800 font-medium">

          <div className="relative group cursor-pointer">
            <span>Profile ▾</span>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">

              <LinkTo text="Visi & Misi"></LinkTo>
              <LinkTo text="Logo"></LinkTo>
              <LinkTo text="Team"></LinkTo>
              
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <span>Organisation ▾</span>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
              <LinkTo to="#" text= "Development"></LinkTo>
              
            </div>
          </div>

          <a href="#">Home</a>

          <div className="relative group cursor-pointer">
            <span>About ▾</span>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
              <LinkTo to="#" text="Structure"></LinkTo>
              <LinkTo to="#" text="Structure Organisation"></LinkTo>
              <LinkTo to="#" text="Structure Business"></LinkTo>
              <LinkTo to="#" text="Others"></LinkTo>
            </div>  
          </div>
        </div>


        <div>
          <a
            href="#"
            className="px-5 py-2 border border-black rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            Contact Us!
          </a>
        </div>
      </div>
    </nav>
      
      </>
    )
}
export default MainNavbar;