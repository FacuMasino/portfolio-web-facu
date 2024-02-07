import React from 'react';
//import Link from "next/link";
import { Link } from 'react-scroll';

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={href}
      className="block cursor-pointer py-2 pl-3 pr-3 text-[#c2c2c2] hover:text-white sm:text-xl"
      smooth={true}
      duration={500}
      offset={-76}
    >
      {children}
    </Link>
  );
};
