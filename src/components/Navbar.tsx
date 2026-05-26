"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Petal({ className = "" }: { className?: string }) {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className={`petal inline-block ${className}`} aria-hidden="true">
      <ellipse cx="5" cy="5" rx="2.8" ry="4.2" fill="none" stroke="#b08888" strokeWidth="0.9" transform="rotate(-20 5 5)" opacity="0.7" />
      <ellipse cx="5" cy="5" rx="2.8" ry="4.2" fill="none" stroke="#b08888" strokeWidth="0.9" transform="rotate(40 5 5)" opacity="0.7" />
      <ellipse cx="5" cy="5" rx="2.8" ry="4.2" fill="none" stroke="#b08888" strokeWidth="0.9" transform="rotate(100 5 5)" opacity="0.7" />
    </svg>
  );
}

const navLinks = [
  { href: "/",                label: "Home" },
  { href: "/video-edits",     label: "Video Edits" },
  { href: "/graphic-designs", label: "Graphic Designs" },
  { href: "/digital-art",     label: "Digital Art" },
  { href: "/blog",            label: "Blog" },
  { href: "/contact",         label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#ddd7cc] shadow-sm"
          : "bg-[#faf7f2]/80 backdrop-blur-sm border-b border-[#ddd7cc]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 group" aria-label="shibudrawshi.art home">
          <Petal className="opacity-50 group-hover:opacity-80 transition-opacity" />
          <span className="font-serif font-semibold text-[17px] text-[#2c2a26] tracking-tight">
            shibudrawshi<span className="italic text-[#9c9590]">.art</span>
          </span>
          <Petal className="opacity-30 group-hover:opacity-60 transition-opacity" />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href} href={href}
                id={`nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`nav-link relative px-3 py-1.5 font-sans text-[13px] rounded-sm transition-colors duration-150 ${
                  isActive
                    ? "text-[#2c2a26] bg-[#eee9e0]/50"
                    : "text-[#6b6560] hover:text-[#2c2a26] hover:bg-[#eee9e0]/30"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact" id="nav-start-project"
            className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 font-sans text-[13px] font-medium text-[#2c2a26] border border-[#ddd7cc] hover:border-[#c5bfb2] hover:bg-[#eee9e0] transition-all duration-200 group"
          >
            <Petal className="opacity-60 group-hover:opacity-90 transition-opacity" />
            Start Project
          </Link>
        </nav>

        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 text-[#6b6560] hover:text-[#2c2a26] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#ddd7cc] bg-[#faf7f2]/98 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-0.5" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} href={href}
                  className={`px-3 py-2.5 font-sans text-sm transition-colors ${
                    isActive ? "bg-[#eee9e0]/50 text-[#2c2a26]" : "text-[#6b6560] hover:bg-[#eee9e0]/30 hover:text-[#2c2a26]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link href="/contact" className="mt-2 px-3 py-2.5 font-sans text-sm border border-[#ddd7cc] text-[#2c2a26] hover:border-[#c5bfb2] hover:bg-[#eee9e0] transition-colors text-center">
              ✦ Start Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
