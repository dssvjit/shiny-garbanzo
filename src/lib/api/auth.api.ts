import { api, publicApi } from "../config/axios.config";
import { isTokenExpired } from "../jwt";

export const loginWithGoogle = async (code: string) => {
  const response = await publicApi.get(`/api/auth/google?code=${code}`);
  return response.data.data;
};

export const loginWithGithub = async (code: string) => {
  const response = await publicApi.get(`/api/auth/github?code=${code}`);
  return response.data.data;
};

export const sendOtpMail = async (email: string) => {
  const response = await publicApi.get(`/api/auth/email/otp?email=${email}`);
  return response.data.data;
};

export const verifyOtp = async (email: string, otp: string, token: string) => {
  const response = await publicApi.post(`/api/auth/email/otp/verify`, {
    email,
    otp,
    token,
  });
  return response.data.data;
};

export const refreshAccessToken = async () => {
  try {
    const accessToken = localStorage.getItem("dss-accessToken");

    if (!accessToken || isTokenExpired(accessToken)) {
      console.log("ACCESS TOKEN EXPIRED , LOGGING OUT...");
      // handleLogout();
      return null;
    }

    const response = await api.post("/api/auth/refresh", {
      accessToken,
    });

    localStorage.setItem(
      "dss-accessToken",
      response.data.data.accessToken.split(" ")[1]
    );

    return response.data.data.accessToken;
  } catch (error) {
    console.error("FAILED TO REFRESH ACCESS TOKEN: ", error);
    // handleLogout();
    return null;
  }
};

export const logout = async () => {
  const response = await api.put("/api/auth/logout");
  return response.data.data;
};
