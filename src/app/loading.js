import React from "react";

function loading() {
  return (
    <div>
      <main>
        <div className="min-w-full min-h-[119px] lg:min-h-[421px]">
          <div className="h-full w-full bg-gray-200 animate-pulse rounded-md" />
        </div>

        <div className="max-w-[1200px] px-[12px] mx-auto">
          <div className="py-4">
            <div className="flex justify-center animate-pulse">
              <div className="h-6 w-3/4 lg:h-8 lg:w-1/2 bg-gray-200 rounded-md" />
            </div>

            <div className="relative mt-4 animate-pulse">
              <div className="flex flex-wrap justify-center lg:justify-between gap-4 lg:gap-0 lg:border lg:p-3 lg:rounded-2xl">
                <div className="w-5/12 h-[47px] lg:w-[23%] bg-gray-200 rounded-md" />
                <div className="hidden lg:block w-0.5 min-h-[50px] bg-gray-300" />
                <div className="w-5/12 h-[47px] lg:w-[23%] bg-gray-200 rounded-md" />
                <div className="hidden lg:block w-0.5 min-h-[50px] bg-gray-300" />
                <div className="w-5/12 h-[47px] lg:w-[23%] bg-gray-200 rounded-md" />
                <div className="min-w-full lg:min-w-1/4 h-[47px] bg-gray-200 rounded-2xl" />
              </div>
            </div>

            <div className="mt-14 animate-pulse">
              <div className="h-6 w-32 bg-gray-200 rounded-md" />
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] px-[12px] mx-auto">
          <div className="p-4 xl:p-0 xl:pb-12 xl:pt-5">
            <div className="flex flex-wrap justify-center gap-8 xl:gap-4 xl:justify-start">
              {/* فرض می‌کنیم 4 skeleton تور می‌سازیم */}
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="bg-white min-w-[327px] min-h-[277px] border-[1px] border-solid border-black/10 rounded-[10px] xl:max-w-[278.5px] xl:min-w-[278.5px] animate-pulse"
                >
                  <div className="w-full h-[159px] bg-gray-200 rounded-t-[10px]" />

                  <div className="flex flex-col gap-2 px-2 py-1.5">
                    <div className="h-6 w-3/4 bg-gray-200 rounded-md" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded-md" />
                  </div>

                  <div className="flex justify-between items-center border-t-[1px] border-black/10 py-1.5 px-2">
                    <div className="h-8 w-24 bg-gray-200 rounded-md" />
                    <div className="h-5 w-16 bg-gray-200 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default loading;
