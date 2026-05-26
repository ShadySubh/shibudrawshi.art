import React from "react";
import Link from "next/link";
import { ArrowLeft, Video, Palette } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Services — shibudrawshi.art",
  description: "Digital Services Catalog for video editing and graphic design.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-zinc-500 hover:text-zinc-900 transition-colors w-fit uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-500 mb-2">Catalog</p>
          <h1 className="font-serif text-4xl font-bold text-zinc-950">Products & Services</h1>
          <p className="mt-3 font-sans text-sm text-zinc-600 max-w-lg leading-relaxed">
            Digital Services Catalog outlining the custom creative services available for commission.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service 1 */}
        <div className="border border-zinc-200 bg-zinc-50 p-6 flex flex-col gap-4">
          <div className="w-10 h-10 bg-zinc-100 border border-zinc-200 flex items-center justify-center">
            <Video className="w-4 h-4 text-zinc-700" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-zinc-900 mb-2">Video Editing Services</h2>
            <p className="font-sans text-sm text-zinc-600 leading-relaxed">
              Custom editing for YouTube productions, short-form content, and digital media. Final files are delivered securely via cloud storage links in high-quality formats suitable for broadcasting or web streaming.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="border border-zinc-200 bg-zinc-50 p-6 flex flex-col gap-4">
          <div className="w-10 h-10 bg-zinc-100 border border-zinc-200 flex items-center justify-center">
            <Palette className="w-4 h-4 text-zinc-700" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-zinc-900 mb-2">Graphic Design & Digital Art</h2>
            <p className="font-sans text-sm text-zinc-600 leading-relaxed">
              Custom illustrations, brand identities, editorial layouts, and promotional graphics. Final assets are delivered digitally in standard high-resolution formats (PNG, JPG, PDF) ensuring absolute clarity for print or web usage.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-zinc-200 bg-zinc-50 p-6 text-center mt-4">
        <p className="font-sans text-sm text-zinc-600 mb-4">Ready to start a project?</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-zinc-50 font-mono text-[11px] uppercase tracking-wider hover:bg-zinc-800 transition-colors">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
