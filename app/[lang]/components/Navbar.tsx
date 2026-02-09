'use client';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MobileMenu from './MobileMenu';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

type MenuTitlesKey = keyof Awaited<ReturnType<typeof getDictionary>>['menu'];
type NavLinkItem = {
  path: string;
  titleKey: MenuTitlesKey;
};

const navLinks: NavLinkItem[] = [
  {
    titleKey: 'home',
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
  currentLang,
}: {
  menuTitles: Awaited<ReturnType<typeof getDictionary>>['menu'];
  currentLang: Locale;
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathname = usePathname();

  const handleNavbarClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const getSwitchLanguagePath = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    return pathname.replace(`/${currentLang}`, `/${newLang}`);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#121212]">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link
          to={'home'}
          href='#home'
          smooth={true}
          duration={500}
          offset={-76}
          className="cursor-pointer text-2xl font-semibold text-white md:text-3xl"
        >
          {'<FM/>'}
        </Link>
        
        <div className="mobile-menu block md:hidden">
          {!isNavbarOpen ? (
            <button aria-label='menu' onClick={handleNavbarClick}>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          ) : (
            <button onClick={handleNavbarClick}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
        
        <div className="menu hidden items-center md:flex md:w-auto" id="navbar">
          <ul className="mt-0 flex items-center p-4 md:flex-row md:space-x-2 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path}>{menuTitles[link.titleKey]}</NavLink>
              </li>
            ))}
            <li className="ml-4 border-l border-[#33353F] pl-4">
              <NextLink
                href={getSwitchLanguagePath()}
                className="flex items-center gap-2 rounded-full border border-[#33353F] bg-[#18191E] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-blue-500 hover:bg-[#2a2b30] hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="text-lg">
                  {currentLang === 'es' ? '🇺🇸' : '🇦🇷'}
                </span>
                <span className="hidden lg:inline">
                  {currentLang === 'es' ? 'EN' : 'ES'}
                </span>
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
      {isNavbarOpen ? (
        <MobileMenu
          menuTitles={menuTitles}
          links={navLinks}
          onClickFn={handleNavbarClick}
          currentLang={currentLang}
          switchLanguagePath={getSwitchLanguagePath()}
        />
      ) : null}
    </nav>
  );
};
