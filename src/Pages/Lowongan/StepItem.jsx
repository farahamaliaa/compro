const StepItem = ({ number, title, description, position }) => {
  const isLeft = position === "left";

  return (
    <div className="relative flex w-full items-center">
      {/* Konten kiri */}
      <div
        className={`w-1/2 px-6 ${isLeft ? "text-right" : ""}`}
        data-aos={isLeft ? "fade-right" : ""}
      >
        {isLeft && (
          <>
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{description}</p>
          </>
        )}
      </div>

      <div className="relative flex items-center justify-center">
        <div className="bg-blue-500 text-white font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-md z-10">
          {number}
        </div>
      </div>

      {/* Konten kanan */}
      <div
        className={`w-1/2 px-6 ${!isLeft ? "text-left" : ""}`}
        data-aos={!isLeft ? "fade-left" : ""}
      >
        {!isLeft && (
          <>
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default StepItem;
