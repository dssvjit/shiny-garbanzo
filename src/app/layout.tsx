import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";
import AboutPage from "@/app/pages/about.page";
import TeamPage from "./pages/team.page";
import EventsPage from "./pages/events.page";
import AuthPage from "./pages/auth.page";
import AppLayout from "./layout/app.layout";
import AuthLayout from "./layout/auth.layout";

function App() {
  return (
    <section className="w-full min-h-screen flex flex-col font-poppins">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="" element={<AuthPage />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team/:domain" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  );
}

export default App;
