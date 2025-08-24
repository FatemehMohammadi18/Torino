"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TourDetails({ initialTours }) {
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const [tours, setTours] = useState(initialTours);

  useEffect(() => {
    if (!query) {
      setTours(initialTours);
      return;
    }

    async function fetchTours() {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const url = `${baseUrl}/tour?${query}`;
      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();
      setTours(data);
    }
    fetchTours();
  }, [query, initialTours]);

  return (
    <div className="flex flex-wrap justify-center gap-8 xl:gap-4 xl:justify-start">
      {tours?.length > 0 ? (
        tours.map((tour) => (
          <Link
            key={tour.id}
            href={`/tour/${tour.id}`}
            className="bg-white min-w-[327px] min-h-[277px] border-[1px] border-solid border-black/10 rounded-[10px] xl:max-w-[278.5px] xl:min-w-[278.5px]"
          >
            <div className="w-full">
              <Image
                src={tour.image}
                width={327}
                height={159}
                alt={tour.title}
              />
            </div>
            <div className="flex flex-col gap-2 px-2 py-1.5">
              <strong className="font-normal text-[22px]">{tour.title}</strong>
              <p className=" text-[15px] font-normal">
                {tour.options.map((item, index) => (
                  <small key={index}>{item}-</small>
                ))}
              </p>
            </div>
            <div className=" flex justify-between items-center border-t-[1px] border-black/10 py-1.5 px-2">
              <button className="bg-primary text-white text-[15px] font-normal cursor-pointer px-10 py-1 rounded-[4px]">
                رزرو
              </button>
              <span className="font-normal text-base text-complementary">
                {tour.price}
                <small className="text-xs text-mute mr-1">تومان</small>
              </span>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500">تور یافت نشد.</p>
      )}
    </div>
  );
}
