import { FaArrowRight } from "react-icons/fa";

const JobCard = ({ image, title, description }) => {
  return (
    <div
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition p-4 sm:p-6 flex flex-col"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />

      <div className="mt-4 flex-1" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
          {description}
        </p>
      </div>

      <button
        className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-600 transition"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Detail <FaArrowRight size={14} className="sm:w-4 sm:h-4" />
      </button>
    </div>
  );
};

export default JobCard;
