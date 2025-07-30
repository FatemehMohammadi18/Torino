"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PersianDatePicker from "@/components/public/PersianDatePicker";
import { getData } from "actions/tours";

export default function SearchTour() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const [startDate, endDate] = dateRange;

    if (!origin || !destination || !startDate || !endDate) {
      alert("لطفاً همه فیلدها را پر کنید");
      return;
    }

    const startISO = convertDateObjectToISO(startDate);
    const endISO = convertDateObjectToISO(endDate);

    const query = new URLSearchParams({
      destinationId: destination,
      originId: origin,
      startDate: startISO,
      endDate: endISO,
    }).toString();

    router.push(`/tour?${query}`);
  };

  return (
    <div className="py-4">
      <h1 className="flex justify-center text-base text-[rgba(89, 89, 89, 1)] font-semibold lg:text-[28px]">
        <span className="text-primary ml-2 mb-3">تورینو</span>
        برگزارکننده بهترین تورهای داخلی و خارجی
      </h1>
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

        <PersianDatePicker dateRange={dateRange} setDateRange={setDateRange} />

        <button
          type="submit"
          className="min-w-full bg-primary text-white px-4 py-2 rounded-2xl text-xl font-normal lg:min-w-1/4"
        >
          جستجو
        </button>
      </form>
    </div>
  );
}

import gregorian from "react-date-object/calendars/gregorian";

function convertDateObjectToISO(dateObj) {
  if (!dateObj || typeof dateObj.convert !== "function") return null;

  const gregorianDate = dateObj.convert(gregorian);
  const date = gregorianDate.toDate().toISOString();
  return date;
}
