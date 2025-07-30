"use client";
import React, { useContext, useState } from "react";
import { useFormStatus } from "react-dom";
import { UserContext } from "context/UserContext";
import editProfile from "services/editUser";
import { Card, Input, Row, Select } from "@/utils/Card";
import Image from "next/image";

function SubmitButton({ label }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-1/2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "در حال ارسال..." : label}
    </button>
  );
}

async function handleFormSubmit(formData, section, setEditState, setUser) {
  const data = Object.fromEntries(formData);

  const payload = {};
  if (data.mobile) payload.mobile = data.mobile;
  if (data.email) payload.email = data.email;
  if (data.firstName) payload.firstName = data.firstName;
  if (data.lastName) payload.lastName = data.lastName;
  if (data.gender) payload.gender = data.gender;
  if (data.birthDate) payload.birthDate = data.birthDate;
  if (data.nationalCode) payload.nationalCode = Number(data.nationalCode);

  if (data.shaba_code || data.debitCard_code || data.accountIdentifier) {
    payload.payment = {};
    if (data.shaba_code) payload.payment.shaba_code = data.shaba_code;
    if (data.debitCard_code)
      payload.payment.debitCard_code = data.debitCard_code;
    if (data.accountIdentifier)
      payload.payment.accountIdentifier = data.accountIdentifier;
  }

  const res = await editProfile(payload);

  if (res) {
    setUser((prev) => ({
      ...prev,
      ...res.user,
    }));
    setEditState(false);
  } else {
    alert("خطا در به‌روزرسانی اطلاعات. لطفاً دوباره تلاش کنید.");
  }
}

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [editUserInfo, setEditUserInfo] = useState(false);
  const [editPersonalInfo, setEditPersonalInfo] = useState(false);
  const [editBankInfo, setEditBankInfo] = useState(false);

  const {
    mobile,
    email,
    firstName,
    lastName,
    gender,
    birthDate,
    nationalCode,
    payment: { shaba_code, debitCard_code, accountIdentifier } = {},
  } = user || {};

  return (
    <div className="min-h-screen w-full flex flex-col gap-4 text-sm">
      <Card
        title="اطلاعات حساب کاربری"
        extra={
          <button
            onClick={() => setEditUserInfo(!editUserInfo)}
            className={`text-complementary flex gap-1 items-center ${
              editUserInfo && `hidden`
            }`}
          >
            <Image src="/images/editIcon.svg" width={16} height={16} />

            {email ? "ویرایش" : "افزودن"}
          </button>
        }
      >
        {editUserInfo ? (
          <form
            action={(formData) =>
              handleFormSubmit(formData, "userInfo", setEditUserInfo, setUser)
            }
            className="lg:w-full lg:flex lg:flex-wrap"
          >
            <Input label="شماره موبایل" defaultValue={mobile} name="mobile" />
            <Input label="ایمیل" defaultValue={email} name="email" />
            <div className="flex gap-4 justify-center mt-2 lg:mr-auto">
              <SubmitButton label="تایید" />
              <button
                type="button"
                onClick={() => setEditUserInfo(false)}
                className="w-1/2 px-6 py-2 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
              >
                انصراف
              </button>
            </div>
          </form>
        ) : (
          <>
            <Row label="شماره موبایل" value={mobile} />
            <div>
              <Row label="ایمیل" value={email} />
            </div>
          </>
        )}
      </Card>

      <Card
        title="اطلاعات شخصی"
        extra={
          <button
            onClick={() => setEditPersonalInfo(!editPersonalInfo)}
            className={`text-complementary flex gap-1 items-center ${
              editPersonalInfo && `hidden`
            }`}
          >
            <Image src="/images/editIcon.svg" width={16} height={16} />

            {firstName || lastName || nationalCode || birthDate
              ? "ویرایش"
              : "افزودن"}
          </button>
        }
      >
        {editPersonalInfo ? (
          <form
            action={(formData) =>
              handleFormSubmit(
                formData,
                "personalInfo",
                setEditPersonalInfo,
                setUser
              )
            }
            className="lg:w-full lg:flex lg:flex-wrap"
          >
            <Input label="نام" defaultValue={firstName} name="firstName" />
            <Input
              label="نام خانوادگی"
              defaultValue={lastName}
              name="lastName"
            />
            <Input
              label="کد ملی"
              defaultValue={nationalCode}
              name="nationalCode"
            />
            <Select label="جنسیت" defaultValue={gender} name="gender" />
            <Input
              label="تاریخ تولد"
              type="date"
              defaultValue={birthDate}
              name="birthDate"
            />
            <div className="flex gap-4 justify-center mt-2 lg:mr-auto lg:w-full">
              <SubmitButton label="تایید" />
              <button
                type="button"
                onClick={() => setEditPersonalInfo(false)}
                className="w-1/2 px-6 py-2 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
              >
                انصراف
              </button>
            </div>
          </form>
        ) : (
          <>
            <Row
              label="نام و نام خانوادگی"
              value={`${firstName || ""} ${lastName || ""}`}
            />
            <Row label="کد ملی" value={nationalCode} />
            <Row
              label="جنسیت"
              value={
                gender === "male" ? "مرد" : gender === "female" ? "زن" : "_"
              }
            />
            <Row label="تاریخ تولد" value={birthDate} />
          </>
        )}
      </Card>

      <Card
        title="اطلاعات حساب بانکی"
        extra={
          <button
            onClick={() => setEditBankInfo(!editBankInfo)}
            className={`text-complementary flex gap-1 items-center ${
              editBankInfo && `hidden`
            }`}
          >
            <Image src="/images/editIcon.svg" width={16} height={16} />
            {debitCard_code || shaba_code || accountIdentifier || birthDate
              ? "ویرایش"
              : "افزودن"}
          </button>
        }
      >
        {editBankInfo ? (
          <form
            action={(formData) =>
              handleFormSubmit(formData, "bankInfo", setEditBankInfo, setUser)
            }
            className="lg:w-full lg:flex lg:flex-wrap"
          >
            <Input
              label="شماره کارت"
              defaultValue={debitCard_code}
              name="debitCard_code"
            />
            <Input
              label="شماره شبا"
              defaultValue={shaba_code}
              name="shaba_code"
            />
            <Input
              label="شماره حساب"
              defaultValue={accountIdentifier}
              name="accountIdentifier"
            />
            <div className="flex gap-4 justify-center mt-2 lg:mr-auto lg:w-full">
              <SubmitButton label="تایید" />
              <button
                type="button"
                onClick={() => setEditBankInfo(false)}
                className="w-1/2 px-6 py-2 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
              >
                انصراف
              </button>
            </div>
          </form>
        ) : (
          <>
            <Row label="شماره کارت" value={debitCard_code} />
            <Row label="شماره شبا" value={shaba_code} />
            <Row label="شماره حساب" value={accountIdentifier} />
          </>
        )}
      </Card>
    </div>
  );
}

export default Profile;
