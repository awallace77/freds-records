"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#f3efe6] text-[#171512] z-20 top-0 inset-s-0 border-b border-[#171512]/15">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.2em]">
          <Image
            src="/logos/fredslogo_v2.svg"
            alt="Fred's Records"
            width={100}
            height={40}
            className="invert"
            priority
          />
          <span>Records</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center transition duration-300 cursor-pointer p-2 w-10 h-10 justify-center text-sm text-[#171517] hover:text-[#f3efe6] rounded-[50%] md:hidden hover:bg-[#171512] focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="text-sm uppercase flex flex-col p-4 md:p-0 mt-4 border rounded-lg text-[#171517] md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 transition hover:text-[#b24a2f]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="block py-2 px-3 transition hover:text-[#b24a2f]"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="block py-2 px-3 transition hover:text-[#b24a2f]"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/new-releases"
                className="block py-2 px-3 transition hover:text-[#b24a2f]"
                onClick={() => setIsOpen(false)}
              >
                New Releases
              </Link>
            </li>
            <li>
              <Link
                href="/top-21"
                className="block py-2 px-3 transition hover:text-[#b24a2f]"
                onClick={() => setIsOpen(false)}
              >
                Top 21
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
