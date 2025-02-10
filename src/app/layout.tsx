import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";
import Navbar from "@/components/shared/navbar";
import AboutPage from "@/app/pages/about.page";
import FooterSection from "@/components/shared/footer";
import TeamPage from "./pages/team.page";

function App() {
  return (
    <section className="w-full min-h-screen flex flex-col font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team/:domain" element={<TeamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FooterSection />
    </section>
  );
}

export default App;
