import React from 'react';
import NextLink from 'next/link';
import { NavLink } from './NavLink';
import { Locale } from '@/i18n.config';

type Menu = {
  [key: string]: string;
};

type Links = { titleKey: string; path: string };

const MobileMenu = ({
  menuTitles,
  links,
  onClickFn,
  currentLang,
  switchLanguagePath,
}: {
  menuTitles: Menu;
  links: Links[];
  onClickFn: () => void;
  currentLang: Locale;
  switchLanguagePath: string;
}) => {
  return (
    <ul className="flex h-screen flex-col items-center py-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink onClickFn={onClickFn} href={link.path}>
            {menuTitles[link.titleKey]}
          </NavLink>
        </li>
      ))}
      <li className="mt-8 border-t border-[#33353F] pt-6">
        <NextLink
          href={switchLanguagePath}
          onClick={onClickFn}
          className="flex items-center gap-3 rounded-full border border-[#33353F] bg-[#18191E] px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:border-blue-500 hover:bg-[#2a2b30]"
        >
          <span className="text-2xl">
            {currentLang === 'es' ? '🇺🇸' : '🇦🇷'}
          </span>
          <span>
            {currentLang === 'es' ? 'EN' : 'ES'}
          </span>
        </NextLink>
      </li>
    </ul>
  );
};

export default MobileMenu;
