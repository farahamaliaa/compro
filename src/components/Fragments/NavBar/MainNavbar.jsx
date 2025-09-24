import { useEffect, useState } from "react";
import LinkTo from "../../Elements/Links/link";
import Aos from "aos";
import "aos/dist/aos.css";

const MainNavbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAboutOpen && !event.target.closest(".about-dropdown")) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAboutOpen]);
  return (
    <>
      <nav data-aos="fade-down" className="bg-white shadow-sm w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="images/logo/hummatech-dark.png"
              alt="Logo"
              className="h-10 w-50"
            />
          </div>

          <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
            <div className="relative group cursor-pointer">
              <a href="/Dashboard">Home</a>
            </div>

            <div className="relative group cursor-pointer">
              <a href="#">Berita</a>
            </div>

            <div className="relative group cursor-pointer">
              <a href="#">Hubungi</a>
            </div>

            <div
              className="relative cursor-pointer about-dropdown"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="flex items-center"
                aria-expanded={isAboutOpen}
                aria-haspopup="true"
              >
                About ▾
              </button>
              {isAboutOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-100 translate-y-1 transition-all">
                  <LinkTo to="#" text="Profile"></LinkTo>
                  <LinkTo
                    to="/structure-organisations"
                    text="Structure Organisation"
                  ></LinkTo>
                  <LinkTo to="#" text="Structure Business"></LinkTo>
                  <LinkTo to="#" text="Visi & Misi"></LinkTo>
                  <LinkTo to="#" text="Logo"></LinkTo>
                  <LinkTo to="/Team" text="Team"></LinkTo>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#"
              className="px-5 py-2 border border-black rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Contact Us!
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } border-t border-gray-200`}
        >
          <div className="px-6 py-4 space-y-4 text-gray-800 font-medium">
            <a href="/Dashboard" className="block">
              Home
            </a>
            <a href="#" className="block">
              Berita
            </a>
            <a href="#" className="block">
              Hubungi
            </a>

            <div
              className="about-dropdown"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <button
                className="w-full text-left flex items-center justify-between"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <span>About</span>
                <span>{isAboutOpen ? "▴" : "▾"}</span>
              </button>
              {isAboutOpen && (
                <div className="mt-2 ml-2 rounded-md">
                  <LinkTo to="#" text="Profile"></LinkTo>
                  <LinkTo
                    to="/structure-organisations"
                    text="Structure Organisation"
                  ></LinkTo>
                  <LinkTo to="#" text="Structure Business"></LinkTo>
                  <LinkTo to="#" text="Visi & Misi"></LinkTo>
                  <LinkTo to="#" text="Logo"></LinkTo>
                  <LinkTo to="/team" text="Team"></LinkTo>
                </div>
              )}
            </div>

            <a
              href="#"
              className="inline-block mt-2 px-5 py-2 border border-black rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Contact Us!
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default MainNavbar;
