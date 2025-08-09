import Footer from "@/page/landing/componentsforlanding/Footer";
import Navbar from "@/page/landing/componentsforlanding/Navbar";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="flex flex-col w-full h-auto">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full mx-auto h-auto ">
          <Navbar/>
          <Outlet />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
