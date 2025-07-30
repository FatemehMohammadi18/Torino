import CallToBookBanner from "@/components/modules/home/CallToBookBanner";
import SearchTour from "@/components/modules/home/SearchTour";
import SiteFeatures from "@/components/modules/home/SiteFeatures";
import WhyTorino from "@/components/modules/home/WhyTorino";
import TourDetails from "@/components/public/TourDetails";
import Wrapper from "@/components/public/Wrapper";
import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div>
      <div className="min-w-full min-h-[119px] lg:min-h-[350px]">
        <Image
          src="/images/headerImage.jpg"
          width={1440}
          height={350}
          alt="تورینو"
          className="w-full object-cover"
          priority
        />
      </div>
      <Wrapper>
        <SearchTour />
        <div className="p-4 xl:p-0 xl:py-12">
          <h2 className="text-xl font-normal text-[#000000] mb-2">
            {" "}
            همه تورها
          </h2>
          <TourDetails />
        </div>
        <CallToBookBanner />
        <WhyTorino />
        <SiteFeatures />
      </Wrapper>
    </div>
  );
}

export default HomePage;
