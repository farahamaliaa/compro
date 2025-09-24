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
            <div className="relative w-full h-56 overflow-hidden -z-10">
            <img src="/images/banner/10.jpg" alt="Banner" className="w-full h-full object-cover object-center"/>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4" data-aos="fade-down">
                <h1 className="text-white text-2xl md:text-4xl  font-bold">FILOSOFI LOGO</h1>
                <nav className="flex items-center space-x-2 text-white text-sm md:text-base pt-3">
                    <div className="flex items-center space-x-1">
                        <BsHouseFill size={16}/>
                        <span className="font-medium">HOME</span>
                    </div>
                    <div className="bg-white w-3 h-px"></div>
                    <span className="font-medium">ABOUT </span>
                </nav>
            </div>
            </div>
        </div>

        <div className="pb-16">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center pt-16 mb-8 gap-16">
            <div className="flex-shrink-0 flex justify-center lg:justify-start" data-aos="zoom-in">
                <img src="/images/logo/mobilelogo.png" alt="Hummatech Logo" className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-96 lg:mt-10 object-contain" />
            </div>
            <div data-aos="fade-up">
                <h1 className="font-bold text-2xl md:text-4xl pt-2 pb-2">Filosofi Logo</h1>
                <ol className="list-decimal list-outside pl-6 lg:list-inside lg:pl-0 space-y-2 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                {philosophyPoints.map((point, index) => (
                    <li key={index} data-aos="fade-up" data-aos-delay={index * 150}>{point}</li>
                ))}
            </ol>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LogoPhilosophy