"use client";
import UserSideBar from "@/components/modules/user/UserSideBar";
import Wrapper from "@/components/public/Wrapper";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

export default function UserLayout({ children }) {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (!user)
    return (
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <h1 className="text-red-500 font-bold text-xl">عدم دسترسی به صفحه</h1>
        <h2>لطفا اول ثبت نام کنید</h2>
        <p>در حال هدایت به صفحه اصلی...</p>
      </div>
    );
  return (
    <div className="lg:py-8">
      <Wrapper>
        <div className="flex flex-col gap-4 lg:flex-row">
          <UserSideBar />
          <div className="lg:w-3/4 w-full">{children}</div>
        </div>
      </Wrapper>
    </div>
  );
}
