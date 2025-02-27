import { loginWithGoogle } from "@/lib/api/auth.api";
import { GITHUB_AUTH_URL } from "@/lib/env";
import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const useOAuth = () => {
  const navigate = useNavigate();

  const googleResponseHandler = async (
    result: Omit<CodeResponse, "error" | "error_description" | "error_uri">
  ) => {
    try {
      const response = await loginWithGoogle(result.code);

      localStorage.setItem(
        "dss-accessToken",
        response.accessToken.split(" ")[1]
      );

      navigate("/");
    } catch (error) {
      console.log("OAUTH LOGIN ERROR: ", error);
    }
  };

  const googleErrorHandler = (
    result: Pick<CodeResponse, "error" | "error_description" | "error_uri">
  ) => {
    console.log(result);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: googleResponseHandler,
    onError: googleErrorHandler,
    flow: "auth-code",
  });

  const handleGithubLogin = async () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  const handleGoogleLogout = () => {
    localStorage.removeItem("dss-accessToken");

    navigate("/");
  };

  return { handleGoogleLogin, handleGoogleLogout, handleGithubLogin };
};

export default useOAuth;
