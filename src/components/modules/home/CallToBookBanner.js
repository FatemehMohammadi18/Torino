"use client";
import Image from "next/image";
import Link from "next/link";

function CallToBookBanner() {
  return (
    <div className="flex flex-col border-[1px] border-black/20 rounded-[10px] mx-2 mb-8 lg:flex-row ">
      <div className="bg-primary flex relative p-4 h-[128px] rounded-t-[10px] lg:w-3/4 lg:min-h-[251px] lg:items-center lg:py-0 lg:justify-center lg:gap-4 lg:rounded-[10px]">
        <div className="lg:w-1/2 lg:mb-8">
          <h3 className="font-extrabold text-[22px] text-white md:text-4xl xl:text-5xl">
            خرید تلفنی از
            <span className="text-secondary">تورینو</span>
          </h3>
          <p className=" text-sm font-normal text-white mt-3 lg:text-[32px]">
            به هرکجا که میخواهید!
          </p>
        </div>
        <Image
          className="absolute left-0 bottom-0 w-[195px] h-[158px] lg:w-[308px] lg:h-[225px] lg:relative lg:mt-auto lg:mr-10"
          src="/images/callToActionBanner.png"
          width={308}
          height={225}
          alt="تماس با تورینو "
        />
      </div>
      <div className="flex justify-center items-center font-vazir p-4 lg:w-1/4 lg:flex-col lg:gap-6">
        <p className="w-1/2 flex justify-center items-center gap-2">
          021-1840
          <Image
            src="/images/call.svg"
            width={24}
            height={24}
            alt="شماره تلفن تورینو"
          />
        </p>
        <Link
          href="/"
          className="bg-secondary text-white text-sm font-medium px-7 h-[38px] flex items-center rounded-[9px] lg:w-[176px] lg:flex lg:justify-center lg:items-center lg:h-[42px] lg:rounded-[9px]"
        >
          اطلاعات بیشتر
        </Link>
      </div>
    </div>
  );
}

export default CallToBookBanner;
