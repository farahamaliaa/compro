import { FaHome } from "react-icons/fa";
import MainNavbar from "../../components/Fragments/NavBar/MainNavbar";
import Footer from "../../components/Fragments/Footer/MainFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import portofolio from "./dataPortofolio";

export default function Portofolio() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavbar />

      {/* Banner */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src="/images/banner/33.jpg"
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Portofolio
          </h1>
          <nav className="flex items-center space-x-2 text-white text-sm md:text-base pt-3">
            <div className="flex items-center space-x-1">
              <FaHome size={16} />
              <span className="font-medium">HOME</span>
            </div>
            <div className="bg-white w-3 h-px"></div>
            <span className="font-medium">PORTOFOLIO</span>
          </nav>
        </div>
      </div>

      {/* Portfolio List */}
      <section className="relative max-w-6xl mx-auto px-4 md:px-12 lg:px-4 py-36 lg:space-y-28 space-y-8">

        {portofolio.map((p, i) => (
          <div key={p.id} className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Kalau genap → teks kiri, gambar kanan */}
            {i % 2 === 0 ? (
              <>
                {/* Text Section */}
                <div
                  className="flex flex-col justify-between px-3"
                  data-aos="fade-right"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-start mb-4 text-gray-800">
                      {p.title}
                    </h2>

                    {/* Image Mobile */}
                    <div className="block lg:hidden justify-center mb-4">
                      <div className="w-full max-w-3xl mx-auto aspect-video rounded-sm overflow-hidden shadow-lg">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full transform hover:scale-105 transition duration-500"
                        />
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed text-justify">
                      {p.desc}
                    </p>

                    <div className="flex justify-start gap-3 mb-12">
                      <button
                        className="w-1/2.5 lg:w-1/3 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold shadow-md text-sm md:text-base"
                        onClick={() => navigate(`/portofolio/${p.id}`)}
                      >
                        Lihat Detail
                      </button>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2.5 lg:w-1/3 px-4 py-3 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-lg hover:opacity-90 transition shadow-md text-sm md:text-base text-center"
                      >
                        Kunjungi Website
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image Desktop */}
                <div
                  className="hidden lg:flex justify-center"
                  data-aos="fade-right"
                >
                  <div className="w-full max-w-3xl lg:max-w-xl aspect-video rounded-sm overflow-hidden shadow-lg">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Image Desktop */}
                <div
                  className="hidden lg:flex justify-center"
                  data-aos="fade-left"
                >
                  <div className="w-full max-w-3xl lg:max-w-xl aspect-video rounded-sm overflow-hidden shadow-lg">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div
                  className="flex flex-col justify-between px-3"
                  data-aos="fade-left"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-start mb-4 text-gray-800">
                      {p.title}
                    </h2>

                    {/* Image Mobile */}
                    <div className="block lg:hidden justify-center mb-4">
                      <div className="w-full max-w-3xl aspect-video rounded-sm overflow-hidden shadow-lg">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full transform hover:scale-105 transition duration-500"
                        />
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed text-justify">
                      {p.desc}
                    </p>

                    <div className="flex justify-start gap-3 mb-12">
                      <button
                        className="w-1/2.5 lg:w-1/3 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold shadow-md text-sm md:text-base"
                        onClick={() => navigate(`/portofolio/${p.id}`)}
                      >
                        Lihat Detail
                      </button>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2.5 lg:w-1/3 px-4 py-3 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-lg hover:opacity-90 transition shadow-md text-sm md:text-base text-center"
                      >
                        Kunjungi Website
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
