"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";

import { useState } from "react";

const imagesSlide = [
  { src: "/images/slide3.png", alt: "Slide 3" },
  { src: "/images/slide1.png", alt: "Slide 1" },
  { src: "/images/slide4.png", alt: "Slide 4" },
  { src: "/images/slide2.png", alt: "Slide 2" },
];

function SwapperSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-sm mx-auto py-10">
      <Swiper
        dir="rtl"
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        cardsEffect={{
          perSlideOffset: 10,
          perSlideRotate: 0,
          rotate: false,
          slideShadows: false,
          transformEl: (el, progress) => {
            const scale = 1 - Math.abs(progress) * 0.2;
            el.style.transform = `scale(${scale})`;
            el.style.opacity = 1 - Math.abs(progress) * 0.5;
          },
        }}
        className="mySwiper"
      >
        {imagesSlide.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-[255px] h-[284px] rounded-2xl overflow-hidden"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={255}
              height={284}
              style={{ height: "300px", width: "auto" }}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center mt-4 gap-6 text-green-800 font-bold">
        <button
          onClick={() =>
            document.querySelector(".mySwiper")?.swiper.slidePrev()
          }
        >
          →
        </button>
        <span>{`${imagesSlide.length} / ${activeIndex + 1}`}</span>
        <button
          onClick={() =>
            document.querySelector(".mySwiper")?.swiper.slideNext()
          }
        >
          ←
        </button>
      </div>
    </div>
  );
}

export default SwapperSlider;
