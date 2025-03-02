import FooterSection from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="w-full relative">
        <Navbar />
        <Outlet />
        <FooterSection />
      </div>
    </>
  );
};

export default AppLayout;
