import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Designs — shibudrawshi.art",
  description: "Graphic design portfolio — posters, social media, tournament banners, and brand visuals by shibudrawshi.",
};

const designProjects = [
  { id: "g01", title: "Social Media Campaign", category: "Social Media", src: "/socialmedia.jpg",  tags: ["Social", "Instagram"] },
  { id: "g02", title: "Event Slide Design",    category: "Presentation", src: "/slides1.webp",    tags: ["Slides", "Event"] },
  { id: "g03", title: "Creative Layout 02",    category: "Editorial",    src: "/slides2.jpg",     tags: ["Editorial", "Design"] },
  { id: "g04", title: "Creative Layout 03",    category: "Brand",        src: "/slides3.jpg",     tags: ["Branding", "Clean"] },
  { id: "g05", title: "Visual Design 04",      category: "Poster",       src: "/slides4.jpg",     tags: ["Poster", "Type"] },
  { id: "g06", title: "Visual Design 05",      category: "Illustration", src: "/slides5.jpg",     tags: ["Illustration"] },
  { id: "g07", title: "Creative Asset 06",     category: "Social Media", src: "/slides6.webp",    tags: ["Social", "Motion"] },
  { id: "g08", title: "Creative Asset 07",     category: "Brand",        src: "/slides7.webp",    tags: ["Brand", "Identity"] },
  { id: "g09", title: "Creative Asset 08",     category: "Editorial",    src: "/slides8.webp",    tags: ["Editorial"] },
];

export default function GraphicDesigns() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-7 page-enter">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#ddd7cc] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#9c9590] hover:text-[#2c2a26] transition-colors w-fit uppercase tracking-wider" id="back-to-home">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9c9590] mb-1">Portfolio · 02</p>
            <h1 className="font-serif text-4xl font-bold text-[#2c2a26]">Graphic Designs</h1>
            <p className="mt-1 font-mono text-[10px] text-[#9c9590]">{designProjects.length} projects</p>
          </div>
          <p className="font-sans text-sm text-[#6b6560] max-w-xs leading-relaxed">
            Posters, social campaigns, brand identities, editorial layouts, and visual storytelling.
          </p>
        </div>
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap gap-1.5">
        {["All", "Social Media", "Brand", "Poster", "Editorial", "Illustration"].map((tag) => (
          <button
            key={tag}
            className={`px-2.5 py-1 font-mono text-[10px] border transition-colors duration-150 uppercase tracking-wide ${
              tag === "All"
                ? "border-[#2c2a26] bg-[#2c2a26] text-[#faf7f2]"
                : "border-[#ddd7cc] text-[#9c9590] hover:border-[#2c2a26] hover:text-[#2c2a26]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Masonry columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {designProjects.map((project, i) => (
          <div
            key={project.id}
            id={`design-${project.id}`}
            className="group relative border border-[#ddd7cc] bg-[#faf7f2] overflow-hidden card-hover mb-4 break-inside-avoid"
          >
            <div className="relative w-full overflow-hidden bg-[#eee9e0]" style={{ aspectRatio: "4/5" }}>
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2a26]/60 via-[#2c2a26]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-[12px] font-semibold text-[#faf7f2]">{project.title}</p>
                    <p className="font-mono text-[9px] text-[#faf7f2]/60 uppercase">{project.category}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#faf7f2]/60" />
                </div>
              </div>
              <div className="absolute top-2 left-2 font-mono text-[9px] px-1.5 py-0.5 bg-[#2c2a26]/30 backdrop-blur-sm text-[#faf7f2]/80">
                {(i + 1).toString().padStart(2, "0")}
              </div>
            </div>
            <div className="p-2.5 border-t border-[#ddd7cc] flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[9px] border border-[#ddd7cc] px-1.5 py-0.5 text-[#9c9590]">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border border-[#ddd7cc] bg-[#faf7f2] p-8 text-center">
        <p className="font-mono text-[9px] text-[#9c9590] uppercase tracking-widest mb-2">Commission</p>
        <h2 className="font-serif text-xl font-semibold text-[#2c2a26] mb-2">Need a design?</h2>
        <p className="font-sans text-sm text-[#6b6560] mb-4">Let&apos;s create something beautiful together.</p>
        <Link href="/contact" id="design-cta-contact" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#ddd7cc] text-[#2c2a26] font-sans text-sm hover:border-[#c5bfb2] hover:bg-[#eee9e0] transition-colors">
          Start a Project <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
