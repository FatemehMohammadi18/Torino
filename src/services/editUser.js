import api from "config/api";

const editProfile = async (data) => {
  try {
    const res = await api.put("/user/profile", data);
    return res;
  } catch (error) {
    return false;
  }
};

export default editProfile;
