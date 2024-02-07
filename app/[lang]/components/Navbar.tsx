'use client';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MobileMenu from './MobileMenu';
import { getDictionary } from '@/lib/dictionary';

type MenuTitlesKey = keyof Awaited<ReturnType<typeof getDictionary>>['menu'];
type NavLink = {
  path: string;
  titleKey: MenuTitlesKey;
};
const navLinks: NavLink[] = [
  {
    titleKey: 'home', // nombre de la clave en diccionario
    path: 'home',
  },
  {
    titleKey: 'about',
    path: 'about',
  },
  {
    titleKey: 'projects',
    path: 'projects',
  },
  {
    titleKey: 'contact',
    path: 'contact',
  },
];

export const Navbar = ({
  menuTitles,
}: {
  menuTitles: Awaited<ReturnType<typeof getDictionary>>['menu'];
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#121212]">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link
          to={'home'}
          smooth={true}
          duration={500}
          offset={-76}
          className="cursor-pointer text-2xl font-semibold text-white md:text-3xl"
        >
          {'<FM/>'}
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
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-4 md:p-0">
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
