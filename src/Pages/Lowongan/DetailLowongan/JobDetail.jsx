import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import jobData from "../JobData";
import Footer from "../../../components/Fragments/Footer/MainFooter";
import MainNavbar from "../../../components/Fragments/NavBar/MainNavbar";

const JobDetail = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();
  const job = jobData.find((j) => j.slug === slug);

  if (!job) {
    return <p className="text-center mt-10">Lowongan tidak ditemukan.</p>;
  }

  return (
    <>
      <MainNavbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <img
            src={job.image}
            alt={job.title}
            className="w-full max-h-96 object-contain"
            data-aos="zoom-in"
          />
          <div data-aos="fade-left" data-aos-duration="800">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Kualifikasi :
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-outside pl-5">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">Email :</h2>
              <p className="text-blue-600 font-bold text-2xl mt-1 break-words">
                {job.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up" data-aos-duration="800">
          <p className="text-xs sm:text-sm md:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            Detail lowongan
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            {job.title}
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            {job.description}
          </p>
        </div>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Link
            to="/job-vacancy"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-all duration-300 ease-in-out"
          >
            Kembali
          </Link>
          <button className="w-full sm:w-auto px-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
            Lamar Sekarang
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;
