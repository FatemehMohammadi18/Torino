import TourDetails from "@/components/public/TourDetails";
import React from "react";

async function page({ searchParams }) {
  const newSearchParams = await searchParams;
  return (
    <div className="py-6">
      <TourDetails searchParams={newSearchParams} />
    </div>
  );
}

export default page;
