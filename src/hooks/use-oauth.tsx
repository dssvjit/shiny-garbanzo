import { GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from "@/lib/env";

const useOAuth = () => {
  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  const handleGithubLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  return { handleGoogleLogin, handleGithubLogin };
};

export default useOAuth;
