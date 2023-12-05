"use client";

import Image from "next/image";
import { MdDashboard, MdAttachMoney } from "react-icons/md";
import { FaUsers, FaClipboardList } from "react-icons/fa";
import { AiOutlineTransaction, AiOutlineTeam } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { IoMdSettings, IoIosHelpCircleOutline } from "react-icons/io";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ToggleMode";

const navigation = [
  {
    name: "Pages",
    items: [
      { name: "Dashboard", icon: <MdDashboard />, link: "/" },
      { name: "Users", icon: <FaUsers />, link: "/users" },
      { name: "Products", icon: <FaClipboardList />, link: "/products" },
      { name: "Transactions", icon: <AiOutlineTransaction />, link: "/transactions" },
    ],
  },
  {
    name: "Analytics",
    items: [
      { name: "Revenue", icon: <MdAttachMoney />, link: "/revenue" },
      { name: "Reports", icon: <GoReport />, link: "/reports" },
      { name: "Teams", icon: <AiOutlineTeam />, link: "/teams" },
    ],
  },
  {
    name: "User",
    items: [
      { name: "Settings", icon: <IoMdSettings />, link: "/settings" },
      { name: "Help", icon: <IoIosHelpCircleOutline />, link: "/help" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="p-6 bg-zinc-50 dark:bg-neutral-800 dark:text-neutral-100 flex flex-col gap-6">
      {/* User */}
      <section className="flex gap-3 items-center">
        <Avatar>
          <AvatarImage src="/assets/user-image.jpg" />
          <AvatarFallback>
            <Image src="/assets/user-image.jpg" height={50} width={50} alt="User Image" className="w-12 h-auto" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-bold text-green-600">John Doe</p>
          <small className="opacity-75 leading-none">Administrator</small>
        </div>
      </section>
      {/* Navigation */}
      <ul className="space-y-4">
        {navigation.map((navItem) => (
          <li key={navItem.name}>
            <small className="uppercase font-semibold opacity-50 mb-1 flex items-center gap-2">
              {navItem.name} <span className="h-px bg-zinc-500 flex-grow opacity-25"></span>
            </small>
            <ul className="space-y-1">
              {navItem.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className={cn(
                      "flex gap-2 items-center px-3 py-3 pe-16 rounded-md transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent",
                      pathname === item.link
                        ? "bg-zinc-100 dark:bg-zinc-900 border border-green-600 dark:border-transparent text-green-600"
                        : ""
                    )}
                  >
                    {item.icon} <span className="font-semibold">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {/* Mode Toggler */}
      <div className="mt-auto flex justify-end items-center gap-2 text-sm">
        Toggle mode
        <ModeToggle />
      </div>
    </aside>
  );
}
