import React from "react";
import { NavLink } from "./NavLink";

type Menu = {
  [key: string]: string;
};

type Links = { titleKey: string; path: string };

const MobileMenu = ({
  menuTitles,
  links,
}: {
  menuTitles: Menu;
  links: Links[];
}) => {
  return (
    <ul className="flex flex-col py-4 items-center h-screen">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path}>{menuTitles[link.titleKey]}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
