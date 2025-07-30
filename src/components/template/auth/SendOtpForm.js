"use client";
import React, { useActionState, useEffect, useState } from "react";

import { sendOtpAction } from "actions/sendOtpAction";

import DeleteIcon from "@/components/icons/DeleteIcon";

import SubmitBtn from "../../atomic/SubmitBtn";
import { mobileValid } from "@/utils/validations";
import { useToast } from "@/context/toastContext";

function SendOtpForm({ mobile, setMobile, step, setStep, setIsOpen }) {
  // In earlier React Canary versions, this API was part of React DOM and called "useFormState".
  const [state, formAction] = useActionState(sendOtpAction, null);
  const [clientError, setClientError] = useState(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (state?.success && state.message) {
      setMobile(state.mobile);
      setStep("otp");
      showToast({
        message: `${state.message} کد: ${state.code}`,
        type: "success",
      });
    }
    if (state?.error) {
      showToast({ message: state.error, type: "error" });
    }
  }, [state, showToast]);

  const handleSubmit = (e) => {
    if (!mobileValid(mobile)) {
      e.preventDefault();
      setClientError("شماره موبایل معتبر نیست.");
      return;
    }

    setClientError(null);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[358px] lg:w-[561px] h-[362px] p-6 rounded-[20px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative flex flex-col gap-6"
    >
      <div className="absolute top-3 left-3 cursor-pointer">
        <DeleteIcon onClick={() => setIsOpen(false)} />
      </div>
      <h2 className="text-[22px] lg:text-[28px] font-semibold text-center mt-9">
        ورود به تورینو
      </h2>
      <form
        onSubmit={handleSubmit}
        action={formAction}
        className="h-3/4 mt-6 flex flex-col justify-between p-3"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="mobile" className=" text-base font-light text-black">
            شماره موبایل خود را وارد کنید.
          </label>
          <input
            id="mobile"
            name="mobile"
            type="text"
            placeholder="4253***0912"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="border-[1px] border-[#00000043] rounded-md p-2 font-vazir"
          />

          {(clientError || state?.error) && (
            <span className="text-red-500 text-sm">
              {clientError || state.error}
            </span>
          )}
        </div>
        <SubmitBtn step={step} />
      </form>
    </div>
  );
}

export default SendOtpForm;
