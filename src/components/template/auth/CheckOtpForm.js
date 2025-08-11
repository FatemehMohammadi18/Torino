"use client";
import React, { useActionState, useContext, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import SubmitBtn from "../../atomic/SubmitBtn";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import { TwoMinuteTimer } from "./TwoMinuteTimer";
import { checkOtpAction } from "actions/checkOtpAction";
import { setCookie } from "@/utils/cookie";
import { UserContext } from "@/context/UserContext";

function CheckOtpForm({ mobile, setStep, setIsOpen, onSuccess }) {
  const [code, setCode] = useState("");
  const [showResend, setShowResend] = useState(false);
  const [state, formAction] = useActionState(checkOtpAction, null);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (state?.success) {
      const { accessToken, refreshToken, user } = state.data;
      setCookie(state.data);
      setUser(user);

      setIsOpen(false);

      setTimeout(() => {
        onSuccess();
      }, 100);
    }
  }, [state]);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[358px] lg:w-[561px] h-[362px] p-6 rounded-[20px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative flex flex-col gap-3"
    >
      <div className="absolute top-3 left-3 cursor-pointer">
        <ArrowLeftIcon onClick={() => setStep("login")} />
      </div>
      <h2 className="text-[22px] lg:text-[28px] font-semibold text-center mt-9">
        کد تایید را وارد کنید.
      </h2>
      <form
        action={formAction}
        className="h-3/4 flex flex-col justify-between  px-3"
      >
        <div className="flex flex-col gap-5 items-center">
          <p className="font-normal text-sm lg:text-base">
            کد تایید به شماره
            <span className=" font-vazir"> {mobile} </span>
            ارسال شد.
          </p>
          <OtpInput
            value={code}
            onChange={setCode}
            numInputs={6}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
            shouldAutoFocus
            inputStyle={{
              border: "1px solid rgba(0, 0, 0, 0.25)",
              borderRadius: "6px",
              width: "45px",
              height: "45px",
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
              caretColor: "blue",
              direction: "ltr",
            }}
            focusStyle={{
              border: "1px solid #CFD3DB",
              outline: "none",
            }}
            containerStyle={{
              display: "flex",
              flexDirection: "row",
              gap: "6px",
              direction: "ltr",
              justifyContent: "center",
            }}
          />
          <input type="hidden" name="mobile" value={mobile} />
          <input type="hidden" name="code" value={code} />
          <TwoMinuteTimer
            onTimeout={() => setShowResend(true)}
            mobile={mobile}
            showResend={showResend}
            setShowResend={setShowResend}
          />
        </div>
        <SubmitBtn />
      </form>
    </div>
  );
}

export default CheckOtpForm;
