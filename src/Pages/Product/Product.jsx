import { NavLink, Outlet, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Footer from "../../components/Fragments/Footer/MainFooter";
import MainNavbar from "../../components/Fragments/NavBar/MainNavbar";

const tabs = [
  { to: "/product", label: "SEMUA", end: true },
  { to: "/product/software", label: "SOFTWARE" },
  { to: "/product/website", label: "WEBSITE" },
  { to: "/product/mobile", label: "MOBILE APPS" },
];

const Product = () => {
  const { id } = useParams();

  return (
    <>
      <MainNavbar />
      <div className="min-h-screen px-2">
        {!id && (
          <>
            <div className="relative w-full h-64 overflow-hidden -z-10">
              <img
                src="/images/banner/33.jpg"
                alt="Banner"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
                <h1 className="text-white text-2xl md:text-4xl font-bold">
                  Produk
                </h1>
                <nav className="flex items-center space-x-2 text-white text-sm md:text-base pt-3">
                  <div className="flex items-center space-x-1">
                    <FaHome size={16} />
                    <span className="font-medium">HOME</span>
                  </div>
                  <div className="bg-white w-3 h-px"></div>
                  <span className="font-medium">PRODUK</span>
                </nav>
              </div>
            </div>

            <div className="flex justify-center space-x-32 mt-16 mb-8">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.to}
                  to={tab.to}
                  end={tab.end}
                  className={({ isActive }) =>
                    `relative pb-1 font-semibold transition ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {tab.label}
                      {isActive && (
                        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-blue-600 rounded-full"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </>
        )}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Product;
