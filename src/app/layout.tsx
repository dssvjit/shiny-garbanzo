import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";
import Navbar from "@/components/shared/navbar";

function App() {
  return (
    <section className="w-full min-h-screen flex flex-col app font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  );
}

export default App;
