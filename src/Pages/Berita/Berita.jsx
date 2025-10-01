import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/Fragments/NavBar/MainNavbar";
import Footer from "../../components/Fragments/Footer/MainFooter";
import "aos/dist/aos.css";
import AOS from "aos";

const Berita = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

    const newsList = Array(6).fill({
    category: "MAGANG",
    title:
      "Sukses Gelar UKK Bidang RPL dan DKV di SMKN 3 Pamekasan: Uji Hardskill dan Softskill Siswa",
    date: "15 Mei 2024",
    image: "/images/background/5.jpg",
    description:
      "Potter ipsum wand elf parchment wingardium. Dobby prefect's rd nitwit betrayal allivanders mimubulus maze...",
  });


  const categories = [
    { name: "Semua", count: 50 },
    { name: "Kunjungan Industri", count: 15 },
    { name: "Kelas Industri", count: 10 },
    { name: "Prestasi", count: 15 },
    { name: "Uji Kompetensi Keahlian", count: 10 }
  ];

  return (
    <>
      <MainNavbar />
      <div className="min-h-screen bg-white">
        {/* ===== Banner ===== */}
        <section
          className="relative h-[220px] md:h-[280px] bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: "url('/images/banner/10.jpg')" }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white">
            <h1 
              className="text-3xl md:text-4xl font-bold"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              BERITA
            </h1>
            <p 
              className="text-sm mt-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Beranda - Berita
            </p>
          </div>
        </section>

        {/* ===== Main Content ===== */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* ---- Sidebar ---- */}
          <aside 
            className="lg:col-span-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="border rounded-md p-5 shadow-sm">
              <h2 className="text-lg font-bold mb-4 pb-2 border-b-2 border-blue-500 text-gray-700">
                Kategori Berita
              </h2>
              <ul className="space-y-3">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center cursor-pointer hover:text-blue-600 transition"
                    data-aos="fade-right"
                    data-aos-delay={300 + (idx * 100)}
                  >
                    <span className="font-bold text-gray-700">{cat.name}</span>
                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-0.5 font-bold rounded-full min-w-[28px] text-center">
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ---- Daftar Berita ---- */}
          <main className="lg:col-span-3">
            <div className="space-y-6">
              {newsList.map((item, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 border-b pb-4"
                  data-aos="fade-up"
                  data-aos-delay={300 + (i % 5) * 100}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-36 h-24 object-cover rounded-md flex-shrink-0"
                    data-aos="zoom-in"
                    data-aos-delay={400 + (i % 5) * 100}
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-sm text-gray-500 font-bold">
                        {item.category} • {item.date}
                      </span>
                      <h3 className="text-lg font-semibold mt-1 hover:text-blue-600 transition-colors cursor-pointer text-blue-700">
                        {item.title}
                      </h3>
                    </div>
                   <button
                      className="
                        mt-2 px-3 py-1
                        bg-blue-500 text-white text-xs font-medium
                        rounded-full
                        hover:bg-blue-600
                        transition-colors duration-300
                        w-fit
                      "
                      data-aos="fade-left"
                      data-aos-delay={500 + (i % 5) * 100}
                    >
                      Baca Selengkapnya
                  </button>

                  </div>
                </div>
              ))}
            </div>

            {/* ---- Pagination ---- */}
            <div 
              className="flex justify-center items-center gap-2 mt-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {["1", "2", "3", "4"].map((page, index) => (
                <button
                  key={page}
                  className="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white transition font-bold text-gray-700"
                  data-aos="zoom-in"
                  data-aos-delay={500 + (index * 100)}
                >
                  {page}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Berita;