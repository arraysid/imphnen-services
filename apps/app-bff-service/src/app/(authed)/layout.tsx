import { ReactNode } from "react";

import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <main className="grid grid-cols-5 gap-4">{children}</main>
        </div>
      </div>
    </>
  );
}
