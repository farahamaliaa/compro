import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { BsHouseFill } from "react-icons/bs";
import { useEffect } from "react";

const LogoPhilosophy = () => {
    useEffect(() => {
        Aos.init({ duration: 800, once: true});
    }, []);
    
    const philosophyPoints = [
  "Huruf H sebagai huruf inisial dari Hummatech.",
  "Terdapat simbol genteng diatas huruf H membentuk rumah sebagai simbol untuk rumah produksi teknologi.",
  "Warna biru merupakan warna yang menjelaskan tentang profesionalitas.",
  "Nama Humma berasal dari bahasa arab yang berarti 'bersama' yang bermakna bahwa Hummatech ini perusahaan yang dikembangkan bersama-sama, baik pihak internal maupun bersama pihak eksternal, sehingga membentuk ekosistem kolaborasi untuk berkembang bersama.",
  "Tech merupakan inisial nama dari Technology yang merupakan core business (bisnis utama) dari perusahaan Hummatech."
];

  return (
    <div className="min-h-screen px-2">
        <div>
            <div className="relative w-full h-64 overflow-hidden -z-10">
            <img src="/images/banner/10.jpg" alt="Banner" className="w-full h-full object-cover object-center"/>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4" data-aos="fade-down">
                <h1 className="text-white text-2xl md:text-4xl  font-bold">Tentang Kami</h1>
                <nav className="flex items-center space-x-2 text-white text-sm md:text-base pt-3">
                    <div className="flex items-center space-x-1">
                        <BsHouseFill size={16}/>
                        <span className="font-medium">HOME</span>
                    </div>
                    <div className="bg-white w-3 h-px"></div>
                    <span className="font-medium">FILOSOFI LOGO </span>
                </nav>
            </div>
            </div>
        </div>

            <div className="text-center mt-12" data-aos="fade-up">
                <h2 className="text-sm md:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-600 to-blue-50 bg-clip-text text-transparent">FILOSOFI LOGO</h2>
                <h1 className="text-2xl md:text-4xl font-bold lg:mt-1">Logo Hummatech</h1>
                <div className="flex justify-center gap-2">
                    <div className="w-3 h-0.5 bg-blue-500 lg:mt-5 mt-3"></div>
                    <div className="w-12 h-0.5 bg-blue-500 lg:mt-5 mt-3"></div>
                </div>
            </div>
        <div className="pb-8 ">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:pt-5 pt-8 mb-8 gap-16">
            <div className="flex-shrink-0 flex justify-center lg:justify-start" data-aos="zoom-in">
                <img src="/images/logo/mobilelogo.png" alt="Hummatech Logo" className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-96 lg:mt-10 object-contain" />
            </div>
            <div data-aos="fade-up">
                <ol className="list-decimal list-outside pl-6 lg:list-inside lg:pl-0 space-y-2 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                {philosophyPoints.map((point, index) => (
                    <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>{point}</li>
                ))}
            </ol>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LogoPhilosophy