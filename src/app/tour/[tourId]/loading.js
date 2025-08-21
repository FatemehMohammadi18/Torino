import React from 'react'

function loading() {
  return (
    <div className="my-6 lg:bg-white lg:border border-black/20 lg:rounded-[10px] font-vazir animate-pulse">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 p-3 py-5">
        {/* تصویر */}
        <div className="w-full lg:w-[397px] h-[220px] bg-gray-200 rounded-xl" />

        {/* متن‌ها */}
        <div className="flex flex-col justify-between flex-1">
          {/* عنوان + روز/شب */}
          <div className="flex justify-between lg:flex-col lg:items-start gap-4 mt-2">
            <div className="h-7 w-1/2 bg-gray-200 rounded-md" />
            <div className="h-4 w-1/3 bg-gray-200 rounded-md" />
          </div>

          {/* گزینه‌ها */}
          <div className="flex gap-5 flex-wrap mt-3 text-mute2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-4 w-16 bg-gray-200 rounded-md" />
            ))}
          </div>

          {/* اطلاعات (موبایل) */}
          <div className="flex justify-between mt-4 lg:hidden">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-4 w-16 bg-gray-200 rounded-md" />
                <div className="h-5 w-12 bg-gray-200 rounded-md" />
              </div>
            ))}
          </div>

          {/* دکمه + قیمت */}
          <div className="flex justify-between items-center py-1.5 lg:flex-row-reverse">
            <div className="h-9 w-28 bg-gray-200 rounded-md" />
            <div className="h-6 w-20 bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>

      {/* جزئیات (فقط دسکتاپ) */}
      <div className="hidden lg:flex flex-wrap justify-between mt-4 mb-3 px-6 py-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2">
              <div className="h-4 w-20 bg-gray-200 rounded-md" />
              <div className="h-5 w-14 bg-gray-200 rounded-md" />
            </div>
            {i !== 3 && <div className="w-px bg-gray-300 mx-2" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default loading
