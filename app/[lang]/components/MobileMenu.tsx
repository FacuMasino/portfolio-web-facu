import React from 'react';
import { NavLink } from './NavLink';

type Menu = {
  [key: string]: string;
};

type Links = { titleKey: string; path: string };

const MobileMenu = ({
  menuTitles,
  links,
  onClickFn,
}: {
  menuTitles: Menu;
  links: Links[];
  onClickFn: () => void;
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
    </ul>
  );
};

export default MobileMenu;
