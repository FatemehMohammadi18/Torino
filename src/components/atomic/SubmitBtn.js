"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitBtn({ step }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className=" bg-primary p-2 rounded-md text-white font-vazir font-medium text-lg"
    >
      {step === "login"
        ? pending
          ? "در حال ارسال..."
          : "ارسال کد تایید"
        : pending
        ? "در حال ارسال..."
        : "ورود به تورینو"}
    </button>
  );
}

export default SubmitBtn;
