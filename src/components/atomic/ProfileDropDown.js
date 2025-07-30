import { useState, useRef, useEffect } from "react";
import ProfileIcon from "../icons/ProfileIcon";
import ArrowDownIcon from "../icons/ArrowDown";
import Image from "next/image";
import logoutUser from "@/utils/logoutUser";

function ProfileDropDown({ user, setUser }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer text-sm lg:text-lg font-semibold text-primary py-1.5 lg:px-3 gap-1"
      >
        <ProfileIcon className="w-3.5 h-3.5 lg:w-6 lg:h-6" />
        <span className="flex justify-center items-center">
          {user.firstName && user.lastName
            ? user.firstName + user.lastName
            : user.mobile}
        </span>
        <ArrowDownIcon className="w-3.5 h-3.5 lg:w-6 lg:h-6" />
      </button>

      {open && (
        <div className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-[11px] bg-white shadow-lg ring-1 ring-black/5 lg:w-60">
          <ul className="flex flex-col justify-center items-center text-xs font-normal">
            <li className="w-full flex gap-2 items-center justify-start text-start text-secondary text-sm font-medium font-vazir p-3 bg-mute1/10 rounded-t-[11px]">
              <span className="w-7 h-7 bg-mute1/30 rounded-full flex justify-center items-center p-1">
                <ProfileIcon />
              </span>
              {user.mobile}
            </li>
            <li className="w-full text-center border-b-[1px] border-black/10">
              <a
                href="/user/profile"
                className="flex gap-2 items-center justify-start text-start px-4 py-3 text-sm text-text"
              >
                <Image
                  src="/images/profile1.svg"
                  width={20}
                  height={20}
                  alt="profile"
                />
                اطلاعات حساب کاربری
              </a>
            </li>
            <button
              onClick={() => {
                logoutUser();
                setOpen(false);
                setUser(null);
              }}
              className="w-full flex gap-2 items-center justify-start text-start px-4 py-3 text-sm text-red-600"
            >
              <Image
                src="/images/logOut.svg"
                width={20}
                height={20}
                alt="logout"
              />
              خروج از حساب کاربری
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;
