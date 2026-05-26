import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#ddd7cc] bg-[#faf7f2]/80 relative z-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-serif font-semibold text-[16px] text-[#2c2a26]">
              shibudrawshi<span className="italic text-[#9c9590]">.art</span>
            </span>
            <p className="font-mono text-[10px] text-[#9c9590] tracking-wide">
              Crafted with ♡ from Assam, India 🌿
            </p>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-5 font-mono text-[10px] text-[#9c9590] uppercase tracking-wider" aria-label="Footer navigation">
            <Link href="/video-edits"     className="hover:text-[#2c2a26] transition-colors">Video Edits</Link>
            <Link href="/graphic-designs" className="hover:text-[#2c2a26] transition-colors">Graphic</Link>
            <Link href="/digital-art"     className="hover:text-[#2c2a26] transition-colors">Digital Art</Link>
            <Link href="/blog"            className="hover:text-[#2c2a26] transition-colors">Blog</Link>
            <Link href="/contact"         className="hover:text-[#2c2a26] transition-colors">Contact</Link>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4 font-mono text-[10px] text-[#9c9590] uppercase tracking-wider">
            <a href="mailto:dassubhasish595@gmail.com" className="hover:text-[#2c2a26] transition-colors">Email</a>
            <a href="https://instagram.com/shibudrawshi.art" target="_blank" rel="noreferrer" className="hover:text-[#2c2a26] transition-colors">Instagram</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#ddd7cc]/50 flex flex-col gap-5">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 font-mono text-[9px] text-[#9c9590] uppercase tracking-wider">
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/services" className="hover:text-[#2c2a26] transition-colors">Services</Link>
              <Link href="/legal/terms" className="hover:text-[#2c2a26] transition-colors">Terms &amp; Conditions</Link>
              <Link href="/legal/privacy" className="hover:text-[#2c2a26] transition-colors">Privacy Policy</Link>
              <Link href="/legal/refund" className="hover:text-[#2c2a26] transition-colors">Refund &amp; Cancellation</Link>
            </div>
            <p className="font-mono text-[10px] text-[#c5bfb2]">© {new Date().getFullYear()} shibudrawshi.art</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
