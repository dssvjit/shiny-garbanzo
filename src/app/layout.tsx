import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";
import AboutPage from "@/app/pages/about.page";
import TeamPage from "@/app/pages/team.page";
import EventsPage from "@/app/pages/events.page";
import AuthPage from "@/app/pages/auth.page";
import AppLayout from "@/app/layout/app.layout";
import AuthLayout from "@/app/layout/auth.layout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@/lib/env";
import { Toaster } from "@/components/ui/sonner";
import OtpVerifyPage from "@/app/pages/otp-verify.page";
import { QueryProvider } from "@/lib/query/query-provider";
import OAuthRedirect from "@/app/redirects/oauth.redirect";
import EventPage from "@/app/pages/event.page";

function App() {
  return (
    <QueryProvider>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <section className="w-full min-h-screen flex flex-col font-poppins">
          <Routes>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="" element={<AuthPage />} />
              <Route
                path="/auth/callback/:provider"
                element={<OAuthRedirect />}
              />
              <Route path="/auth/otp/verify" element={<OtpVerifyPage />} />
            </Route>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team/:domain" element={<TeamPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/event/:name" element={<EventPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </section>
        <Toaster theme="light" className="bg-neutral-50" />
      </GoogleOAuthProvider>
    </QueryProvider>
  );
}

export default App;
