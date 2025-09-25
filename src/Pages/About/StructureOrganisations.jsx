import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie, FaUserCog, FaMoneyBillWave, FaUsersCog, FaProjectDiagram, FaCheckCircle, FaBookOpen, FaBullhorn, FaWallet, FaMapMarkerAlt, FaCode, FaMobileAlt, FaServer, FaPaintBrush, FaLaptopCode, FaInstagram } from "react-icons/fa";
import MainNavbar from "../../components/Fragments/NavBar/MainNavbar";
import Footer from "../../components/Fragments/Footer/MainFooter";

const StructureOrganisations = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);


  return (
    <>
      <MainNavbar />
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section 
          className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('/images/background/3.jpg')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 text-center text-white px-6" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center text-sm md:text-base space-x-2 font-semibold">
              <Link to="/" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </Link>
              <Link
                to="/"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                BERANDA
              </Link>
              <span className="mx-1">—</span>
              <span className="text-white">STRUKTUR ORGANISASI</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            
            {/* Structure Organization Content */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent mb-4 tracking-wider uppercase">
                Struktur Organisasi
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
                Fondasi Keberhasilan dan Kolaborasi di Tempat Kerja
              </h2>
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="w-5 h-0.5 bg-[#1273EB]"></div>
                <div className="w-20 h-0.5 bg-[#1273EB]"></div>
              </div>
            </div>
            
            <div className="text-center mb-16" data-aos="zoom-in">
              <img
                src="/images/about/StructureOrganisations.png"
                alt="Struktur Organisasi"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Department Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Direktur",
                  description: "Memimpin seluruh kegiatan perusahaan, membuat keputusan strategis, dan memastikan visi serta misi tercapai.",
                  icon: <FaUserTie className="w-6 h-6" />,
                },
                {
                  title: "Wakil Direktur",
                  description: "Mendukung direktur, menggantikan peran direktur saat berhalangan, serta mengawasi pelaksanaan kebijakan perusahaan.",
                  icon: <FaUserCog className="w-6 h-6" />,
                },
                {
                  title: "Manajer Keuangan",
                  description: "Mengelola arus kas, menyusun laporan keuangan, dan merencanakan anggaran perusahaan.",
                  icon: <FaMoneyBillWave className="w-6 h-6" />,
                },
                {
                  title: "Manajer HRD",
                  description: "Bertanggung jawab dalam rekrutmen, pelatihan, dan pengembangan sumber daya manusia.",
                  icon: <FaUsersCog className="w-6 h-6" />,
                },
                {
                  title: "Manajer Proyek",
                  description: "Mengatur timeline proyek, koordinasi tim, dan memastikan proyek selesai sesuai target.",
                  icon: <FaProjectDiagram className="w-6 h-6" />,
                },
                {
                  title: "Quality Assurance",
                  description: "Menjamin kualitas produk/jasa dengan melakukan pengujian dan evaluasi standar.",
                  icon: <FaCheckCircle className="w-6 h-6" />,
                },
                {
                  title: "Manajer Kurikulum",
                  description: "Mengembangkan kurikulum pelatihan internal agar sesuai dengan kebutuhan perusahaan.",
                  icon: <FaBookOpen className="w-6 h-6" />,
                },
                {
                  title: "Manajer Pemasaran",
                  description: "Menyusun strategi pemasaran, promosi, dan analisis pasar untuk meningkatkan penjualan.",
                  icon: <FaBullhorn className="w-6 h-6" />,
                },
                {
                  title: "Bendahara",
                  description: "Mengelola kas perusahaan dan memastikan laporan keuangan harian tercatat dengan baik.",
                  icon: <FaWallet className="w-6 h-6" />,
                },
                {
                  title: "Manajer Cabang Banyuwangi",
                  description: "Mengawasi operasional cabang Banyuwangi serta memastikan target bisnis tercapai.",
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                },
                {
                  title: "Senior Developer Banyuwangi",
                  description: "Memimpin tim developer cabang, memberikan solusi teknis, dan mengawasi coding standard.",
                  icon: <FaCode className="w-6 h-6" />,
                },
                {
                  title: "Social Media Specialist",
                  description: "Mengelola akun media sosial, membuat konten kreatif, dan meningkatkan engagement.",
                  icon: <FaInstagram className="w-6 h-6" />,
                },
                {
                  title: "UI/UX Designer",
                  description: "Mendesain tampilan dan pengalaman pengguna yang intuitif dan menarik.",
                  icon: <FaPaintBrush className="w-6 h-6" />,
                },
                {
                  title: "Frontend Developer",
                  description: "Mengembangkan antarmuka aplikasi agar responsif, interaktif, dan user-friendly.",
                  icon: <FaLaptopCode className="w-6 h-6" />,
                },
                {
                  title: "Mobile Developer",
                  description: "Membuat dan mengembangkan aplikasi mobile (Android/iOS) sesuai kebutuhan bisnis.",
                  icon: <FaMobileAlt className="w-6 h-6" />,
                },
                {
                  title: "Backend Developer",
                  description: "Mengelola server, database, dan API agar aplikasi dapat berjalan dengan lancar.",
                  icon: <FaServer className="w-6 h-6" />,
                },
                
              ].map((department, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#1273EB]/30 hover:shadow-lg scale-[1.02] transform transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 bg-[#1273EB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1273EB]/20 transition-colors duration-300">
                    <div className="text-[#1273EB]">{department.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{department.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{department.description}</p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-16 text-center" data-aos="fade-up">
              <div className="inline-flex items-center space-x-6">
                <a href="/images/about/StructureOrganisations.png" download className="text-[#1273EB] font-semibold hover:text-[#0d5bb8] transition-colors duration-300 flex items-center">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Struktur Organisasi
              </a>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Struktur Organisasi",
                      text: "Lihat Struktur Organisasi kami di sini",
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link disalin ke clipboard!");
                  }
                }}
                className="text-gray-600 font-semibold hover:text-gray-900 transition-colors duration-300 flex items-center"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Bagikan
              </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default StructureOrganisations;