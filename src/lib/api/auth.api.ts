import { api } from "../config/axios.config";
import { isTokenExpired } from "../jwt";

export const loginWithGoogle = async (code: string) => {
  const response = await api.get(`/api/auth/google?code=${code}`);

  return response.data.data;
};

export const loginWithGithub = async (code: string) => {
  const response = await api.get(`/api/auth/github?code=${code}`);

  return response.data.data;
};

export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken || isTokenExpired(refreshToken)) {
      console.log("REFRESH TOKEN EXPIRED , LOGGING OUT...");
      // handleLogout();
      return null;
    }

    const response = await api.post("/api/auth/refresh", {
      refreshToken,
    });

    localStorage.setItem(
      "accessToken",
      response.data.accessToken.split(" ")[1]
    );

    return response.data.accessToken;
  } catch (error) {
    console.error("FAILED TO REFRESH ACCESS TOKEN: ", error);
    // handleLogout();
    return null;
  }
};
