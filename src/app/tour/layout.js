import Wrapper from "@/components/public/Wrapper";

export default function TourLayout({ children }) {
  return (
    <div className="bg-neutral-100 py-8">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
