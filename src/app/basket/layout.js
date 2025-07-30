"use client";
import { useContext, useEffect } from "react";
import Wrapper from "@/components/public/Wrapper";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function BasketLayout({ children }) {
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
    <div className="bg-neutral-100 py-2">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
