import { loginWithGithub } from "@/lib/api/auth.api";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

function GithubAuthRedirect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      navigate("/login");
      toast("Login failed please try again", {
        action: {
          label: "Close",
          onClick: () => {
            toast.dismiss();
          },
        },
      });

      return;
    }

    loginWithGithub(code).then((data) => {
      if (data) {
        navigate("/");
        console.log("LOGIN SUCCESSFUL", data);
        toast("Login successful", {
          action: {
            label: "Close",
            onClick: () => {
              toast.dismiss();
            },
          },
        });
        localStorage.setItem("dss-accessToken", data.accessToken.split(" ")[1]);
      } else {
        navigate("/login");
        console.log("LOGIN FAILED", data);
        toast("Login failed please try again", {
          action: {
            label: "Close",
            onClick: () => {
              toast.dismiss();
            },
          },
        });
      }
    });
  });

  return <div>LOADING....</div>;
}

export default GithubAuthRedirect;
