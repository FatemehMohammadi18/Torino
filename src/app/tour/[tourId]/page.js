import React from "react";
import Image from "next/image";
import ReserveButton from "@/components/atomic/ReserveButton";

async function getTourDetails(tourId) {
  const res = await fetch(`http://localhost:6500/tour/${tourId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("خطا در دریافت اطلاعات تور");
  return await res.json();
}

async function page({ params }) {
  const { tourId } = await params;
  const tour = await getTourDetails(tourId);
  const startDate = new Date(tour.startDate);
  const endDate = new Date(tour.endDate);
  const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
  const nights = totalDays - 1;

  const infoItems = [
    { icon: "fleetVehicle", label: "حمل و نقل", value: tour.fleetVehicle },
    { icon: "availableSeats", label: "ظرفیت", value: tour.availableSeats },
    {
      icon: "insurance",
      label: "بیمه",
      value: tour.insurance ? "دارد" : "ندارد",
    },
  ];

  const detailItems = [
    { icon: "origin", label: "مبدا", value: tour.origin.name },
    {
      icon: "startDate",
      label: "تاریخ رفت",
      value: new Date(tour.startDate).toLocaleDateString("fa-IR"),
    },
    {
      icon: "endDate",
      label: "تاریخ برگشت",
      value: new Date(tour.startDate).toLocaleDateString("fa-IR"),
    },
    ...infoItems,
  ];

  return (
    <div className="my-6 lg:bg-white lg:border border-black/20 lg:rounded-[10px] font-vazir">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 p-3 py-5">
        <div className="w-full lg:w-[397px] h-[220px]">
          <Image
            src={tour.image}
            width={327}
            height={159}
            alt={tour.title}
            className="w-full h-full rounded-xl object-contain"
          />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div className="flex justify-between lg:flex-col lg:items-start gap-4 mt-2">
            <strong className="text-2xl lg:text-[32px] font-extrabold">
              {tour.title}
            </strong>
            <small className="text-[15px] font-normal lg:text-xl">
              {totalDays} روز و {nights} شب
            </small>
          </div>

          <div className="flex gap-5 flex-wrap mt-3 text-mute2">
            {tour.options.map((item, i) => (
              <small key={i} className="lg:text-lg">
                {item}
              </small>
            ))}
          </div>

          <div className="flex justify-between mt-4 lg:hidden">
            {infoItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="flex items-center gap-2 text-mute2">
                  <Image
                    src={`/images/${item.icon}.svg`}
                    width={16}
                    height={16}
                    alt={item.label}
                  />
                  {item.label}
                </span>
                <strong className="text-sm">{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center py-1.5 lg:flex-row-reverse">
            <ReserveButton
              tourId={tourId}
              availableSeats={tour.availableSeats}
            />
            <span className="text-2xl lg:text-[28px] font-medium text-complementary">
              {tour.price}
              <small className="text-[10px] lg:text-sm font-normal text-mute mr-1">
                تومان
              </small>
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-wrap justify-between mt-4 mb-3 px-6 py-2 gap-4">
        {detailItems.map((item, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2">
              <span className="flex items-center gap-2 text-mute2 lg:text-lg lg:font-normal">
                <Image
                  src={`/images/${item.icon}.svg`}
                  width={16}
                  height={16}
                  alt={item.label}
                />
                {item.label}
              </span>
              <strong className="text-sm lg:text-base">{item.value}</strong>
            </div>

            {i !== detailItems.length - 1 && (
              <div className="w-px bg-black/25 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default page;
