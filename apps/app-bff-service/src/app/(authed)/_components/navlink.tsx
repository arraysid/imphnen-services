"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export function NavLink({ title, href, icon }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 hover:bg-gray-100 ${
        active ? "bg-gray-200 font-semibold" : ""
      }`}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </Link>
  );
}
