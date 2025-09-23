import Footer from "../components/Fragments/Footer/MainFooter"
import { useState, useEffect } from "react";
import MainNavbar from "../components/Fragments/NavBar/MainNavbar"

const Dashoard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {  
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
          <div className="flex flex-col items-center justify-center h-screen bg-white">
            <div className="w-16 h-16 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"></div>
          </div>
        );
    }

    return (
        <>
        <MainNavbar />
        <div className="my-90">           
        </div>
        <Footer />
        </>
    )
}

export default Dashoard;
