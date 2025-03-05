import { api } from "../config/axios.config";

export const getUserDetails = async () => {
  const response = await api.get("/api/user");

  return response.data.data;
};
