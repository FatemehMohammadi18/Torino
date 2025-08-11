"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import getData from "@/actions/tours";

import PersianDatePicker from "@/components/public/PersianDatePicker";

function SearchTour() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);

  const router = useRouter();

  useEffect(() => {
    async function fetchTours() {
      const tours = await getData();
      if (!tours) return;

      const originSet = new Map();
      const destinationSet = new Map();

      tours.forEach((tour) => {
        if (tour.origin) originSet.set(tour.origin.id, tour.origin.name);
        if (tour.destination)
          destinationSet.set(tour.destination.id, tour.destination.name);
      });

      setOrigins([...originSet.entries()]);
      setDestinations([...destinationSet.entries()]);
    }

    fetchTours();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [startDate, endDate] = dateRange;

    const startDateObj = startDate.toDate();
    startDateObj.setUTCHours(0, 0, 0, 0);
    const startDateISO = startDateObj.toISOString();

    const endDateObj = endDate.toDate();
    endDateObj.setUTCHours(0, 0, 0, 0);
    const endDateISO = endDateObj.toISOString();

    const filters = {};
    if (destination) filters.destinationId = destination;
    if (origin) filters.originId = origin;
    filters.startDate = startDateISO;
    filters.endDate = endDateISO;

    const query = new URLSearchParams(filters).toString();
    router.push(`/?${query}`, {scroll: false});
  };

  return (
    <div className="py-4">
      <h1 className="flex justify-center text-base text-[rgba(89, 89, 89, 1)] font-semibold lg:text-[28px]">
        <span className="text-primary ml-2 mb-3">تورینو</span>
        برگزارکننده بهترین تورهای داخلی و خارجی
      </h1>
      <div className="relative">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center lg:justify-between mt-4 gap-4 lg:gap-0 lg:border-[1px] lg:p-3 lg:rounded-[20px]"
        >
          <select
            name="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="origin w-5/12 h-[47px] appearance-none border rounded px-8 py-1 text-center lg:border-0 lg:w-[23%] lg:text-start lg:px-2"
          >
            <option value="" className="hidden">
              مبدا
            </option>
            {origins.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <hr className="hidden lg:block w-0.5 min-h-[50px] bg-black/60" />
          <select
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="destination w-5/12 h-[47px] appearance-none border rounded px-8 py-1 text-center lg:border-0 lg:w-[23%] lg:text-start lg:px-2"
          >
            <option value="" className="hidden">
              مقصد
            </option>
            {destinations.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <hr className="hidden lg:block w-0.5 min-h-[50px] bg-black/60" />

          <PersianDatePicker
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
          <button
            type="submit"
            className="min-w-full bg-primary text-white px-4 py-2 rounded-2xl text-xl font-normal lg:min-w-1/4"
          >
            جستجو
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchTour;
