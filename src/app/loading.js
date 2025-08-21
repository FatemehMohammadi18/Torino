import React from "react";

function loading() {
  return (
    <div>
      <main>
        <div className="min-w-full min-h-[119px] lg:min-h-[350px]">
          <div className="h-full w-full bg-gray-200 animate-pulse rounded-md" />
        </div>

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
      </main>
    </div>
  );
}

export default loading;
