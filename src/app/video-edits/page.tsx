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
  {
    id: "v01",
    title: "Gaming Highlight Reel",
    type: "YouTube Edit",
    thumbnail: "/thumbnail01.png",
    tags: ["Gaming", "Motion"],
    previewUrl: "https://drive.google.com/file/d/10jvsok6dqVOXd51aMaGj-JWBM1uxIZmc/view?usp=drive_link",
  },
  {
    id: "v02",
    title: "Tournament Promo",
    type: "Promo Video",
    thumbnail: "/thumbnail02(1).png",
    tags: ["Esports", "Thumb"],
    previewUrl: "https://drive.google.com/file/d/1Wz0IIrcD5uOIvfjaQ9IskWoyyfBjZ-iY/view?usp=drive_link",
  },
  {
    id: "v03",
    title: "Cinematic Montage",
    type: "Montage",
    thumbnail: "/thumbnail02.png",
    tags: ["Cinematic", "Color"],
    previewUrl: "https://drive.google.com/file/d/1nEGe090HFXHGwFnbrtGVmE3Y6N6MIlSY/view?usp=drive_link",
  },
  {
    id: "v04",
    title: "Event Highlights",
    type: "Event Edit",
    thumbnail: "/thumbnail05.png",
    tags: ["Event", "Cut"],
    previewUrl: "https://drive.google.com/file/d/10y_rMEOVm5JCsaxjqyJSzGtk3WqUbc0a/view?usp=drive_link",
  },
  {
    id: "v05",
    title: "Brand Commercial",
    type: "Commercial",
    thumbnail: "/thumbnail06.png",
    tags: ["Brand", "Ad"],
    previewUrl: "https://drive.google.com/file/d/1TA55qVNEbeCLd8XSE3v1FMnIr4kGvjBZ/view?usp=drive_link",
  },
  {
    id: "v06",
    title: "Vlog Montage",
    type: "Vlog",
    thumbnail: "/thumbnail07.png",
    tags: ["Vlog", "Travel"],
    previewUrl: "https://drive.google.com/file/d/1UPaWUcWhOnwzNJRin8L3jE9Qnx8AYKxN/view?usp=drive_link",
  },
];

export default function VideoEdits() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-7 page-enter">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#ddd7cc] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#9c9590] hover:text-[#2c2a26] transition-colors w-fit uppercase tracking-wider" id="back-to-home">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9c9590] mb-1">Portfolio · 01</p>
            <h1 className="font-serif text-4xl font-bold text-[#2c2a26]">Video Edits</h1>
            <p className="mt-1 font-mono text-[10px] text-[#9c9590]">{videoProjects.length} projects</p>
          </div>
          <p className="font-sans text-sm text-[#6b6560] max-w-xs leading-relaxed">
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
                ? "border-[#2c2a26] bg-[#2c2a26] text-[#faf7f2]"
                : "border-[#ddd7cc] text-[#9c9590] hover:border-[#2c2a26] hover:text-[#2c2a26]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid — 9:16 thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {videoProjects.map((project, i) => (
          <a
            key={project.id}
            id={`video-${project.id}`}
            href={project.previewUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block border border-[#ddd7cc] bg-[#faf7f2] overflow-hidden card-hover"
          >
            <div className="relative aspect-[9/16] bg-[#eee9e0] overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Centered glassmorphic play button */}
              <div className="absolute inset-0 bg-[#2c2a26]/10 group-hover:bg-[#2c2a26]/35 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#faf7f2]/40 bg-[#faf7f2]/15 backdrop-blur-[2px] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#faf7f2]/25 group-hover:border-[#faf7f2]/60 group-hover:shadow-lg transition-all duration-300">
                  <Play className="w-4 h-4 text-[#faf7f2] fill-[#faf7f2] translate-x-[1.5px]" />
                </div>
              </div>
              {/* Index */}
              <div className="absolute top-2 left-2 font-mono text-[9px] px-1.5 py-0.5 bg-[#2c2a26]/30 backdrop-blur-sm text-[#faf7f2]/80">
                {(i + 1).toString().padStart(2, "0")}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="border border-[#ddd7cc] bg-[#faf7f2] p-8 text-center">
        <p className="font-mono text-[9px] text-[#9c9590] uppercase tracking-widest mb-2">Commission</p>
        <h2 className="font-serif text-xl font-semibold text-[#2c2a26] mb-2">Need a video edit?</h2>
        <p className="font-sans text-sm text-[#6b6560] mb-4">Let&apos;s create something cinematic together.</p>
        <Link href="/contact" id="video-cta-contact" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#ddd7cc] text-[#2c2a26] font-sans text-sm hover:border-[#c5bfb2] hover:bg-[#eee9e0] transition-colors">
          Start a Project <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
