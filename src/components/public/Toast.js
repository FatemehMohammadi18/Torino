import React from "react";

function Toast({ type = "success", message, isVisible }) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed max-w-sm w-[90%] z-50 shadow-lg rounded-md transition-all duration-500 ease-in-out
    ${
      type === "success"
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-700"
    }
    left-1/2 top-10 -translate-x-1/2`}
    >
      <div className="flex items-center gap-3 p-4">
        <span className="bg-white p-2 rounded-full">
          {type === "success" ? "✅" : "❌"}
        </span>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

export default Toast;
