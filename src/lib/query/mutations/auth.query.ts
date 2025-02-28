import { useMutation } from "@tanstack/react-query";
import {
  loginWithGithub,
  loginWithGoogle,
  logout,
  sendOtpMail,
  verifyOtp,
} from "@/lib/api/auth.api";

export const useLoginWithGoogle = () => {
  return useMutation({
    mutationFn: (code: string) => loginWithGoogle(code),
  });
};

export const useLoginWithGithub = () => {
  return useMutation({
    mutationFn: (code: string) => loginWithGithub(code),
  });
};

export const useSendOtpMail = () => {
  return useMutation({
    mutationFn: (email: string) => sendOtpMail(email),
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (data: { email: string; otp: string; token: string }) =>
      verifyOtp(data.email, data.otp, data.token),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => logout(),
  });
};
