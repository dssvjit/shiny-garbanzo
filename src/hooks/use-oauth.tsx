import { GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from "@/lib/env";
import { useNavigate } from "react-router-dom";

const useOAuth = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  const handleGithubLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  const handleLogout = () => {
    localStorage.removeItem("dss-accessToken");
    navigate("/");
  };

  return { handleGoogleLogin, handleLogout, handleGithubLogin };
};

export default useOAuth;
