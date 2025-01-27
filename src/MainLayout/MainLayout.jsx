import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
