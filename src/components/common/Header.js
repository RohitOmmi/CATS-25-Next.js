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

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "News", path: "/news" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const logins = [
  { name: "Employee Login", path: "https://login.gitam.edu/Login.aspx" },
  { name: "Parent Login", path: "https://gparent.gitam.edu/login" },
  { name: "Student Login", path: "https://gparent.gitam.edu/login" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between  py-3  ">
      {/* Logo */}
      <Link href="/">
        <Image
          src="https://guprojects.gitam.edu/catscms2/assets/img/logo.png"
          alt="CATS Logo"
          width={150} // Adjust size as needed
          height={50}
          className="object-contain"
        />
      </Link>
      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          {navItems.map(({ name, path }) => (
            <NavigationMenuItem key={path}>
              <Link href={path} passHref legacyBehavior>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-base text-[#212529]`}
                >
                  {name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <GoPerson className="h-5 w-5" />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#fff]">
              <ul className="p-2 flex flex-col ">
                {logins.map((component) => (
                  <li key={component.name} className="hover:bg-gray-100 rounded-md">
                  <Link
                    href={component.path}
                    key={component.name}
                    legacyBehavior
                    passHref
                    className="py-0 hover:background"
                  >
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} py-0`}
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
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
