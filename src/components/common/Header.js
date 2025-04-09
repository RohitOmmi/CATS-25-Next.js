"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPerson } from "react-icons/go";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { IoSearchSharp } from "react-icons/io5";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "News", path: "/news" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
  // {name:"bell", path:"/bellCats"},
];

const logins = [
  { name: "Employee Login", path: "https://login.gitam.edu/Login.aspx" },
  { name: "Parent Login", path: "https://gparent.gitam.edu/login" },
  { name: "Student Login", path: "https://gparent.gitam.edu/login" },
  // {name:"Training",path:"/training"},
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="max-w-screen-xl mx-auto flex items-center justify-between  py-3  ">
      {/* Logo */}
      <Link href="/">
        <Image
          src="https://guprojects.gitam.edu/catscms2/assets/img/logo.png"
          alt="CATS Logo"
          width={145} // Adjust size as needed
          height={50}
          className="object-contain cursor-pointer transition"
        />
      </Link>
      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex justify-end gap-3">
          {navItems.map(({ name, path }) => {
            const isActive = pathname === path;
            return (
              <NavigationMenuItem key={path}>
                <Link href={path} passHref legacyBehavior>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-base  font-inter ${
                      isActive
                        ? "text-[#007367] "
                        : "text-[#454b52]"
                    }`}
                  >
                    {name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <GoPerson className="h-5 w-5" />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#fff]">
              <ul className="p-2 mb-2 flex flex-col ">
                {logins.map((component) => (
                  <li
                    key={component.name}
                    className="hover:bg-gray-100 rounded-md text-[#454b52]"
                  >
                    <Link
                      href={component.path}
                      key={component.name}
                      legacyBehavior
                      passHref
                      className="py-0 hover:background"
                    >
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} py-0 font-inter`}
                        target="_blank" // ✅ Move target here
                        rel="noopener noreferrer" // ✅ Security best practice
                      >
                        {component.name}
                      </NavigationMenuLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            
              <Link href="/bellCats">
                <Image
                  src="https://guprojects.gitam.edu/catscms2/assets/img/CAT-notification.gif"
                  alt="CATS Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </Link>
          
          </NavigationMenuItem>
          
        </NavigationMenuList>
      </NavigationMenu>

      {/* https://guprojects.gitam.edu/catscms2/assets/img/CAT-notification.gif */}
    </header>
  );
}
