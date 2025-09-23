import React, { useState, useEffect } from 'react';

const StructureOrganisationsHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/banner/36.jpg')`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1273EB]/95 to-[#1273EB]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo/Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-none mb-20">
                <span className="block">Structure</span>
                <span className="block font-semibold">Organisations</span>
              </h1>
            </div>

            {/* CTA Button */}
            <div className="mb-16">
              <button className="group inline-flex items-center bg-white text-[#1273EB] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <svg className="mr-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Lihat Struktur Organisasi
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1273EB]/10 rounded-lg mb-6">
              <svg className="w-6 h-6 text-[#1273EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Struktur <span className="font-semibold">Organisasi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Hierarki dan alur komunikasi yang mendukung efektivitas operasional perusahaan
            </p>
          </div> */}

          {/* Placeholder for Org Chart */}
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 min-h-[400px] flex items-center justify-center mb-16">
            <div className="text-center max-w-3xl">
              {/* <h3 className="text-2xl font-semibold text-gray-900 mt-6">Diagram Organisasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Struktur organisasi perusahaan yang menampilkan hubungan antar divisi
              </p>
              <br/>
              <img
                src="/images/about/StructureOrganisations.png"
                alt="Struktur Organisasi"
                className="w-full h-auto rounded-lg shadow-md"
              /> */}

              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1273EB]/10 rounded-lg mb-6">
                  <svg className="w-6 h-6 text-[#1273EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                  Struktur <span className="font-semibold">Organisasi</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                  Hierarki dan alur komunikasi yang mendukung efektivitas operasional perusahaan
                </p>
              </div>
              <img
                src="/images/about/StructureOrganisations.png"
                alt="Struktur Organisasi"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>


          {/* Department Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Manajemen Eksekutif",
                description: "Kepemimpinan strategis dan pengambilan keputusan utama",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: "Divisi Operasional",
                description: "Pelaksanaan operasional harian dan implementasi",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "Tim Support",
                description: "Dukungan teknis dan layanan pelanggan berkualitas",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: "Quality Assurance",
                description: "Kontrol kualitas dan standar operasional",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((department, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1273EB]/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#1273EB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1273EB]/20 transition-colors duration-300">
                  <div className="text-[#1273EB]">{department.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{department.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{department.description}</p>
              </div>
            ))}
          </div>

          {/* Action Bar */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-6">
              <button className="text-[#1273EB] font-semibold hover:text-[#0d5bb8] transition-colors duration-300 flex items-center">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Struktur Organisasi
              </button>
              <div className="w-px h-6 bg-gray-300"></div>
              <button className="text-gray-600 font-semibold hover:text-gray-900 transition-colors duration-300 flex items-center">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Bagikan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StructureOrganisationsHero;
