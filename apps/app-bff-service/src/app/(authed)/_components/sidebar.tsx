"use client";

import { CgProfile } from "react-icons/cg";
import { FaFire } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";

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
        <span className="px-3 text-xs">Menu Utama</span>
        <NavLink
          title="Beranda"
          href="/"
          icon={<MdOutlineExplore className="size-6" />}
        />
        <NavLink
          title="Project"
          href="/projects"
          icon={<FaFire className="size-5" />}
        />
        <NavLink
          title="Profil"
          href="/profile"
          icon={<CgProfile className="size-5" />}
        />
      </nav>
    </aside>
  );
}
