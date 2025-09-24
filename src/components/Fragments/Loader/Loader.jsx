import React from "react";

const Loader = ({ text = "HUMMATECH" }) => {
  const letters = text.split("");

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"></div>

      <div className="mt-6 flex space-x-2">
        {letters.map((char, i) => (
          <span
            key={i}
            className="text-5xl font-bold"
            style={{
              animation: "wave 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { color: #9ca3af; }
          50% { color: #111827; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
