import { LoginWithEmailSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormHeader from "@/components/auth/form-header";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import OrElementAuth from "@/components/auth/or-element.auth";

import useOAuth from "@/hooks/use-oauth";
import { useSendOtpMail } from "@/lib/query/mutations/auth.query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/shared/spinner";

const AuthForm = () => {
  const { handleGoogleLogin, handleGithubLogin } = useOAuth();
  const { mutateAsync: sendOtpMail, isPending } = useSendOtpMail();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginWithEmailSchema>>({
    resolver: zodResolver(LoginWithEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginWithEmailSchema>) {
    if (!values.email) {
      toast("Please enter a valid email address");
      return;
    }

    const response = await sendOtpMail(values.email);

    if (!response) {
      toast("Failed to send OTP mail");
      return;
    }

    localStorage.setItem("sent-mail", JSON.stringify(response));

    navigate("/auth/otp/verify");
  }

  return (
    <div className="w-full flex flex-col justify-center items-center text-center gap-8">
      <div className="flex flex-col justify-center items-center gap-6">
        <FormHeader description="Log in with your email or social account to unlock exclusive perks and stay connected with our community." />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                  </FormItem>
                </>
              )}
            />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              {isPending ? (
                <>
                  Loading
                  <Spinner width="96" color="#fff" />
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
      </div>
      <div className="relative w-full flex flex-col justify-center items-center gap-6">
        <OrElementAuth />
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <Button
            onClick={handleGoogleLogin}
            type="submit"
            variant={"outline"}
            className="w-full "
          >
            <FcGoogle />
            Login with Google
          </Button>

          <Button onClick={handleGithubLogin} type="submit" className="w-full">
            <FaGithub />
            Login with Github
          </Button>

          <Button
            onClick={() => navigate("/")}
            type="submit"
            variant={"link"}
            className="w-full"
          >
            Continue without login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
