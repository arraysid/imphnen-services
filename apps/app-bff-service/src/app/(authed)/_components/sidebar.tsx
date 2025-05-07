"use client";

import { CgProfile } from "react-icons/cg";
import { FiCodesandbox, FiPlus } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";

import { Button } from "@imphnen/ui/button";

import { NavLink } from "./navlink";

export function Sidebar() {
  return (
    <aside className="flex h-[calc(100vh-4rem)] w-56 flex-col justify-between border-r">
      <div>
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
            icon={<FiCodesandbox className="size-5" />}
          />
          <NavLink
            title="Profil"
            href="/profile"
            icon={<CgProfile className="size-5" />}
          />
        </nav>
      </div>

      <div className="text-muted-foreground border-t px-3 py-2 text-xs">
        Version 0.0.1 (Alpha)
      </div>
    </aside>
  );
}
