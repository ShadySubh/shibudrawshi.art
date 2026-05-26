import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Edits — shibudrawshi.art",
  description: "Video editing portfolio — cinematic thumbnails, YouTube edits, and motion graphics by shibudrawshi.",
};

const videoProjects = [
  { id: "v01", title: "Gaming Highlight Reel", type: "YouTube Edit",   thumbnail: "/thumbnail01.png",    tags: ["Gaming", "Motion"] },
  { id: "v02", title: "Tournament Promo",       type: "Promo Video",   thumbnail: "/thumbnail02(1).png", tags: ["Esports", "Thumb"] },
  { id: "v03", title: "Cinematic Montage",      type: "Montage",       thumbnail: "/thumbnail02.png",    tags: ["Cinematic", "Color"] },
  { id: "v04", title: "Event Highlights",       type: "Event Edit",    thumbnail: "/thumbnail05.png",    tags: ["Event", "Cut"] },
  { id: "v05", title: "Brand Commercial",       type: "Commercial",    thumbnail: "/thumbnail06.png",    tags: ["Brand", "Ad"] },
  { id: "v06", title: "Vlog Montage",           type: "Vlog",          thumbnail: "/thumbnail07.png",    tags: ["Vlog", "Travel"] },
];

export default function VideoEdits() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-7">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#d8ceba] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#a08060] hover:text-[#2c2416] transition-colors w-fit uppercase tracking-wider" id="back-to-home">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#a08060] mb-1">Portfolio · 01</p>
            <h1 className="font-serif text-4xl font-bold text-[#2c2416]">Video Edits</h1>
            <p className="mt-1 font-mono text-[10px] text-[#a08060]">{videoProjects.length} projects</p>
          </div>
          <p className="font-sans text-sm text-[#6b5e4a] max-w-xs leading-relaxed">
            Cinematic thumbnails, YouTube productions, event highlights, and motion-driven stories.
          </p>
        </div>
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap gap-1.5">
        {["All", "YouTube Edit", "Promo Video", "Montage", "Commercial", "Event Edit"].map((tag) => (
          <button
            key={tag}
            className={`px-2.5 py-1 font-mono text-[10px] border transition-colors duration-150 uppercase tracking-wide ${
              tag === "All"
                ? "border-[#2c2416] bg-[#2c2416] text-[#f5f0e8]"
                : "border-[#d8ceba] text-[#a08060] hover:border-[#2c2416] hover:text-[#2c2416]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid — 9:16 thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {videoProjects.map((project, i) => (
          <div
            key={project.id}
            id={`video-${project.id}`}
            className="group relative border border-[#d8ceba] bg-[#faf6ee]/80 overflow-hidden card-hover"
          >
            <div className="relative aspect-[9/16] bg-[#ede6d6] overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2416]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 border border-[#f5f0e8]/40 flex items-center justify-center bg-[#f5f0e8]/10 backdrop-blur-sm">
                    <Play className="w-3 h-3 text-[#f5f0e8] fill-[#f5f0e8]" />
                  </div>
                  <span className="font-mono text-[9px] text-[#f5f0e8]/70 uppercase tracking-wider">View</span>
                </div>
              </div>
              {/* Index */}
              <div className="absolute top-2 left-2 font-mono text-[9px] px-1.5 py-0.5 bg-[#2c2416]/30 backdrop-blur-sm text-[#f5f0e8]/80">
                {(i + 1).toString().padStart(2, "0")}
              </div>
            </div>
            {/* Meta */}
            <div className="p-3 border-t border-[#d8ceba]">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-serif text-[13px] font-semibold text-[#2c2416] truncate">{project.title}</p>
                  <p className="font-mono text-[9px] text-[#a08060] mt-0.5 uppercase tracking-wide">{project.type}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#c8b89a] group-hover:text-[#2c2416] transition-colors shrink-0 mt-0.5" />
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[9px] border border-[#d8ceba] px-1.5 py-0.5 text-[#a08060]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border border-[#d8ceba] bg-[#faf6ee]/80 p-8 text-center">
        <p className="font-mono text-[9px] text-[#a08060] uppercase tracking-widest mb-2">Commission</p>
        <h2 className="font-serif text-xl font-semibold text-[#2c2416] mb-2">Need a video edit?</h2>
        <p className="font-sans text-sm text-[#6b5e4a] mb-4">Let&apos;s create something cinematic together.</p>
        <Link href="/contact" id="video-cta-contact" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#d8ceba] text-[#2c2416] font-sans text-sm hover:border-[#2c2416] hover:bg-[#ede6d6] transition-colors">
          Start a Project <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
