"use server";

import { mobileValid } from "@/utils/validations";

export async function sendOtpAction(previusState, formData) {
  let mobile;
  if (typeof formData?.get === "function") {
    mobile = formData.get("mobile");
  } else if (typeof previusState === "string") {
    mobile = previusState;
  }
  if (!mobileValid(mobile)) {
    return { success: false, error: "شماره موبایل نامعتبر است" };
  }
  try {
    const res = await fetch("http://localhost:6500/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile }),
    });
    const result = await res.json();
    if (!res.ok) {
      return { success: false, error: result?.message || "ارسال ناموفق بود" };
    }
    return {
      success: true,
      message: result.message,
      code: result.code,
      mobile,
    };
  } catch (error) {
    // return Promise.reject(error);
    return { success: false, error: "ارسال ناموفق بود" };
  }
}
