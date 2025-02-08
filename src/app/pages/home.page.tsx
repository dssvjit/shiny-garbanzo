import DssBrings from "@/components/home/dss-brings";
import HeroSection from "@/components/home/hero";
import VjitSection from "@/components/home/vjit";
import Footer from "@/components/home/footer";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HeroSection />
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <VjitSection />
        <DssBrings />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
