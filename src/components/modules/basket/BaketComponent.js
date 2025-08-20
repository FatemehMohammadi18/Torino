"use client";
import { useContext, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UserContext } from "context/UserContext";
import api from "config/api";
import editProfile from "services/editUser";
import ProfileIcon from "@/components/icons/ProfileIcon";
import ArrowDownIcon from "@/components/icons/ArrowDown";
import { useToast } from "@/context/toastContext";
import { useRouter } from "next/navigation";

const ValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "باید بیشتر از 3 حرف  باشد.")
    .required("لطفا نام و نام خانوادگی خود را وارد کنید."),
  gender: Yup.string().required("لطفا جنسیت خود را وارد کنید."),
  birthDate: Yup.string().required("لطفا تاریخ تولد خود را وارد کنید."),
  nationalCode: Yup.string()
    .min(10, "باید بیشتر از 10 حرف  باشد.")
    .required("لطفا کدملی خود را وارد کنید."),
});

export default function BasketComponent({ tour }) {
  const router = useRouter();
  const submitButtonRef = useRef(null);
  const { user, setUser } = useContext(UserContext);
  const { showToast } = useToast();
  const { firstName, lastName, gender, birthDate, nationalCode } = user || {};

  const handleSubmit = async (values) => {
    try {
      const payload = { ...values };
      const res = await api.post("/order", payload);
      const updateUser = {
        ...user,
        firstName: values.fullName.split(" ")[0],
        lastName: values.fullName.split(" ").slice(1).join(" "),
        gender: values.gender,
        birthDate: values.birthDate,
        nationalCode: values.nationalCode,
      };
      const editUser = await editProfile(updateUser);
      setUser(editUser?.user);
      router.replace("/user/tours");
      showToast({
        message: "سفارش با موفقیت ثبت شد!",
        type: "success",
      });
      return res;
    } catch (error) {
      showToast({
        message: error?.response?.data?.message || "خطایی رخ داد",
        type: "error",
      });
      return error;
    }
  };

  return (
    <>
      <div className="flex flex-col bg-white border-[1px] border-black/20 gap-3 p-4 rounded-[10px] xl:w-3/4">
        <h1 className="flex gap-1 items-center text-2xl font-normal font-vazir">
          <ProfileIcon className="w-6 h-6" />
          مشخصات مسافر
        </h1>
        <Formik
          initialValues={{
            fullName:
              firstName || lastName
                ? `${firstName || ""} ${lastName || ""}`
                : "",
            gender: gender || "",
            nationalCode: nationalCode || "",
            birthDate: birthDate || "",
          }}
          validationSchema={ValidationSchema}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="flex flex-wrap gap-6 xl:gap-1.5">
              <div className="w-full flex flex-col xl:w-[32%]">
                <Field
                  type="text"
                  name="fullName"
                  placeholder="نام و نام خانوادگی"
                  className="border border-[#808080] rounded-[5px] text-sm p-2"
                />
                <ErrorMessage
                  name="fullName"
                  component="span"
                  className="text-red-500 text-xs mt-2"
                />
              </div>
              <div className="relative w-full xl:w-[32%]">
                <Field
                  as="select"
                  name="gender"
                  className="appearance-none w-full border border-[#808080] rounded-[5px] text-sm p-2 pl-10"
                >
                  <option value="" disabled hidden>
                    جنسیت
                  </option>
                  <option value="female">مونث</option>
                  <option value="male">مذکر</option>
                </Field>
                <ArrowDownIcon className="w-3 h-3 absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none mt-1 fill-[#808080]" />
                <ErrorMessage
                  name="gender"
                  component="span"
                  className="text-red-500 text-xs mt-2"
                />
              </div>
              <div className="w-full flex flex-col xl:w-[32%]">
                <Field
                  type="text"
                  name="nationalCode"
                  placeholder="کد ملی"
                  className="border border-[#808080] rounded-[5px] text-sm p-2"
                />
                <ErrorMessage
                  name="nationalCode"
                  component="span"
                  className="text-red-500 text-xs mt-2"
                />
              </div>
              <div className="w-full flex flex-col xl:w-[32%]">
                <Field
                  type="date"
                  name="birthDate"
                  className="border border-[#808080] rounded-[5px] text-sm p-2"
                />
                <ErrorMessage
                  name="birthDate"
                  component="span"
                  className="text-red-500 text-xs mt-2"
                />
              </div>
              <button
                type="submit"
                ref={submitButtonRef}
                className="hidden"
                aria-hidden="true"
              >
                ثبت نهایی
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="bg-white border border-black/10 rounded-[10px] p-4 xl:w-1/4">
        <h2 className="flex justify-between text-2xl font-semibold py-3 border-b border-dotted border-black/10">
          {tour.title}
          <small className="font-vazir text-mute/100 text-base font-normal">
            {/* محاسبه روز و شب */}
            {Math.floor(
              (new Date(tour.endDate) - new Date(tour.startDate)) /
                (1000 * 60 * 60 * 24)
            )}{" "}
            روز و{" "}
            {Math.floor(
              (new Date(tour.endDate) - new Date(tour.startDate)) /
                (1000 * 60 * 60 * 24)
            ) - 1}{" "}
            شب
          </small>
        </h2>
        <div className="flex justify-between items-center font-vazir text-mute/100 py-3">
          قیمت نهایی
          <span className="flex items-center gap-1 text-complementary text-[28px]">
            {tour.price}
            <small className="text-black text-sm">تومان</small>
          </span>
        </div>

        <button
          onClick={() => {
            submitButtonRef.current?.click();
          }}
          className="bg-primary w-full text-white p-2 rounded-[10px] font-vazir"
        >
          ثبت و خرید نهایی
        </button>
      </div>
    </>
  );
}
