"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MobileMenu from "./MobileMenu";

type Menu = {
  [key: string]: string;
};

const navLinks = [
  {
    titleKey: "home", // nombre de la clave en diccionario
    path: "#home",
  },
  {
    titleKey: "about",
    path: "#about",
  },
  {
    titleKey: "projects",
    path: "#projects",
  },
  {
    titleKey: "contact",
    path: "#contact",
  },
];

export const Navbar = ({ menuTitles }: { menuTitles: Menu }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212]">
      <div className="flex flex-wrap justify-between items-center mx-auto p-4">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl font-semibold text-white"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isNavbarOpen ? (
            <button onClick={handleNavbarClick}>
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={handleNavbarClick}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row md:space-x-4 mt-0 md:p-0 p-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path}>{menuTitles[link.titleKey]}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen ? (
        <MobileMenu menuTitles={menuTitles} links={navLinks} />
      ) : null}
    </nav>
  );
};
