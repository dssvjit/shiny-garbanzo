import { loginWithGoogle } from "@/lib/api/auth.api";
import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const useGoogleOAuthLogin = () => {
  const navigate = useNavigate();

  const googleResponseHandler = async (
    result: Omit<CodeResponse, "error" | "error_description" | "error_uri">
  ) => {
    try {
      const response = await loginWithGoogle(result.code);

      localStorage.setItem("dss-accessToken", response.accessToken);

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

  return { handleGoogleLogin };
};

export default useGoogleOAuthLogin;
