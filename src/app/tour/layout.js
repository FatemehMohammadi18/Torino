import Wrapper from "@/components/public/Wrapper";

export default function TourLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
