import React from "react";

function ModalContainer({ children, isOpen, setIsOpen }) {
  if (!isOpen) return;
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed bg-black/30 backdrop-blur-sm inset-0 z-50 flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export default ModalContainer;
