import React from "react";

const LogoPhilosophy = () => {
    const filosofi = [
        {
            icon: <img src="/philosophy/H.png" className="w-8 h-6"/>,
            title: "Huruf H",
            desc: "Sebagai huruf inisial dari Hummatech.",
        },
        {
            icon: <img src="/philosophy/genteng.png" className="w-8 h-6"/>,
            title: "Simbol Genteng",
            desc: "Membentuk rumah sebagai simbol produksi teknologi.",
        },
        {
            icon: <img src="/philosophy/biru.png" className="w-10 h-8"/>,
            title: "warna Biru",
            desc: "Mencerminkan profesionalitas dan kepercayaan.",
        },
        {
            icon: <img src="/philosophy/humma.png" className="w-16 md:w-20 h-6"/>,
            title: "Nama Humma",
            desc: "Dari bahasa Arab berarti “bersama”, mencerminkan kolaborasi.",
        },
        {
            icon: <img src="/philosophy/tech.png" className="w-10 md:w-12 h-6"/>,
            title: "Tech",
            desc: "Singkatan dari Technology sebagai core business Hummatech.",
        },
    ];

  return (
    <div className="py-12 px-6">
        <h2 className="text-center bg-gradient-to-r from-blue-600 to-blue-300 text-lg bg-clip-text text-transparent font-bold">FILOSOFI LOGO</h2>
        <h1 className="text-center font-bold text-3xl md:text-4xl pt-2">Logo Hummatech</h1>
        <div className="flex items-center justify-center space-x-2 pt-4">
            <div className="w-4 h-0.5 bg-blue-500"></div>
            <div className="w-14 h-0.5 bg-blue-500"></div>
        </div>
        <div className="max-w-6xl mx-auto grid gap-12 mt-16 items-center">
            <div className="flex justify-center">
                <img src="/images/logo/hummatech-square.png" alt="Logo Hummatech" className="md:w-[350px] w-72 md:h-[400px] h-52 object-contain drop-shadow-2xl" />
            </div>
            <div className="grid md:grid-cols-2  gap-4">
                {filosofi.map((item, index) => (
                    <div key={index} className="flex flex-col items-start gap-3 p-5 bg-white rounded-xl shadow-md hover:-translate-y-1 transition duration-300 border border-blue-100">
                        <div>{item.icon}</div>
                        <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoPhilosophy