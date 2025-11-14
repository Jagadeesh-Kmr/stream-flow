"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { RiMovie2Line } from "react-icons/ri";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <RiMovie2Line className="text-red-500 text-3xl" />
            <span className="text-xl font-bold tracking-wide text-white">
              StreamFlow
            </span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Movies
          </Link>
          <Link href="/genres" className="hover:text-white transition">
            Genres
          </Link>
          <Link href="/watchlist" className="hover:text-white transition">
            Watchlist
          </Link>
        </nav>

        {/* SEARCH ICON */}
        <div className="cursor-pointer">
          <FiSearch className="text-2xl text-gray-300 hover:text-white transition" />
        </div>
      </div>
    </header>
  );
}
