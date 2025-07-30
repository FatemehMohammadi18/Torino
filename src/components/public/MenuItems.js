"use client";
import menuLinks from "@/constants/MenuLinks";
import Link from "next/link";

import { usePathname } from "next/navigation";

function MenuItems() {
  const pathname = usePathname();

  return (
    <ul className="mt-6 flex flex-col gap-3 text-base font-normal lg:flex-row lg:justify-start lg:mt-0 lg:gap-6">
      {menuLinks.map(({ href, label, Icon }) => {
        const isActive = pathname === href;

        return (
          <li key={href} className="lg:flex lg:justify-start">
            <Link
              href={href}
              className={`w-full flex items-center gap-2 pr-2.5 hover:text-primary transition-colors duration-200 ${
                isActive ? "text-primary" : "text-black"
              }`}
            >
              <Icon
                className={`lg:hidden ${
                  isActive ? "stroke-primary" : "stroke-black"
                }`}
              />
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuItems;
