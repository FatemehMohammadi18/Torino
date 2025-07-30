"use client";

import { addToBasket } from "@/services/addToBaket";
import { useRouter } from "next/navigation";

export default function ReserveButton({ tourId, availableSeats }) {
  const router = useRouter();

  const handleClick = async () => {
    await addToBasket(tourId);
    router.push("/basket");
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
