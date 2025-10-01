import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "../../components/Fragments/NavBar/MainNavbar";
import Footer from "../../components/Fragments/Footer/MainFooter";
import portofolio from "../Portofolio/dataPortofolio";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortofolioDetail() {
  const { id } = useParams();

  // cari data sesuai id di URL
  const selectedPortofolio = portofolio.find(
    (item) => item.id.toString() === id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!selectedPortofolio) {
    return (
      <p className="p-10 text-red-500 text-center">Produk tidak ditemukan</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavbar />

      {/* Bagian Detail */}
      <section className="px-6 lg:px-16 py-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Gambar Kiri (desktop) */}
          <div className="hidden lg:flex justify-center">
            <div
              className="w-full max-w-3xl lg:max-w-xl aspect-video rounded-md overflow-hidden shadow-lg"
              data-aos="fade-right"
            >
              <img
                src={selectedPortofolio.image}
                alt={selectedPortofolio.title}
                className="w-full h-full transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Teks Kanan */}
          <div className="flex flex-col justify-between" data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center md:text-start">
              {selectedPortofolio.title}
            </h2>

            {/* Gambar Mobile */}
            <div className="block lg:hidden mb-6">
              <div className="w-full max-w-3xl mx-auto aspect-video rounded-md overflow-hidden shadow-lg">
                <img
                  src={selectedPortofolio.image}
                  alt={selectedPortofolio.title}
                  className="w-full h-full transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed text-justify">
              {selectedPortofolio.desc}
            </p>

            <a
              href={selectedPortofolio.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium shadow-md text-sm md:text-base"
            >
              Kunjungi Website
            </a>
          </div>
        </div>
      </section>

      {/* Bagian Fitur */}
      <section className="pt-24 pb-14 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center px-6" data-aos="fade-up">
          <p className="text-xl md:text-2xl font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent mb-4">
            FITUR-FITUR
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Fitur - Fitur {selectedPortofolio.title} yang mungkin dapat membantu
            anda
          </h2>
          <img
            src="/images/no-data/nodata.png"
            alt="Ilustrasi Fitur Kosong"
            className="w-72 h-72 object-contain mx-auto mb-6"
          />
          <p className="text-gray-600 text-lg">
            Belum ada fitur yang ditambahkan
          </p>
        </div>
      </section>

      {/* Testimoni */}
      <div className="mt-24 px-full md:px-8 mx-auto">
        <section className="bg-gradient-to-r from-blue-100 to-white px-6 md:px-12 lg:px-28 py-16 rounded-sm ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div
              className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col justify-center items-center text-center min-h-[180px] md:min-h-[220px]"
              data-aos="fade-right"
            >
              <img
                src="/images/no-data/nodata-gif-post.gif"
                alt="Ilustrasi Testimoni"
                className="w-32 h-32 md:w-36 md:h-36 object-contain mb-4"
              />
              <p className="font-medium text-gray-600 text-sm md:text-base">
                Belum ada Testimonial
              </p>
            </div>

            <div
              className="text-center md:text-start md:border-l md:pl-8 lg:pl-12"
              data-aos="fade-left"
            >
              <span className="text-xl lg:text-2xl font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Testimoni
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-gray-900">
                Testimoni <br className="hidden md:block" /> Membuktikan
                Kualitas <br className="hidden lg:block" /> produk Kami
              </h1>
              <p className="text-base text-gray-700 ">
                Tingkatkan Kepercayaan Anda: Dengarlah Suara Pelanggan Kami
                Melalui Testimoni Mereka
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <span className="text-xl md:text-2xl font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            FAQ
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 max-w-2xl mx-auto">
            Temukan Jawaban Anda: FAQ Kami Memudahkan Anda Memahami Layanan Kami
          </h2>
          <div className="flex justify-center gap-2 mb-20">
            <div className="w-3 h-0.5 bg-blue-500 lg:mt-3 mt-3"></div>
            <div className="w-12 h-0.5 bg-blue-500 lg:mt-3 mt-3"></div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/no-data/nodata.png"
              alt="Ilustrasi FAQ Kosong"
              className="w-72 h-72 object-contain mb-6"
            />
            <p className="text-gray-600 text-lg font-medium">Belum ada FAQ</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
