import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token: string) => {
  try {
    const decoded: { exp: number } = jwtDecode(token);

    console.log("ACCESS TOKEN EXPIRATION: ", decoded.exp * 1000 < Date.now());

    return decoded.exp * 1000 < Date.now();
  } catch (error) {
    console.error("ERROR WHILE DECODING JWT: ", error);
    return true;
  }
};
