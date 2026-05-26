import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50/80 relative z-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-serif font-semibold text-[16px] text-zinc-950">
              shibudrawshi<span className="italic text-zinc-500">.art</span>
            </span>
            <p className="font-mono text-[10px] text-zinc-500 tracking-wide">
              Crafted with ♡ from Assam, India 🌿
            </p>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-5 font-mono text-[10px] text-zinc-500 uppercase tracking-wider" aria-label="Footer navigation">
            <Link href="/video-edits"     className="hover:text-zinc-950 transition-colors">Video Edits</Link>
            <Link href="/graphic-designs" className="hover:text-zinc-950 transition-colors">Graphic</Link>
            <Link href="/digital-art"     className="hover:text-zinc-950 transition-colors">Digital Art</Link>
            <Link href="/blog"            className="hover:text-zinc-950 transition-colors">Blog</Link>
            <Link href="/contact"         className="hover:text-zinc-950 transition-colors">Contact</Link>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
            <a href="mailto:shibudrawshi@gmail.com" className="hover:text-zinc-950 transition-colors">Email</a>
            <a href="https://t.me/shadysish" target="_blank" rel="noreferrer" className="hover:text-zinc-950 transition-colors">Telegram</a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-200/50 flex justify-between items-center">
          <p className="font-mono text-[10px] text-zinc-400">© {new Date().getFullYear()} shibudrawshi.art</p>
          <p className="font-mono text-[10px] text-zinc-400">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
