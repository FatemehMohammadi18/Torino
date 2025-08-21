import React from "react";

function loading() {
  return (
    <div className="py-6 min-h-screen">
      <div className="flex flex-wrap justify-center gap-8 xl:gap-4 xl:justify-start">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white min-w-[327px] min-h-[277px] border border-black/10 rounded-[10px] xl:max-w-[278.5px] xl:min-w-[278.5px] animate-pulse">
            {/* تصویر */}
            <div className="w-full h-[159px] bg-gray-200 rounded-t-[10px]" />

            {/* متن‌ها */}
            <div className="flex flex-col gap-2 px-2 py-1.5">
              <div className="h-6 w-3/4 bg-gray-200 rounded-md" />
              <div className="h-4 w-1/2 bg-gray-200 rounded-md" />
            </div>

            {/* دکمه + قیمت */}
            <div className="flex justify-between items-center border-t border-black/10 py-1.5 px-2">
              <div className="h-8 w-20 bg-gray-200 rounded-md" />
              <div className="h-5 w-16 bg-gray-200 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default loading;
