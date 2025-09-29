import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import products from "../Product/dataProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, [id]);

  if (!product) {
    return (
      <p className="p-10 text-red-500 text-center">Produk tidak ditemukan</p>
    );
  }

  return (
    <div className="mt-8">
      <section className="px-6 md:px-12 lg:px-20 py-10 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 md:h-full object-cover rounded-lg transform hover:scale-105 transition duration-500"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              {product.desc}
            </p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium shadow-sm text-sm md:text-base"
            >
              Kunjungi Website
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-100 to-blue-200 overflow-hidden lg:mt-8">
        <img
          src="/images/shape/9.png"
          alt="Shape"
          className="absolute right-0 top-10 md:top-24 w-32 md:w-60 opacity-80 object-contain z-0"
        />
        <div className="text-center max-w-3xl mx-auto mb-12 px-6" data-aos="fade-up">
          <p className="text-xs md:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            FITUR-FITUR
          </p>
          <h2 className="text-xl md:text-4xl font-bold mt-2">
            Fitur - {product.name} yang mungkin dapat membantu anda
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-3 h-0.5 bg-blue-500"></div>
            <div className="w-12 h-0.5 bg-blue-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-6">
          {product.features.map((f, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-sm group h-40 md:h-48 bg-white"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-blue-600 
                transform -translate-y-full group-hover:translate-y-0 
                transition-transform duration-500 ease-in-out z-0"
              ></div>

              <div className="relative z-10 flex flex-col text-center h-full p-6 md:p-8 transition-colors duration-500 ease-in-out delay-200 group-hover:text-white">
                <div className="flex-1 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-semibold">{f}</h3>
                </div>
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <span className="text-2xl md:text-3xl font-extrabold text-gray-300 group-hover:text-white/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 h-px bg-gray-200 mx-2 md:mx-4 group-hover:bg-white/40"></span>
                  <span className="font-semibold tracking-wider">FITUR</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-20 px-6 md:px-12 lg:px-20">
        <div className="bg-gradient-to-r from-blue-100 to-white px-6 md:px-12 lg:px-20 py-10 md:py-16 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div
              className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col justify-center items-center text-center min-h-[200px] md:min-h-[250px]"
              data-aos="fade-right"
            >
              <img
                src="/images/no-data/nodata-gif-post.gif"
                alt="Ilustrasi Testimoni"
                className="w-28 h-28 md:w-40 md:h-40 object-contain mb-4"
              />
              <p className="font-medium text-gray-600 text-sm md:text-base">
                Belum ada Testimonial
              </p>
            </div>

            <div data-aos="fade-left">
              <span className="text-xs md:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Testimoni
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-gray-900">
                Testimoni Membuktikan Kualitas Produk Kami
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                Tingkatkan Kepercayaan Anda: Dengarlah Suara Pelanggan Kami
                Melalui Testimoni Mereka
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 text-center lg:mt-8 px-6">
        <div className="container mx-auto" data-aos="fade-up">
          <span className="text-xs md:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            FAQ
          </span>
          <h2 className="text-xl md:text-3xl font-bold mt-2 mb-4 text-gray-900 max-w-2xl mx-auto">
            Temukan Jawaban Anda: FAQ Kami Memudahkan Anda Memahami Layanan Kami
          </h2>
          <div className="flex justify-center gap-2 mb-10 md:mb-20">
            <div className="w-3 h-0.5 bg-blue-500 mt-2 md:mt-3"></div>
            <div className="w-12 h-0.5 bg-blue-500 mt-2 md:mt-3"></div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/no-data/nodata.png"
              alt="Ilustrasi FAQ Kosong"
              className="w-40 h-40 md:w-72 md:h-72 object-contain mb-6"
            />
            <p className="text-gray-600 text-sm md:text-lg font-medium">
              Belum ada FAQ
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
