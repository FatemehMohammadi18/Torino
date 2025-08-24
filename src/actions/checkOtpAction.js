"use server";
export async function checkOtpAction(previusState, formData) {
  const mobile = formData.get("mobile");
  const code = formData.get("code");

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/auth/check-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, code }),
    });

    const result = await res.json();
    if (!res.ok) {
      return { success: false, error: result?.message || "ارسال ناموفق بود" };
    }
    return {
      success: true,
      message: result.message,
      data: result,
    };
  } catch (error) {
    return { success: false, error: "ارسال ناموفق بود" };
  }
}
