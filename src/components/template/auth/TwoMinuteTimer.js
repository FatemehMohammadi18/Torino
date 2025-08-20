"use client";

import { useToast } from "@/context/toastContext";
import { sendOtpAction } from "actions/sendOtpAction";
import { useEffect, useState } from "react";

export function TwoMinuteTimer({
  onTimeout,
  mobile,
  showResend,
  setShowResend,
}) {
  const [timeLeft, setTimeLeft] = useState(30);
  const { showToast } = useToast();

  const handleResend = async () => {
    setShowResend(false);
    setTimeLeft(30);
    const res = await sendOtpAction(mobile, null);
    if (res?.success) {
      showToast({
        message: `${res.message} کد: ${res.code}`,
        type: "success",
      });
    } else {
      showToast({
        message: res.error || "ارسال ناموفق بود",
        type: "error",
      });
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowResend(true);
      onTimeout?.();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="font-light text-xs mt-6 font-vazir text-center">
      {showResend ? (
        <button
          onClick={handleResend}
          className="text-secondary font-bold underline"
        >
          ارسال مجدد کد
        </button>
      ) : (
        <span>
          {minutes}:{seconds.toString().padStart(2, "0")} تا ارسال مجدد کد
        </span>
      )}
    </div>
  );
}
