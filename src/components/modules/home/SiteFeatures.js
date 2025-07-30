"use client";
import Image from "next/image";

const features = [
  {
    icon: "/images/best-price.svg",
    alt: "بصرفه ترین قیمت",
    title: "بصرفه ترین قیمت",
    description: "بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.",
  },
  {
    icon: "/images/support.svg",
    alt: "پشتیبانی",
    title: "پشتیبانی",
    description: "پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.",
  },
  {
    icon: "/images/user-satisfaction.svg",
    alt: "رضایت کاربران",
    title: "رضایت کاربران",
    description: "رضایت بیش از 10هزار کاربر از تور های ما.",
  },
];

function SiteFeatures() {
  return (
    <ul className="flex flex-col mx-6 gap-10 py-4 border-t border-black/20 px-3 md:flex-row md:justify-between md:gap-2 md:px-0 md:mx-0 lg:gap-32">
      {features.map(({ icon, alt, title, description }, index) => (
        <li key={index} className="flex gap-3 items-center justify-start">
          <div className="w-[61px] h-[61px] xl:w-[121px] xl:h-[109px] flex justify-center items-center">
            <Image
              src={icon}
              width={104}
              height={104}
              style={{ width: "auto", height: "auto" }}
              alt={alt}
            />
          </div>
          <div>
            <strong className="font-bold text-sm md:text-base xl:text-[26px]">
              {title}
            </strong>
            <p className="text-text font-light text-xs xl:text-base">
              {description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SiteFeatures;
