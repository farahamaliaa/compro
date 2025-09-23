import React from "react";

const Organisasi = () => {
    const data = {
        direktur: { nama: "Afrizal Himawan", jabatan: "Direktur" },
        wakil: { nama: "Mudafiq Riyan P.", jabatan: "Wakil Direktur" },
        manajer: [
        { nama: "Anisa Istiqomah", jabatan: "Manajer Keuangan" },
        { nama: "Andika Wahyu P.", jabatan: "Manajer Personalia" },
        { nama: "W. N Bagaskara", jabatan: "Manajer Proyek" },
        { nama: "Yudas Malabi", jabatan: "Manajer Operasional" },
        { nama: "Fahrullah Himawan", jabatan: "Manajer Pemasaran" },
        { nama: "Mohammad Munir", jabatan: "Manajer Cabang Banyuwangi" },
        ],
        bendahara: { nama: "Arsy Rachma Y.", jabatan: "Bendahara" },
        developer: {
        senior: { nama: "Senior Developer", jabatan: "" },
        tim: [
            { nama: "UI/UX Designer", jabatan: "" },
            { nama: "Frontend Developer", jabatan: "" },
            { nama: "Frontend Developer", jabatan: "" },
            { nama: "Mobile Developer", jabatan: "" },
        ],
        staf: [
            { nama: "Staf Sarana Prasarana", jabatan: "" },
            { nama: "Staf Administrasi", jabatan: "" },
            { nama: "Staf Driver", jabatan: "" },
        ],
        },
        cabang: {
        senior: { nama: "Ferdian Nada", jabatan: "Senior Developer Banyuwangi" },
        },
    };

    const Card = ({ nama, jabatan }) => (
        <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full border-4 border-blue-500 shadow-md bg-white">
        <div className="w-20 h-20 rounded-full bg-gray-300 mb-2" />
        <p className="text-sm font-semibold text-center">{nama}</p>
        <p className="text-xs text-gray-600 text-center">{jabatan}</p>
        </div>
    );

    return (
        <div className="py-12 px-6">
        <h2 className="text-center text-blue-600 font-semibold">STRUKTUR ORGANISASI</h2>
        <h1 className="text-center text-2xl font-bold mt-1 mb-12">
            Fondasi Keberhasilan dan Kolaborasi di Tempat Kerja
        </h1>

        {/* Direktur */}
        <div className="flex justify-center mb-8">
            <Card {...data.direktur} />
        </div>

        {/* Wakil Direktur */}
        <div className="flex justify-center mb-12">
            <Card {...data.wakil} />
        </div>

        {/* Manajer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center mb-12">
            {data.manajer.map((m, i) => (
            <Card key={i} {...m} />
            ))}
        </div>

        {/* Bendahara */}
        <div className="flex justify-center mb-12">
            <Card {...data.bendahara} />
        </div>

        {/* Senior Developer */}
        <div className="flex justify-center mb-8">
            <Card {...data.developer.senior} />
        </div>

        {/* Tim Developer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-8">
            {data.developer.tim.map((dev, i) => (
            <Card key={i} {...dev} />
            ))}
        </div>

        {/* Staf */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-12">
            {data.developer.staf.map((staf, i) => (
            <Card key={i} {...staf} />
            ))}
        </div>

        {/* Cabang */}
        <div className="flex justify-center">
            <Card {...data.cabang.senior} />
        </div>
        </div>
    );
};

export default Organisasi;
