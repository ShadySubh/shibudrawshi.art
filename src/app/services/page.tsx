import React from "react";
import Link from "next/link";
import { ArrowLeft, Video, Palette } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Services — shibudrawshi.art",
};

const services = [
  {
    icon: Video,
    title: "Video Editing Services",
    description: "Custom editing for YouTube productions, short-form content, and digital media. Final files are delivered securely via cloud storage links.",
  },
  {
    icon: Palette,
    title: "Graphic Design & Digital Art",
    description: "Custom illustrations, brand identities, editorial layouts, and promotional graphics. Final assets are delivered digitally in standard high-resolution formats.",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-8">
      <div className="flex flex-col gap-4 border-b border-[#ddd7cc] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#9c9590] hover:text-[#2c2a26] transition-colors w-fit uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9c9590] mb-2">Catalog</p>
          <h1 className="font-serif text-4xl font-bold text-[#2c2a26]">Products &amp; Services</h1>
          <p className="mt-2 font-sans text-sm text-[#6b6560] leading-relaxed">
            Digital creative services — all deliverables are digital products delivered via secure cloud links.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map(({ icon: Icon, title, description }) => (
          <div key={title} className="border border-[#ddd7cc] bg-[#faf7f2] p-6 flex flex-col gap-4">
            <div className="w-10 h-10 border border-[#ddd7cc] flex items-center justify-center bg-[#eee9e0]">
              <Icon className="w-5 h-5 text-[#6b6560]" />
            </div>
            <h2 className="font-serif text-lg font-semibold text-[#2c2a26]">{title}</h2>
            <p className="font-sans text-sm text-[#6b6560] leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <div className="border border-[#ddd7cc] bg-[#faf7f2] p-8 text-center">
        <p className="font-mono text-[9px] text-[#9c9590] uppercase tracking-widest mb-2">Commission</p>
        <h2 className="font-serif text-xl font-semibold text-[#2c2a26] mb-2">Ready to start?</h2>
        <p className="font-sans text-sm text-[#6b6560] mb-4">Let&apos;s create something beautiful together.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2c2a26] bg-[#2c2a26] text-[#faf7f2] font-mono text-[11px] uppercase tracking-wider hover:bg-[#3d3b36] transition-colors">
          Start a Project ✦
        </Link>
      </div>
    </div>
  );
}
