import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function ModalContainer({ children, isOpen, setIsOpen }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const deleteQuery = () => {
    if (searchParams.has("redirect")) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("redirect");
      router.replace(`?${newParams.toString()}`, { scroll: false });
    }
  };

  if (!isOpen) return;
  return (
    <div
      onClick={() => {
        setIsOpen(false);
        deleteQuery();
      }}
      className="fixed bg-black/30 backdrop-blur-sm inset-0 z-50 flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export default ModalContainer;
