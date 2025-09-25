import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHome } from "react-icons/fa";
import MainNavbar from "../../components/Fragments/NavBar/MainNavbar";
import Footer from "../../components/Fragments/Footer/MainFooter";
import Map from "/images/map.svg";

const Usaha = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full">
      <MainNavbar />
      
      <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/images/banner/10.jpg')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
            <div className="relative z-20 text-center" data-aos="fade-down">
                <h1 className="text-white text-3xl font-bold" data-aos="fade-down">
            Struktur Usaha
                </h1>
                    <h4
                        className="text-sm text-white/80 mt-4 font-mono"
                        data-aos="fade-down" data-aos-delay="200">
                        <span className="inline-flex items-center gap-1">
                            <FaHome className="inline-block mb-0.5 mr-1" />
                            <span>BERANDA</span>
                        </span>
                            {' '} - <span>TENTANG KAMI</span> - <span>STRUKTUR PERUSAHAN</span>
                    </h4>
            </div>
     
        </div>

            <div>
                <div className="text-center mb-12" data-aos="fade-in">
                    <h2 className="text-blue-600 text-2xl font-semibold uppercase mt-10"
                        data-aos="fade-down">
                    <span className="font-mono bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                        STRUKTUR USAHA
                    </span>
                    </h2>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2"
                        data-aos="fade-up"
                        data-aos-delay="200">
                        Struktur Perusahaan yang Membawa Inovasi <br /> dan Keberlanjutan
                    </h1>

                        <div className="flex justify-center gap-2">
                            <div className="w-3 h-0.5 bg-blue-500 lg:mt-5 mt-3"></div>
                            <div className="w-12 h-0.5 bg-blue-500 lg:mt-5 mt-3"></div>
                        </div>
                </div>

                    <img src="/images/map.svg"
                         alt={Map}
                         className="absolute inset-0 w-full h-full object-cover rounded-lg -z-10 mt-96"
                         draggable="false"/>

                <div className="flex justify-center mb-16">
                    <div className="relative max-w-4xl w-full"
                         data-aos="zoom-in"
                         data-aos-delay="300">

                    <img src="/images/stusaha.jpg"
                         alt="Struktur Usaha PT Humma Teknologi Indonesia"
                         className="relative w-full h-auto rounded-lg z-20"/>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  );
};

export default Usaha;
