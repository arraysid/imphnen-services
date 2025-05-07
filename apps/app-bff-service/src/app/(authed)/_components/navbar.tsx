"use client";

import { FiSearch } from "react-icons/fi";
import { ImPacman } from "react-icons/im";
import { PiCoinsDuotone } from "react-icons/pi";

export function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4">
      <span className="text-2xl">IMPHNEN</span>
      <div className="flex flex-1 justify-center">
        <div className="relative w-[40rem] max-w-full">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search post or users..."
            className="w-full rounded-full border px-4 py-2 pl-10 focus:ring-2 focus:ring-amber-300 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-x-2">
        <CoinCurrency />
        <StreakStats />
      </div>
    </header>
  );
}

function CoinCurrency() {
  return (
    <button className="flex items-center gap-x-1 rounded-full border bg-sky-300 px-3 py-2">
      <PiCoinsDuotone className="size-6" />
      <span className="text-sm font-semibold">100 Coin</span>
    </button>
  );
}

function StreakStats() {
  return (
    <button className="flex items-center gap-x-1 rounded-full border bg-amber-300 px-3 py-2">
      <ImPacman className="size-5" />
      <span className="text-sm font-semibold">Yapping Streak</span>
    </button>
  );
}
