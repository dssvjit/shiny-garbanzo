import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AuthPage from "../pages/auth.page";
import { loginWithGithub, loginWithGoogle } from "@/lib/api/auth.api";
import { useEffect } from "react";
import { toast } from "sonner";
import Spinner from "@/components/shared/spinner";

type Provider = "github" | "google";

const OAuthRedirect = () => {
  const { provider } = useParams<{ provider: Provider }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) {
      navigate("/auth");
      toast("Login failed please try again");
      return;
    }

    if (provider === "github") {
      loginWithGithub(code).then((data) => {
        if (data) {
          navigate("/");
          toast("Login successful");
          localStorage.setItem(
            "dss-accessToken",
            data.accessToken.split(" ")[1]
          );
        } else {
          navigate("/auth");
          console.log("LOGIN FAILED", data);
          toast("Login failed please try again");
        }
      });
    } else if (provider === "google") {
      loginWithGoogle(code).then((data) => {
        if (data) {
          navigate("/");
          toast("Login successful");
          localStorage.setItem(
            "dss-accessToken",
            data.accessToken.split(" ")[1]
          );
        } else {
          navigate("/auth");
          console.log("LOGIN FAILED", data);
          toast("Login failed please try again");
        }
      });
    } else {
      navigate("/");
      toast("Login failed please try again");
    }
  });

  return (
    <>
      <div className="w-full z-50 absolute h-screen bg-black/10 backdrop-blur-sm flex justify-center items-center">
        <div className=" bg-white rounded-lg flex flex-col justify-center items-center gap-2 p-4 shadow-md">
          <h3 className="text-lg font-semibold tracking-tighter py-3">
            {`You have choosen ${provider} to login`.toUpperCase()}
          </h3>
          <div className="w-full flex justify-center items-center gap-2 border-y py-3">
            <h1 className="text-lg">Redirecting</h1>
            <Spinner color="#000" />
          </div>
          <span className="text-sm py-3">
            Please wait while we redirect you to the login page
          </span>
        </div>
      </div>
      <AuthPage />
    </>
  );
};

export default OAuthRedirect;
