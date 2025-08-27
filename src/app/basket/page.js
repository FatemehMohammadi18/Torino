import BasketComponent from "@/components/modules/basket/BaketComponent";
import { cookies } from "next/headers";
import Image from "next/image";

const getTour = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/basket`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  return await res.json();
};

export default async function Page() {
  const tour = await getTour();
  return (
    <div className="flex flex-col gap-6 my-12 xl:flex-row xl:gap-3">
      {tour?.message ? (
        <div className="flex flex-col justify-between mx-auto">
          <h1 className="text-center font-black text-2xl mb-8">
            {tour?.message}
          </h1>
          <Image
            src="/images/empty-order.png"
            width={890}
            height={980}
            className="w-[300px]"
            alt="سبد خرید شما خالی است"
          />
        </div>
      ) : (
        <BasketComponent tour={tour} />
      )}
    </div>
  );
}
