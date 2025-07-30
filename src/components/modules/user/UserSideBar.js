"use client";
import Link from "next/link";
import React from "react";
import ProfileIcon from "../../icons/ProfileIcon";
import MyTourIcon from "../../icons/MyTourIcon";
import Transactions from "../../icons/Transactions";
import { usePathname } from "next/navigation";

function UserSideBar() {
  const pathname = usePathname();
  return (
    <ul className="w-full max-h-fit flex justify-between border-b-[1px] border-black/20 px-2 lg:px-0 lg:flex-col lg:items-start lg:w-1/4 lg:rounded-[10px] lg:border-[1px]">
      <li
        className={`text-xs font-normal lg:px-3 lg:text-sm lg:w-full lg:rounded-t-[10px] ${
          pathname === "/user/profile" || pathname === "/user"
            ? "text-primary border-b-2 border-primary lg:border-none lg:bg-primary/25 lg:px-3"
            : ""
        }`}
      >
        <Link
          href="/user/profile"
          className={`p-2 flex justify-center items-center gap-2 lg:py-3 lg:border-b-[1px] lg:border-b-black/20 lg:justify-start ${
            pathname === "/user/profile" || pathname === "/user"
              ? "text-primary"
              : ""
          }`}
        >
          <ProfileIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          پروفایل
        </Link>
      </li>
      <li
        className={`text-xs font-normal lg:px-3 lg:text-sm lg:w-full ${
          pathname === "/user/tours"
            ? "text-primary border-b-2 border-primary lg:border-none lg:bg-primary/25 lg:px-3"
            : ""
        }`}
      >
        <Link
          href="/user/tours"
          className={`p-2 flex justify-center items-center gap-2 lg:py-3 lg:border-b-[1px] lg:border-b-black/20 lg:justify-start ${
            pathname === "/user/tours" ? "text-primary" : ""
          }`}
        >
          <MyTourIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          تورهای من
        </Link>
      </li>
      <li
        className={`text-xs font-normal lg:px-3 lg:text-sm lg:w-full lg:rounded-b-[10px] ${
          pathname === "/user/transactions"
            ? "text-primary border-b-2 border-primary lg:border-none lg:bg-primary/25"
            : ""
        }`}
      >
        <Link
          href="/user/transactions"
          className={`p-2 flex justify-center items-center gap-2 lg:py-3 lg:justify-start ${
            pathname === "/user/transactions" ? "text-primary" : ""
          }`}
        >
          <Transactions className="w-4 h-4 lg:w-5 lg:h-5" />
          تراکنش ها
        </Link>
      </li>
    </ul>
  );
}

export default UserSideBar;
