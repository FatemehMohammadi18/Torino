"use client";
import Wrapper from "@/components/public/Wrapper";
import Image from "next/image";
import React from "react";

function Error({ error, reset }) {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center min-h-screen حغ-3 lg:flex-row-reverse lg:justify-between">
        <Image
          src="/images/ErrorLampRobot.png"
          width={322}
          height={322}
          alt="اتصال با سرور برقرار نیست!"
          style={{ width: "auto", height: "auto" }}
          className="lg:min-w-[555px] lg:min-h-[555px]"
        />
        <div className="flex flex-col justify-between items-center gap-4 lg:items-start lg:pr-10">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            اتصال با سرور برقرار نیست!
          </h1>
          <p className="lg:mr-20">لطفا بعدا دوباره امتحان کنید.</p>
          <button
            onClick={() => reset()}
            className="bg-primary/30 text-primary px-4 py-2 rounded-2xl font-semibold lg:text-xl lg:px-4 lg:py-4 lg:mr-20"
          >
            دوباره امتحان کنید
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Error;
