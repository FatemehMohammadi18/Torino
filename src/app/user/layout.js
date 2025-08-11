"use client";
import UserSideBar from "@/components/modules/user/UserSideBar";
import Wrapper from "@/components/public/Wrapper";
import { UserContext } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

export default function UserLayout({ children }) {
  const pathname = usePathname();
  const { user, loading } = useContext(UserContext);
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!loading && !user && !redirecting) {
      setRedirecting(true);
      setTimeout(() => {
        router.push(`/?redirect=${encodeURIComponent(pathname)}`);
      }, 1000);
    }
  }, [user, loading, redirecting]);

  return (
    <div className="lg:py-8">
      <Wrapper>
        <div className="flex flex-col gap-4 lg:flex-row">
          <UserSideBar />
          <div className="lg:w-3/4 w-full">
            {loading && (
              <div className="flex justify-center items-center h-screen">
                <p>در حال بارگذاری...</p>
              </div>
            )}

            {!user && (
              <div className="flex flex-col gap-2 justify-center items-center h-screen">
                <h1 className="text-red-500 font-bold text-xl">
                  عدم دسترسی به صفحه
                </h1>
                <h2>لطفا اول ثبت نام کنید</h2>
                <p>در حال هدایت به صفحه اصلی...</p>
              </div>
            )}

            {children}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
