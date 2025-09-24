import React, { useEffect } from "react";
import LinkTo from "../../Elements/Links/link";
import AOS from "aos";
import "aos/dist/aos.css";

const MainProfile = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full">

      {/* ===== Banner ===== */}
      <div
        className="w-full h-[250px] relative bg-center bg-cover py-16 text-center"
        style={{ backgroundImage: "url('/images/banner/10.jpg')" }}
        data-aos="fade-down"
        data-aos-delay="50"
      >
        {/* Overlay agar banner lebih gelap */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 
            className="mt-2 text-3xl md:text-4xl font-bold text-white"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            PROFILE
          </h1>
          <h2 
            className="text-lg text-white"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            BERANDA - TENTANG KAMI - PROFILE
          </h2>
        </div>
      </div>

      {/* ===== Konten Utama ===== */}
      <section
        className="
          max-w-3xl mx-auto px-6 py-16
          grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center
        "
      >
        {/* Deskripsi */}
        <div className="order-2 md:order-1">
          <p 
            className="font-semibold bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent w-fit"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            PROFILE PERUSAHAAN
          </p>
          <h2 
            className="text-3xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Menghadirkan Solusi Terintegrasi untuk Masa Depan Digital
          </h2>
          <p 
            className="text-gray-700 mb-6 leading-relaxed"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            Kini <span className="text-blue-500">Hummatect</span> bertransformasi menjadi perusahaan yang mampu
            menjawab tantangan di era revolusi industri 4.0 dengan menciptakan
            produk berbasis integrated system berupa perangkat lunak berbasis
            web dan mobile, Internet of Things (IoT), Artificial Intelligence (AI),
            Game, dan Augmented Reality.
          </p>

          <a
            href="/assets/portofolio.pdf"
            download
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Unduh Portofolio
          </a>
        </div>

        {/* Foto dengan Shape yang Diperbaiki */}
        <div className="relative flex justify-center order-1 md:order-2">
          {/* Shape dengan warna yang terlihat */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
             <img
            src="/images/about/5.jpg"
            alt="Profile"
            className="relative rounded-lg shadow-lg w-full max-w-md transform"
            data-aos="fade-in"
            data-aos-delay="200"
          />
          </div>
         <img
              src="/images/shape/1.png"
              alt="segitiga"
              className="w-4/5 h-4/5 object-contain opacity-70 transform rotate-[25deg] -translate-y-30 translate-x-35 "
              data-aos="fade-left"
            />
        </div>
      </section>
    </div>
  );
};

export default MainProfile;