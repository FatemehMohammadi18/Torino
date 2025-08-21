import React from 'react'

function loading() {
  return (
        <div className="flex flex-col xl:flex-row gap-6 animate-pulse">
      <div className="flex flex-col bg-white border border-black/20 gap-3 p-4 rounded-[10px] xl:w-3/4">
        <div className="h-7 w-48 bg-gray-200 rounded-md" />

        <div className="flex flex-wrap gap-6 xl:gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-full xl:w-[32%] flex flex-col gap-2">
              <div className="h-10 bg-gray-200 rounded-md" />
              <div className="h-3 w-1/2 bg-gray-200 rounded-md" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-black/10 rounded-[10px] p-4 xl:w-1/4 flex flex-col gap-4">
        <div className="flex justify-between items-center border-b border-dotted border-black/10 pb-3">
          <div className="h-6 w-28 bg-gray-200 rounded-md" />
          <div className="h-4 w-20 bg-gray-200 rounded-md" />
        </div>

        <div className="flex justify-between items-center">
          <div className="h-5 w-20 bg-gray-200 rounded-md" />
          <div className="h-8 w-24 bg-gray-200 rounded-md" />
        </div>

        <div className="h-10 w-full bg-gray-200 rounded-md" />
      </div>
    </div>
  )
}

export default loading
