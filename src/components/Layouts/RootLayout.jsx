import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../Fragments/Loader/Loader";

const RootLayout = () => {
  const location = useLocation();
  
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      {isNavigating && <Loader />}
      <Outlet />
    </>
  );
};

export default RootLayout;

