import api from "config/api";

export async function addToBasket(tourId) {
  try {
    const res = await api.put(`/basket/${tourId}`);
    return res;
  } catch (error) {
    throw new Error("خطا در دریافت اطلاعات تور");
  }
}
