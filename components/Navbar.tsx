"use client";

import { usePathname } from "next/navigation";
import { IoChatboxEllipsesOutline, IoEarth } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Search from "./Search";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center dark:text-neutral-900">
      <span className="uppercase font-semibold">{pathname.split("/")[1] || "Home"}</span>
      <div className="flex items-center gap-2">
        <Search />
        <button className="text-lg">
          <IoChatboxEllipsesOutline />
        </button>
        <button className="text-lg">
          <IoMdNotificationsOutline />
        </button>
        <button className="text-lg">
          <IoEarth />
        </button>
      </div>
    </nav>
  );
}
