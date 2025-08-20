import getData from "@/actions/tours";
import CallToBookBanner from "@/components/modules/home/CallToBookBanner";
import SearchTour from "@/components/modules/home/SearchTour";
import SiteFeatures from "@/components/modules/home/SiteFeatures";
import WhyTorino from "@/components/modules/home/WhyTorino";
import TourDetails from "@/components/public/TourDetails";
import Wrapper from "@/components/public/Wrapper";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const query = new URLSearchParams(params).toString();
  const tours = await getData(query);
  return (
    <div>
      <main>
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
          <div className="p-4 xl:p-0 xl:pb-12 xl:pt-5">
            <TourDetails initialTours={tours} />
          </div>
          <CallToBookBanner />
          <WhyTorino />
          <SiteFeatures />
        </Wrapper>
      </main>
    </div>
  );
}
