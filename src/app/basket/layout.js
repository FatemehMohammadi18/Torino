"use client";
import { useContext, useEffect, useState } from "react";
import Wrapper from "@/components/public/Wrapper";
import { UserContext } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";

export default function BasketLayout({ children }) {
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

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>در حال بارگذاری...</p>
      </div>
    );

  if (!user)
    return (
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <h1 className="text-red-500 font-bold text-xl">عدم دسترسی به صفحه</h1>
        <h2>لطفا اول ثبت نام کنید</h2>
        <p>در حال هدایت به صفحه اصلی...</p>
      </div>
    );
  return (
    <div className="bg-neutral-100 py-2 min-h-screen">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
