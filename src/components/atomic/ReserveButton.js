"use client";

import { useToast } from "@/context/toastContext";
import { UserContext } from "@/context/UserContext";
import { addToBasket } from "@/services/addToBaket";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function ReserveButton({ tourId, availableSeats }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useContext(UserContext);
  const [redirecting, setRedirecting] = useState(false);
  const { showToast } = useToast();

  const handleClick = async () => {
    if (!loading && !user) {
      setRedirecting(true);
      showToast({ message: "ابتدا در سایت ثبت نام کنید.", type: "error" });
      setTimeout(() => {
        router.push(`/?redirect=${encodeURIComponent(pathname)}`);
      }, 1000);
    } else {
      await addToBasket(tourId);
      router.push("/basket");
    }
  };

  return (
    <button
      disabled={availableSeats === 0}
      onClick={handleClick}
      className="bg-primary text-white text-xl px-10 py-2 rounded-[10px] lg:text-2xl lg:px-12 lg:py-3.5 disabled:cursor-not-allowed disabled:bg-primary/50"
    >
      {availableSeats === 0 ? "ظرفیت تکمیل" : "رزرو و خرید"}
    </button>
  );
}
