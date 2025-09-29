import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import MainNavbar from "../../components/Fragments/NavBar/MainNavbar";
import Footer from "../../components/Fragments/Footer/MainFooter";

const VisiMisi = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const visiText =
    "Menjadi perusahaan penyedia produk dan jasa di bidang sistem informasi dan teknologi informasi terkemuka di Indonesia dan Mancanegara.";

  const misiList = [
    "Mengembangkan software dan hardware yang inovatif sesuai perkembangan teknologi terkini.",
    "Menciptakan teknologi yang membantu menyelesaikan masalah di masyarakat dan lembaga.",
    "Mendampingi klien untuk menyelesaikan masalah berbasis komputasi teknologi yang inovatif.",
    "Membangun jaringan kerja sama secara nasional dan internasional.",
    "Berperan dalam peningkatan skill teknologi di dunia pendidikan melalui program kelas industri."
  ];

  return (
    <>
      <MainNavbar />

      <div
        className="relative h-[250px] md:h-[300px] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner/10.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="relative z-10 text-center text-white"
          data-aos="fade-down"
        >
          <h1 className="text-3xl md:text-4xl font-bold">Visi & Misi</h1>
          <p className="text-sm mt-2">
            Beranda &nbsp;&gt;&nbsp; Tentang Kami &nbsp;&gt;&nbsp; Visi Misi
          </p>
        </div>
      </div>

      <section className="py-16">
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
              Visi & Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div
              className="bg-blue-600 text-white rounded-md p-6 shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold text-center mb-4 relative">
                <span className="before:absolute before:left-0 before:right-0 before:top-3 before:h-[2px] before:bg-white/50"></span>
                <span className="relative bg-blue-600 px-4">Visi</span>
              </h3>
              <p className="leading-relaxed">{visiText}</p>
            </div>

            {misiList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-gray-800 rounded-md p-6 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-xl font-bold text-center text-blue-600 mb-4 relative">
                  <span className="before:absolute before:left-0 before:right-0 before:top-3 before:h-[2px] before:bg-blue-400"></span>
                  <span className="relative bg-white px-4">Misi</span>
                </h3>
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VisiMisi;
