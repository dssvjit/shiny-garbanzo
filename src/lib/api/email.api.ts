import { publicApi } from "../config/axios.config";

export const addEmail = async (email: string) => {
  const response = await publicApi.post("/api/email", {
    email,
  });

  return response;
};
