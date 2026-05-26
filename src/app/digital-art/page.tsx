import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Art — shibudrawshi.art",
  description: "Digital art portfolio by shibudrawshi — coming soon.",
};

export default function DigitalArt() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-7 page-enter">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#ddd7cc] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#9c9590] hover:text-[#2c2a26] transition-colors w-fit uppercase tracking-wider" id="back-to-home">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9c9590] mb-1">Portfolio · 03</p>
          <h1 className="font-serif text-4xl font-bold text-[#2c2a26]">Digital Art</h1>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center min-h-[58vh] gap-8">

        {/* Illustration box */}
        <div className="relative w-52 h-52 border border-[#ddd7cc] bg-[#faf7f2] flex items-center justify-center">
          <Image
            src="/coming-soon.png"
            alt="Drawing tablet illustration — coming soon"
            fill
            className="object-contain p-6"
            sizes="208px"
          />
        </div>

        {/* Status + text */}
        <div className="text-center max-w-xs flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 border border-[#ddd7cc] bg-[#faf7f2] px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b08888] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#9c9590]">
              Work in Progress
            </span>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#2c2a26]">
            Coming Soon
          </h2>

          <p className="font-sans text-sm text-[#6b6560] leading-relaxed">
            Illustrations, character designs, and concept art are being crafted
            with care. Check back soon.
          </p>

          {/* Three dots */}
          <div className="flex items-center gap-3 mt-1">
            {[0, 0.35, 0.7].map((delay, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#c5bfb2]"
                style={{ animation: `pulse 2s ease-in-out ${delay}s infinite` }}
              />
            ))}
          </div>
        </div>

        {/* Stats pair */}
        <div className="flex border border-[#ddd7cc] divide-x divide-[#ddd7cc] bg-[#faf7f2]">
          <div className="px-8 py-4 text-center">
            <p className="font-serif text-lg font-bold text-[#2c2a26]">Soon</p>
            <p className="font-mono text-[9px] text-[#9c9590] uppercase tracking-wider mt-0.5">ETA</p>
          </div>
          <div className="px-8 py-4 text-center">
            <p className="font-serif text-lg font-bold text-[#2c2a26]">✦✦✦</p>
            <p className="font-mono text-[9px] text-[#9c9590] uppercase tracking-wider mt-0.5">In Progress</p>
          </div>
        </div>

        <p className="font-mono text-[10px] text-[#9c9590] uppercase tracking-wider">
          Commission a piece?{" "}
          <Link href="/contact" id="digital-art-contact-link" className="underline underline-offset-2 hover:text-[#2c2a26] transition-colors">
            Get in touch →
          </Link>
        </p>
      </div>
    </div>
  );
}
