import { VerifyOtpSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import FormHeader from "../auth/form-header";
import { Navigate, useNavigate } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSendOtpMail, useVerifyOtp } from "@/lib/query/mutations/auth.query";
import { RotatingLines } from "react-loader-spinner";

interface VerifyOtpFormProps {
  local: {
    expiresAt: number;
    token: string;
    email: string;
  };
}

const VerifyOtpForm = ({ local }: VerifyOtpFormProps) => {
  const navigate = useNavigate();
  const [isOtpExpired, setIsOtpExpired] = useState(false);
  const { mutateAsync: verifyOtp, isPending } = useVerifyOtp();
  const { mutateAsync: sendOtpMail } = useSendOtpMail();

  const { expiresAt, email } = local;

  const [timeLeft, setTimeLeft] = useState(
    expiresAt - Math.floor(Date.now() / 1000)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = expiresAt - Math.floor(Date.now() / 1000);

      if (remainingTime <= 0) {
        setIsOtpExpired(true);
        const local = {
          expiresAt: 0,
          token: "",
        };
        localStorage.setItem("sent-mail", JSON.stringify(local));
        toast("OTP expired, please request a new OTP", {});
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  const form = useForm<z.infer<typeof VerifyOtpSchema>>({
    resolver: zodResolver(VerifyOtpSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof VerifyOtpSchema>) {
    const response = await verifyOtp({
      email: local.email,
      otp: data.pin,
      token: local.token,
    });

    if (!response) {
      navigate("/auth");
      toast("Invalid OTP. Please try again", {});
      return;
    }

    navigate("/");
    window.location.reload();
    toast("OTP verified successfully", {
      description: "You have successfully verified your OTP",
    });

    localStorage.removeItem("sent-mail");
    localStorage.setItem("dss-accessToken", response.accessToken.split(" ")[1]);
  }

  const handleBack = () => {
    localStorage.removeItem("sent-mail");
    navigate("/auth");
  };

  const handleResend = async () => {
    const response = await sendOtpMail(email);
    const local = {
      expiresAt: response.expiresAt,
      token: response.token,
      email: email,
    };
    localStorage.setItem("sent-mail", JSON.stringify(local));
    setTimeLeft(response.expiresAt - Math.floor(Date.now() / 1000));
    toast("OTP sent to your mail");
  };

  if (!localStorage.getItem("sent-mail")) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <FormHeader description="Please enter the one-time password sent to your mail. If you didn't receive the OTP, please check your spam folder or request a new OTP." />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={4} {...field}>
                    <InputOTPGroup className="w-full justify-center gap-5 border p-2 rounded-md bg-neutral-50">
                      <InputOTPSlot index={0} className="bg-white" />
                      <InputOTPSlot index={1} className="bg-white" />
                      <InputOTPSlot index={2} className="bg-white" />
                      <InputOTPSlot index={3} className="bg-white" />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter OTP before it expires in{" "}
                  <span className="font-semibold text-red-500">
                    {timeLeft}s
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isOtpExpired} type="submit" className="w-full">
            {isPending ? (
              <>
                Loading{" "}
                <RotatingLines
                  visible={true}
                  width="96"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  strokeColor="#fff"
                />
              </>
            ) : (
              "Submit"
            )}
          </Button>

          <Button
            disabled={!isOtpExpired}
            variant={"link"}
            className="w-full"
            onClick={handleResend}
          >
            Resend OTP
          </Button>

          <AlertDialog>
            <AlertDialogTrigger className="w-full text-center hover:underline">
              Back
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will invalid your OTP.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleBack}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </Form>
    </div>
  );
};

export default VerifyOtpForm;
