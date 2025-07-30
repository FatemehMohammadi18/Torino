import api from "@/config/api";

const getProfile = async () => {
  try {
    const res = await api.get("/user/profile");
    return res;
  } catch (error) {
    return false;
  }
};

export default getProfile;
