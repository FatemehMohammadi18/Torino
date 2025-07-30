"use client";
import Wrapper from "@/components/public/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center min-h-screen lg:flex-row-reverse lg:justify-between">
        <Image
          src="/images/ErrorTV.png"
          width={322}
          height={322}
          alt="صفحه ی مورد نظر یافت نشد!"
          style={{ width: "auto", height: "auto" }}
          className="lg:min-w-[555px] lg:min-h-[555px]"
        />
        <div className="flex flex-col justify-between items-center gap-4 lg:items-start lg:gap-20 lg:pr-10">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            صفحه ی مورد نظر یافت نشد!
          </h1>
          <Link
            href="/"
            className="bg-primary/30 text-primary px-4 py-2 rounded-2xl font-semibold lg:text-2xl lg:px-8 lg:py-4 lg:mr-6"
          >
            بازگشت به صفحه ی اصلی
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default NotFoundPage;
