"use client";
import React, { useEffect, useState } from "react";
import api from "config/api";

async function userTour() {
  try {
    const res = await api.get("/user/tours");
    return res;
  } catch (error) {
    console.error("خطا در دریافت تورها:", error);
    return [];
  }
}

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function fetchTours() {
      const data = await userTour();
      setTours(data);
    }
    fetchTours();
  }, []);

  return (
    <ul className="min-h-screen flex flex-col gap-4 md:rounded-[10px] md:border-[1px] md:border-black/20 p-4">
      {tours.length > 0 ? (
        tours.map((tour) => (
          <li
            key={Math.random()}
            className="flex flex-col relative gap-4 font-normal rounded-[10px] border-[1px] border-black/20"
          >
            {/* <span className="absolute top-2 left-2 p-1 px-1.5 rounded-full bg-amber-300/30 text-[10px] font-normal text-amber-500">
            درحال برگزاری
          </span> */}
            <span className="absolute top-2 left-2 p-1 px-1.5 rounded-full bg-primary/30 text-[8px] font-normal text-primary md:hidden">
              به اتمام رسیده
            </span>
            <div className="flex gap-6 justify-start items-center text-sm px-4 mt-6 md:text-base md:justify-between md:mt-3">
              <span>{tour.title}</span>
              <span className="text-sm">سفر با {tour.fleetVehicle}</span>
              {/* <span className="p-1 px-1.5 rounded-full bg-amber-300/30 text-[10px] font-normal text-amber-500 md:py-0.5">
            درحال برگزاری
          </span> */}
              <span className="p-1 px-1.5 rounded-full bg-primary/30 text-[8px] font-normal text-primary md:py-0.5">
                به اتمام رسیده
              </span>
            </div>
            <div className="flex flex-col gap-8 px-4 md:flex-row md:gap-24">
              <div className="flex justify-between md:gap-3 md:w-1/3 md:justify-start">
                <strong className="text-base font-semibold">
                  {tour.origin.name} به {tour.destination.name}
                </strong>
                <span className="font-normal text-sm list-item">
                  {new Date(tour.startDate).toLocaleDateString("fa-IR")}
                </span>
              </div>
              <div className="flex justify-between md:gap-3 md:w-1/3 md:justify-start">
                <strong className="text-base font-semibold">تاریخ برگشت</strong>
                <span className="font-normal text-sm list-disc">
                  {new Date(tour.endDate).toLocaleDateString("fa-IR")}
                </span>
              </div>
            </div>
            <div className="flex justify-start py-2 px-4 border-t-[1px] border-black/20 md:py-4">
              <div className="flex flex-wrap gap-2 justify-between items-center pl-6 border-l-[1px] border-black/20 py-1">
                <span className="text-[10px]">شماره تور</span>
                <span className="text-xs font-vazir font-medium">
                  {tour.id}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 justify-between items-center pr-6">
                <span className="text-[10px]">مبلغ پرداخت شده</span>
                <span className="text-xs font-vazir font-medium flex gap-1 items-center">
                  {tour.price.toLocaleString("fa-IR")}
                  <span className="font-light text-[10px] text-mute1">
                    تومان
                  </span>
                </span>
              </div>
            </div>
          </li>
        ))
      ) : (
        <h1 className="font-bold text-center lg:my-auto">
          در حال حاضر هیچ توری ندارید.
        </h1>
      )}
    </ul>
  );
}

export default Tours;
