import { authSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormHeader from "../auth/form-header";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import OrElementAuth from "../auth/or-element.auth";

import useOAuth from "@/hooks/use-oauth";

const AuthForm = () => {
  const { handleGoogleLogin, handleGithubLogin } = useOAuth();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof authSchema>) {
    console.log(values);
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
            <Button type="submit" className="w-full bg-blue-500">
              Submit
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

          <Button type="submit" variant={"link"} className="w-full">
            Continue without login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
