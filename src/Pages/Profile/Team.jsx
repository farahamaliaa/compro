import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsHouseFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const team = [
    {
      name: "Jessika Mohi",
      role: "MARKETING MANAGER",
      image: "/images/team/1.jpg",
    },
    {
      name: "Munia Anchor",
      role: "ASSISTANT MANAGER",
      image: "/images/team/2.jpg",
    },
    {
      name: "Ahel Natasha",
      role: "EXTUCIVE MANAGER",
      image: "/images/team/3.jpg",
    },
    {
      name: "Jessika Mohi",
      role: "MARKETING MANAGER",
      image: "/images/team/4.jpg",
    },
    {
      name: "Munia Anchor",
      role: "ASSISTANT MANAGER",
      image: "/images/team/5.jpg",
    },
    {
      name: "Ahel Natasha",
      role: "EXTUCIVE MANAGER",
      image: "/images/team/6.jpg",
    },
  ];
  return (
    <div className="min-h-screen px-2">
      <div>
        <div className="relative w-full h-64 overflow-hidden -z-10">
          <img
            src="/images/background/6.jpg"
            alt="Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4"
            data-aos="fade-down"
          >
            <h1 className="text-white text-2xl md:text-4xl  font-bold">
              Tentang Kami
            </h1>
            <nav className="flex items-center space-x-2 text-white text-sm md:text-base pt-3">
              <div className="flex items-center space-x-1">
                <BsHouseFill size={16} />
                <span className="font-medium">HOME</span>
              </div>
              <div className="bg-white w-3 h-px"></div>
              <span className="font-medium">FILOSOFI LOGO </span>
            </nav>
          </div>
        </div>
      </div>

      <div className="text-center mt-12" data-aos="fade-up">
        <h2 className="text-sm md:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-600 to-blue-50 bg-clip-text text-transparent">
          TIM KAMI
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold lg:mt-3 mx-auto max-w-2xl">
          Bersatu Demi Kesuksesan: Introducing Tim Kami yang Berdedikasi dan
          Profesional
        </h1>
        <div className="flex justify-center gap-2">
          <div className="w-3 h-0.5 bg-blue-500 lg:mt-5 mt-3"></div>
          <div className="w-12 h-0.5 bg-blue-500 lg:mt-5 mt-3"></div>
        </div>
      </div>
      <div className="relative mt-20 mb-20">
        <div className="absolute lg:-top-25 md:-top-20 -top-10 left-0 -z-10" data-aos="fade-up">
          <img
            src="/images/shape/3.png"
            alt="shape"
            className="w-40 md:w-56 lg:w-72 xl:w-80 h-auto opacity-70"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden group relative"
              data-aos="zoom-in"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-76 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 group">
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:rotate-6 transition-transform duration-300">
                  <FaShareAlt size={16} />
                </button>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm tracking-wide uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
