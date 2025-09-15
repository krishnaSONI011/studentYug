"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/home" },
  { name: "About Us", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
 
  { name: "Trees", href: "/trees" },
];

export default function SideBar() {
  const [active, setActive] = useState("Home");

  return (
    <div className="mt-16 w-[30vw] md:w-[15vw] lg:w-[20vw] h-screen bg-white shadow-sm fixed left-0 top-0 p-4 flex flex-col justify-between">
      
      {/* Logo */}
      <div>
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" width={400} height={200} alt="logo" className="object-contain" />
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <li key={item?.name}>
              <Link
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`flex items-center justify-center md:justify-start gap-5 px-3 py-2 rounded-lg cursor-pointer my-2 transition-all duration-300
                  ${
                    active === item?.name
                      ? "bg-green-600 text-white"
                      : "text-gray-600 hover:bg-green-500 hover:text-white"
                  }`}
              >
                <span className="text-sm font-medium">{item?.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer - Settings */}
      
    </div>
  );
}
