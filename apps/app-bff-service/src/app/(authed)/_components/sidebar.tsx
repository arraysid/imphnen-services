"use client";

import { CgProfile } from "react-icons/cg";
import { FaFire } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

import { Button } from "@imphnen/ui/button";

import { NavLink } from "./navlink";

export function Sidebar() {
  return (
    <aside className="h-[calc(100vh-4rem)] w-56 border-r">
      <div className="flex flex-col px-2 pt-4">
        <Button size="sm" variant="reverse" className="bg-white">
          <FiPlus className="size-5" />
          New post
        </Button>
      </div>

      <nav className="pt-4">
        <NavLink title="Feed" href="/" icon={<FaFire className="size-5" />} />
        <NavLink
          title="Profile"
          href="/profile"
          icon={<CgProfile className="size-5" />}
        />
      </nav>
    </aside>
  );
}
