"use client";
import ProfileIcon from "@/components/icons/ProfileIcon";
import SignInButtomIcon from "@/components/icons/SignInButtom";
import React, { useState } from "react";
import SendOtpForm from "../template/auth/SendOtpForm";
import ModalContainer from "@/components/container/ModalContainer";
import CheckOtpForm from "../template/auth/CheckOtpForm";

function BtnLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("login");
  const [mobile, setMobile] = useState("");
  return (
    <>
      <SignInButtomIcon
        className="block lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hidden cursor-pointer text-lg font-semibold border-2 border-primary rounded-lg text-primary py-1.5 px-3 gap-1 lg:flex lg:items-center lg:justify-center"
      >
        <ProfileIcon className="mt-1" />

        <span className="ml-2">ورود / ثبت نام</span>
      </button>

      {step === "login" && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOtpForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
      {step === "otp" && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <CheckOtpForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </>
  );
}

export default BtnLogin;
