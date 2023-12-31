import React from "react";
import Link from "next/link";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-3 text-[#c2c2c2] hover:text-white sm:text-xl"
    >
      {children}
    </Link>
  );
};
