"use client";
import SwapperSlider from "./SwapperSlider";

function WhyTorino() {
  return (
    <div className="flex py-12">
      <div className="hidden w-1/2 font-vazir lg:flex lg:flex-col lg:gap-8">
        <h3 className=" font-extrabold text-[40px] flex gap-2">
          <span className="w-[60px] h-[60px] bg-gradient-to-b from-[#28a745] to-[#10411b] text-white flex justify-center items-center pt-2 rounded-full">
            ؟
          </span>
          چرا <span className="text-primary">تورینو</span> ؟
        </h3>
        <h4 className="font-medium text-2xl">تور طبیعت گردی و تاریخی</h4>
        <p className="font-normal text-xl leading-10 text-justify">
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <SwapperSlider />
    </div>
  );
}

export default WhyTorino;
