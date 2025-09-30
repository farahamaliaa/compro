import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHome } from "react-icons/fa";
import jobData from "./JobData";
import JobCard from "./JobCard";
import StepItem from "./StepItem";
import Footer from "../../components/Fragments/Footer/MainFooter";
import MainNavbar from "../../components/Fragments/NavBar/MainNavbar";


const JobVacancy = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true});
  }, []);

  return (
    <>
    <MainNavbar />
    <div className="w-full">
      <div className="relative w-full h-40 md:h-64 overflow-hidden">
        <img
          src="/images/background/6.jpg"
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center"
          data-aos="fade-down"
        >
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">
            Lowongan
          </h1>
          <nav className="flex flex-wrap items-center justify-center gap-2 text-white text-xs sm:text-sm md:text-base pt-3">
            <div className="flex items-center gap-1">
              <FaHome size={14}/>
              <span className="font-medium">HOME</span>
            </div>
            <div className="bg-white w-3 h-px"></div>
            <span className="font-medium">LOWONGAN</span>
          </nav>
        </div>
      </div>

      <div
        className="text-center max-w-3xl mx-auto mb-10 md:mb-12 px-4 sm:px-6 lg:mt-12"
        data-aos="fade-up"
      >
        <p className="text-xs sm:text-sm md:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text mt-12 text-transparent">
          Lowongan
        </p>
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mt-2">
          Bergabunglah dengan tim kami dan wujudkan karir impian Anda!
        </h2>
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-3 h-0.5 bg-blue-500"></div>
          <div className="w-12 h-0.5 bg-blue-500"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {jobData.map((job) => (
          <JobCard
            key={job.id}
            image={job.image}
            title={job.title}
            description={job.description}
          />
        ))}
      </div>

      <div
        className="text-center max-w-3xl mx-auto mb-10 md:mb-12 px-4 sm:px-6 lg:mt-12"
        data-aos="fade-up"
      >
        <p className="text-xs sm:text-sm md:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text mt-12 text-transparent">
          ALUR KERJA
        </p>
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mt-2">
          "Kendalikan Alur Kerja Anda: Strategi Efektif untuk Produktivitas dan
          Efisiensi"
        </h2>
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-3 h-0.5 bg-blue-500"></div>
          <div className="w-12 h-0.5 bg-blue-500"></div>
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto py-12">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2"></div>

        <div className="space-y-15 relative z-10">
          <StepItem
            number="1"
            title="Mendaftar"
            description="Melakukan Pendaftaran di website lowongan Hummatech terlebih dahulu"
            position="left"
          />
          <StepItem
            number="2"
            title="Seleksi Berkas"
            description="Tim Hummatech akan melakukan verifikasi berkas lamaran Anda"
            position="right"
          />
          <StepItem
            number="3"
            title="Wawancara"
            description="Pelamar yang lolos akan mengikuti proses wawancara"
            position="left"
          />
          <StepItem
            number="4"
            title="Diterima"
            description="Jika berhasil, Anda akan resmi menjadi bagian dari tim Hummatech"
            position="right"
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default JobVacancy;
