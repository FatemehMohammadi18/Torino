import getData from "@/actions/tours";
import TourDetails from "@/components/public/TourDetails";

async function page() {
  const tours = await getData();
  return (
    <div className="py-6">
      <TourDetails tours={tours}/>
    </div>
  );
}

export default page;
