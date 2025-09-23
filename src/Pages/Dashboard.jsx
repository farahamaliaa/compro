import Footer from "../components/Fragments/Footer/MainFooter";
import { useState, useEffect } from "react";
import MainNavbar from "../components/Fragments/NavBar/MainNavbar";
import LogoPhilosophy from "./Profile/LogoPhilosophy";

const Dashoard = () => {
  const [loading, setLoading] = useState(true);
  const text = "HUMMATECH".split("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">

        <div className="w-16 h-16 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"></div>


        <div className="mt-6 flex space-x-2">
          {text.map((char, i) => (
            <span
              key={i}
              className="text-5xl font-bold"
              style={{
                animation: "wave 1.2s ease-in-out infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes wave {
            0%, 100% { color: #9ca3af; }  /* abu */
            50% { color: #111827; }       /* hitam */
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <MainNavbar />
      <LogoPhilosophy />
      <Footer />
    </>
  );
};

export default Dashoard;
