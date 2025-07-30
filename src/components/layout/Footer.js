"use client";
import { footerLogos, services, torino } from "@/constants/footerItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="px-6">
        <div className="max-w-[1200px] mx-auto border-t-[1px] border-dashed border-black/20 py-3 lg:flex lg:justify-between lg:px-[12px] lg:py-4">
          <div className="flex gap-6 px-3 font-normal text-base lg:w-1/2 lg:gap-20">
            <ul className="w-1/2 lg:w-auto flex flex-col gap-y-2">
              <li className="font-semibold text-[22px] mb-3">تورینو</li>
              {torino.map((item) => (
                <li key={item.label} className="hover:text-primary">
                  <Link href={item.href} target="_blank">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="w-1/2 lg:w-auto flex flex-col gap-y-2">
              <li className="font-semibold text-[22px] lg:text-[24px] mb-3">
                خدمات پشتیبان
              </li>
              {services.map((item) => (
                <li
                  key={item.label}
                  className="hover:text-primary transition-colors duration-200"
                >
                  <Link href={item.href} target="_blank">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between gap-1 mt-6 lg:mt-0 lg:flex-col-reverse lg:w-1/2">
            <ul className="footer-img w-1/2 lg:w-full flex flex-wrap flex-row-reverse justify-center lg:justify-start gap-5">
              {footerLogos.map((logo, index) => (
                <li
                  key={index}
                  className="w-[40px] h-[40px] lg:w-[68px] lg:h-[74px]"
                >
                  <Link
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logo.src}
                      width={68}
                      height={74}
                      alt={logo.alt}
                      title={logo.alt}
                      style={{ height: "auto", width: "auto" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-1/2 lg:w-full flex flex-col items-end justify-center gap-4">
              <div className="w-[100px] h-[30px] lg:w-[146px] lg:h-[44px] object-cover">
                <Image
                  src="/images/Torino.jpg"
                  width={146}
                  height={44}
                  alt="تورینو برگزار کننده بهترین تور های داخلی و خارجی "
                />
              </div>
              <span
                className="text-sm lg:text-[15px] font-[600] flex gap-1"
                aria-label="تلفن پشتیبانی ۰۲۱-۸۵۷۴"
              >
                تلفن پشتیبانی:
                <span className="font-vazir font-normal">021-8574</span>
              </span>
            </div>
          </div>
        </div>

        <p className="text-[12px] lg:text-[15px] font-light lg:font-semibold text-center mt-3 py-2 border-t-[1px] border-solid border-black/20">
          کلیه حقوق این وب سایت متعلق به تورینو می باشد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
