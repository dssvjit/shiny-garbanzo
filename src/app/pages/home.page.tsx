import DssBrings from "@/components/home/dss-brings";
import HeroSection from "@/components/home/hero";
import VjitSection from "@/components/home/vjit";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center app">
      <HeroSection />
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <VjitSection />
        <DssBrings />
      </div>
    </div>
  );
};

export default HomePage;
