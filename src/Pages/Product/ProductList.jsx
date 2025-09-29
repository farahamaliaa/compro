import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import products from "./dataProduct";

const ProductList = ({ category }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const filtered =
    category === "semua"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12 lg:space-y-28 space-y-8">
      <img
        src="/images/projects/4.png"
        alt="Shape"
        className="absolute md:top-0 top-72 right-0 w-72 md:w-[35rem] lg:w-[55rem] opacity-80 pointer-events-none select-none -z-10"
      data-aos="fade-up"/>

      {filtered.map((product, index) => (
        <div
          key={product.id}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay={index * 100}
          className={`flex flex-col-reverse lg:flex-row items-center gap-10 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
              {product.desc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <Link
                to={`/product/${product.id}`}
                className="px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium shadow-md text-sm md:text-base"
              >
                Lihat Detail
              </Link>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 font-medium bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-xl hover:opacity-90 transition shadow-md text-sm md:text-base"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xl aspect-video rounded-sm overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
