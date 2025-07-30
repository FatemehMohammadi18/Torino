import api from "@/config/api";
import { getCookie } from "@/utils/cookie";

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken || refreshToken === "undefined") return;
  try {
    const res = await api.post("/auth/refresh-token", {
      refreshToken,
    });
    return res;
  } catch (error) {
    if (error.response?.status === 401 || error.response?.status === 403) {
      logoutUser();
    }
    return null;
  }
};
export default getNewTokens;
