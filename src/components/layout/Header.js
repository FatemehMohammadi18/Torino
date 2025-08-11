"use client";
import { useContext, useEffect, useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import Image from "next/image";
import MenuItems from "../public/MenuItems";
import BtnLogin from "../atomic/BtnLogin";
import { UserContext } from "@/context/UserContext";
import UserBtn from "../atomic/UserBtn";
import getProfile from "@/services/userProfile";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser, loading, setLoading } = useContext(UserContext);
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await getProfile();
        setUser(res);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);
  return (
    <header className="lg:shadow-[0_1px_4px_0_rgba(0,0,0,0.16)]">
      <div className="max-w-[1200px] bg-white px-6 lg:mx-auto lg:flex lg:items-center lg:justify-between lg:py-3  lg:px-[12px]">
        <div className="flex justify-between items-center py-3 lg:hidden">
          <MenuIcon
            className="w-5 h-4"
            onClick={() => setShowMenu((prev) => !prev)}
          />
          {user ? <UserBtn user={user} /> : <BtnLogin />}
        </div>
        <Image
          src="/images/Torino.jpg"
          width={146}
          height={44}
          href="/"
          alt="تورینو برگزار کننده بهترین تور های داخلی و خارجی"
          className="hidden lg:block lg:ml-14"
        />
        {showMenu && (
          <div
            className={`fixed inset-0 z-50 transition-all duration-300 ${
              showMenu ? "bg-black/30 visible" : "bg-transparent invisible"
            }`}
            onClick={() => setShowMenu(false)}
          >
            <nav
              onClick={(e) => e.stopPropagation()}
              className={`absolute top-0 right-0 bg-white w-1/2 min-h-full rounded-bl-xl rounded-tl-xl transition-transform duration-300 ${
                showMenu ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <MenuItems />
            </nav>
          </div>
        )}

        <nav className="hidden lg:flex lg:ml-auto">
          <MenuItems />
        </nav>

        {user ? (
          <div className="hidden lg:block">
            <UserBtn user={user} setUser={setUser} />
          </div>
        ) : (
          <div className="hidden lg:flex">
            <BtnLogin />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
