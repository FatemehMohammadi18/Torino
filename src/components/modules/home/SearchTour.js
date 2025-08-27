"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import getData from "@/actions/tours";

import PersianDatePicker from "@/components/public/PersianDatePicker";

import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function SearchTour() {
  const [origin, setOrigin] = useState({ id: "", name: "" });
  const [destination, setDestination] = useState({ id: "", name: "" });
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);

  const router = useRouter();
  const searchParams = useSearchParams();

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

  useEffect(() => {
    if (!origins.length && !destinations.length) return;

    const params = Object.fromEntries(searchParams.entries());

    if (params.originId && !origin.id) {
      const foundOrigin = origins.find(([id]) => id === params.originId);
      if (foundOrigin) {
        setOrigin({ id: foundOrigin[0], name: foundOrigin[1] });
      }
    }
    if (params.destinationId && !destination.id) {
      const foundDestination = destinations.find(
        ([id]) => id === params.destinationId
      );
      if (foundDestination) {
        setDestination({ id: foundDestination[0], name: foundDestination[1] });
      }
    }
    if (params.startDate) {
      const start = new DateObject({
        date: new Date(params.startDate),
        calendar: persian,
        locale: persian_fa,
      });
      setDateRange((prev) => [start, prev[1]]);
    }

    if (params.endDate) {
      const end = new DateObject({
        date: new Date(params.endDate),
        calendar: persian,
        locale: persian_fa,
      });
      setDateRange((prev) => [prev[0], end]);
    }
  }, [searchParams, origins, destinations]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [startDate, endDate] = dateRange;

    const filters = {};

    if (origin.id) filters.originId = origin.id;
    if (destination.id) filters.destinationId = destination.id;

    if (startDate) {
      const startDateObj = startDate.toDate();
      startDateObj.setUTCHours(0, 0, 0, 0);
      filters.startDate = startDateObj.toISOString();
    }

    if (endDate) {
      const endDateObj = endDate.toDate();
      endDateObj.setUTCHours(0, 0, 0, 0);
      filters.endDate = endDateObj.toISOString();
    }

    const query = new URLSearchParams(filters).toString();
    router.push(`/?${query}`, { scroll: false });
  };

  const handleClearAllFilters = () => {
    setOrigin({ id: "", name: "" });
    setDestination({ id: "", name: "" });
    setDateRange([null, null]);
    router.push("/", { scroll: false });
  };

  const handleRemoveFilter = (key) => {
    const params = Object.fromEntries(searchParams.entries());
    delete params[key];

    if (key === "originId") setOrigin({ id: "", name: "" });
    if (key === "destinationId") setDestination({ id: "", name: "" });
    if (key === "startDate") setDateRange([null, dateRange[1]]);
    if (key === "endDate") setDateRange([dateRange[0], null]);

    const query = new URLSearchParams(params).toString();
    router.push(`/?${query}`, { scroll: false });
  };

  const activeFilters = () => {
    const params = Object.fromEntries(searchParams.entries());
    const filters = [];

    if (params.originId) {
      const found = origins.find(([id]) => id === params.originId);
      if (found) filters.push({ key: "originId", label: `مبدا: ${found[1]}` });
    }

    if (params.destinationId) {
      const found = destinations.find(([id]) => id === params.destinationId);
      if (found)
        filters.push({ key: "destinationId", label: `مقصد: ${found[1]}` });
    }

    if (params.startDate) {
      const start = new DateObject({
        date: new Date(params.startDate),
        calendar: persian,
        locale: persian_fa,
      });
      filters.push({
        key: "startDate",
        label: `تاریخ رفت: ${start.format("YYYY/MM/DD")}`,
      });
    }

    if (params.endDate) {
      const end = new DateObject({
        date: new Date(params.endDate),
        calendar: persian,
        locale: persian_fa,
      });
      filters.push({
        key: "endDate",
        label: `تاریخ برگشت: ${end.format("YYYY/MM/DD")}`,
      });
    }

    return filters;
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
            value={origin.id}
            onChange={(e) => {
              const selectedId = e.target.value;
              const selectedName =
                e.target.options[e.target.selectedIndex].text;
              setOrigin({ id: selectedId, name: selectedName });
            }}
            className="origin w-5/12 h-[47px] appearance-none border rounded px-8 py-1 text-center lg:border-0 lg:w-[23%] lg:text-start lg:px-2"
          >
            <option value="" className="hidden">
              {origin.name || "مبدا"}
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
            value={destination.id}
            onChange={(e) => {
              const selectedId = e.target.value;
              const selectedName =
                e.target.options[e.target.selectedIndex].text;
              setDestination({ id: selectedId, name: selectedName });
            }}
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
      {activeFilters().length > 0 ? (
        <div className="mt-6">
          <h2 className="text-xl font-normal text-[#000000] mb-3">فیلترها:</h2>
          <div className="flex flex-wrap gap-2">
            {activeFilters().map((filter) => (
              <span
                key={filter.key}
                className="flex justify-between items-center gap-2 border-[1px] border-secondary bg-secondary text-white px-2 pt-1 rounded-xl text-sm cursor-pointer"
              >
                {filter.label}
                <button
                  type="button"
                  onClick={() => handleRemoveFilter(filter.key)}
                  className="flex justify-center items-center pt-0.5"
                >
                  ✕
                </button>
              </span>
            ))}
            <button
              type="button"
              onClick={handleClearAllFilters}
              className="mr-auto text-sm text-white bg-red-700 hover:bg-red-800 px-3 pt-1 rounded-xl"
            >
              حذف همه ✕
            </button>
          </div>
        </div>
      ) : (
        <h2 className="text-xl font-normal text-[#000000] mt-14">همه تورها</h2>
      )}
    </div>
  );
}

export default SearchTour;
