import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, MessageSquare, ArrowUpRight, Play, Layers, Palette } from "lucide-react";

/* ─── Design tokens (inline for clarity) ───────────────────────── */
const t = {
  bg:      "#faf7f2",
  hover:   "#eee9e0",
  border:  "#ddd7cc",
  bStrong: "#c5bfb2",
  ink:     "#2c2a26",
  mid:     "#6b6560",
  muted:   "#9c9590",
  moss:    "#5a7a5a",
  mossSoft:"#8aaa8e",
  rose:    "#b08888",
} as const;

/* ─── Label ────────────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className={`text-[9px] font-mono uppercase tracking-[0.22em] text-[${t.muted}] mb-1.5`}
       style={{ color: t.muted }}>
      {children}
    </p>
  );
}

/* ─── Cell ─────────────────────────────────────────────────────── */
function Cell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border bg-[#faf7f2] border-[#ddd7cc] ${className}`}>
      {children}
    </div>
  );
}

/* ─── Portal Card ──────────────────────────────────────────────── */
function PortalCard({
  href, label, description, icon: Icon, number, id,
}: {
  href: string; label: string; description: string;
  icon: React.ElementType; number: string; id: string;
}) {
  return (
    <Link
      href={href} id={id}
      className="group relative block border border-[#ddd7cc] bg-[#faf7f2] card-hover overflow-hidden"
    >
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#c5bfb2] tracking-widest">{number}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#c5bfb2] group-hover:text-[#2c2a26] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </div>
        <div className="w-9 h-9 border border-[#ddd7cc] flex items-center justify-center bg-[#eee9e0] group-hover:border-[#c5bfb2] transition-colors">
          <Icon className="w-4 h-4 text-[#6b6560] group-hover:text-[#2c2a26] transition-colors" />
        </div>
        <div>
          <h3 className="font-serif text-[17px] font-semibold text-[#2c2a26] leading-snug">
            {label}
          </h3>
          <p className="mt-1 font-sans text-[11px] text-[#9c9590] leading-relaxed">{description}</p>
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #2c2a26 1px, transparent 1px)", backgroundSize: "18px 18px" }}
      />
    </Link>
  );
}

/* ─── Instagram icon (inline SVG) ──────────────────────────────── */
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

/* ─── Ghibli Cat — animated companion ──────────────────────────── */
function GhibliCat() {
  return (
    <svg viewBox="0 0 48 56" className="w-11 h-[52px] text-[#2c2a26]" aria-hidden="true">
      {/* Tail */}
      <g className="cat-tail">
        <path d="M38 40 Q46 30 44 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.75"/>
      </g>
      {/* Body */}
      <g className="cat-breathe">
        <ellipse cx="24" cy="40" rx="12" ry="9" fill="currentColor" opacity="0.82"/>
      </g>
      {/* Head */}
      <circle cx="24" cy="22" r="11" fill="currentColor" opacity="0.88"/>
      {/* Left ear */}
      <polygon points="16,16 13,4 21,14" fill="currentColor" opacity="0.88"/>
      {/* Right ear */}
      <polygon points="32,16 35,4 27,14" fill="currentColor" opacity="0.88"/>
      {/* Inner ears — rose tint */}
      <polygon points="16.5,15 14,6 20,13" fill="#b08888" opacity="0.2"/>
      <polygon points="31.5,15 34,6 28,13" fill="#b08888" opacity="0.2"/>
      {/* Eyes */}
      <g className="cat-blink">
        <ellipse cx="19.5" cy="21.5" rx="2.2" ry="2.6" fill="#faf7f2"/>
        <ellipse cx="28.5" cy="21.5" rx="2.2" ry="2.6" fill="#faf7f2"/>
        {/* Pupils */}
        <ellipse cx="19.5" cy="21.5" rx="1" ry="1.8" fill="#2c2a26"/>
        <ellipse cx="28.5" cy="21.5" rx="1" ry="1.8" fill="#2c2a26"/>
        {/* Eye shine */}
        <circle cx="20.2" cy="20.5" r="0.6" fill="#faf7f2" opacity="0.8"/>
        <circle cx="29.2" cy="20.5" r="0.6" fill="#faf7f2" opacity="0.8"/>
      </g>
      {/* Nose */}
      <polygon points="24,25 22.5,27 25.5,27" fill="#b08888" opacity="0.5"/>
      {/* Mouth */}
      <path d="M22.5 27.5 Q24 29 25.5 27.5" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.3"/>
      {/* Whiskers */}
      <line x1="12" y1="24" x2="18" y2="25" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
      <line x1="12" y1="27" x2="18" y2="27" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
      <line x1="36" y1="24" x2="30" y2="25" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
      <line x1="36" y1="27" x2="30" y2="27" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
      {/* Front paws */}
      <ellipse cx="19" cy="47" rx="4" ry="2" fill="currentColor" opacity="0.82"/>
      <ellipse cx="29" cy="47" rx="4" ry="2" fill="currentColor" opacity="0.82"/>
    </svg>
  );
}

/* ─── Home Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-8">

      {/* ── HERO BANNER ── */}
      <section
        id="hero"
        className="relative w-full overflow-hidden border border-[#ddd7cc] h-[160px] md:h-[220px]"
        aria-label="Assam hills and monsoon rain illustration"
      >
        <Image
          src="/hero-banner.png"
          alt="Studio Ghibli — Assam tea garden hills in monsoon rain"
          fill
          className="object-cover object-[center_45%]"
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 1152px"
        />

        {/* Gradient — bottom mist for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1e1a]/55 via-[#1a1e1a]/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a1e1a]/25 to-transparent pointer-events-none mist-drift" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/45 mb-1 hidden md:block">
            Portfolio — 2024–25
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg leading-none">
            shibudrawshi
            <span className="italic text-[#c8e8a0]">.art</span>
          </h1>
          <p className="mt-1 font-mono text-[10px] text-white/55 tracking-[0.1em]">
            Graphic Designer · Video Editor · Digital Artist
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* ── LEFT COLUMN ── */}
        <aside className="lg:col-span-4 flex flex-col gap-3">

          {/* Profile + Cat */}
          <Cell className="flex gap-4 items-start p-4">
            <div className="relative shrink-0">
              {/* PFP */}
              <div className="relative w-[80px] h-[80px] overflow-hidden border border-[#ddd7cc] bg-[#eee9e0]">
                <Image
                  src="/pfp.jpg"
                  alt="Shibu — shibudrawshi"
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 pt-0.5">
              <Label>Artist</Label>
              <p className="font-serif text-lg font-semibold text-[#2c2a26] leading-tight">
                Shibu
              </p>
              <p className="font-mono text-[10px] text-[#9c9590]">shibudrawshi</p>
              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#6b6560] font-sans">
                <MapPin className="w-3 h-3 shrink-0 text-[#2c2a26]" />
                <span>Assam, India</span>
              </div>
            </div>
          </Cell>

          {/* About */}
          <Cell className="p-4">
            <Label>About</Label>
            <p className="font-serif text-sm leading-relaxed text-[#6b6560] mt-0.5">
              20-year-old self-taught artist with{" "}
              <em className="text-[#2c2a26]">5 years of experience</em> in graphic design, video editing,
              and digital art. From the rainy hills of Assam — where the
              jungle meets the sky.
            </p>
          </Cell>

          {/* NO AI Manifesto — pull-quote style */}
          <div className="border border-[#ddd7cc] bg-[#faf7f2] relative overflow-hidden">
            {/* Moss-green accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#5a7a5a]" />
            <div className="p-5 pl-6">
              <p className="font-serif italic text-[14px] text-[#2c2a26] leading-relaxed">
                &ldquo;I draw and create things to feel happy. All creation here was made by a human. I&rsquo;m that human.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5a7a5a]" />
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#9c9590]">
                  No AI · All Human
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="border border-[#ddd7cc] divide-y divide-[#ddd7cc] bg-[#faf7f2]">
            <div className="px-3 py-2"><Label>Contact</Label></div>
            {[
              {
                id: "contact-email", icon: Mail, label: "Email",
                value: "dassubhasish595@gmail.com", href: "mailto:dassubhasish595@gmail.com",
              },
              {
                id: "contact-whatsapp", icon: MessageSquare, label: "WhatsApp",
                value: "+91 6026764236", href: "https://wa.me/916026764236",
              },
              {
                id: "contact-instagram", icon: InstagramIcon, label: "Instagram",
                value: "@shibudrawshi.art", href: "https://instagram.com/shibudrawshi.art",
              },
            ].map(({ id, icon: Icon, label, value, href }) => (
              <a key={id} id={id} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <div className="flex items-center justify-between px-3 py-2.5 hover:bg-[#eee9e0] transition-colors group cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-[#2c2a26]" />
                    <div>
                      <p className="font-mono text-[9px] text-[#c5bfb2] uppercase tracking-wider">{label}</p>
                      <p className="font-sans text-[11px] text-[#2c2a26]">{value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#c5bfb2] group-hover:text-[#2c2a26] transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* Primary CTA */}
          <Link href="/contact" className="block w-full border border-[#ddd7cc] bg-[#2c2a26] text-[#faf7f2] text-center py-3 font-mono text-[11px] uppercase tracking-widest hover:bg-[#3d3b36] transition-colors">
            Contact Me ✦
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-3 border border-[#ddd7cc] divide-x divide-[#ddd7cc] bg-[#faf7f2]">
            {[{ value: "5+", label: "Years" }, { value: "20+", label: "Clients" }, { value: "3", label: "Crafts" }].map(({ value, label }) => (
              <div key={label} className="py-3 text-center">
                <p className="font-serif text-xl font-bold text-[#2c2a26]">{value}</p>
                <p className="font-mono text-[9px] text-[#9c9590] uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Cat window card */}
          <div className="relative overflow-hidden border border-[#ddd7cc] group card-hover">
            <div className="relative h-44">
              <Image
                src="/cat-window.png"
                alt="Cat watching monsoon rain over Assam hills"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1e1a]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-white/65">Assam · Monsoon</p>
                <p className="font-serif text-sm italic text-white/85 leading-snug">
                  &ldquo;The hills remember every raindrop.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* ── RIGHT COLUMN ── */}
        <div className="lg:col-span-8 flex flex-col gap-5">

          {/* Skills */}
          <Cell className="p-4">
            <Label>Skills &amp; Tools</Label>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Figma", "Procreate", "DaVinci Resolve", "Clip Studio Paint"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 font-mono text-[10px] border border-[#ddd7cc] bg-[#eee9e0] text-[#6b6560] tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Cell>

          {/* Work Categories */}
          <div>
            <Label>Work Categories</Label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <PortalCard id="portal-video-edits"     href="/video-edits"     label="Video Edits"     description="YouTube productions, motion graphics, and cinematic thumbnails." icon={Play}    number="01" />
              <PortalCard id="portal-graphic-designs" href="/graphic-designs" label="Graphic Designs" description="Posters, social media, brand identities, and editorial layouts."    icon={Layers}  number="02" />
              <PortalCard id="portal-digital-art"     href="/digital-art"     label="Digital Art"     description="Illustrations and character designs — coming soon."                icon={Palette} number="03" />
            </div>
          </div>

          {/* Recent Work */}
          <Cell className="p-4">
            <div className="flex items-center justify-between mb-3">
              <Label>Recent Work</Label>
              <Link href="/graphic-designs" className="font-mono text-[9px] text-[#9c9590] hover:text-[#2c2a26] transition-colors flex items-center gap-1 uppercase tracking-wider">
                View All <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {["/slides1.webp", "/slides2.jpg", "/slides3.jpg", "/slides4.jpg", "/slides5.jpg"].map((src, i) => (
                <Link key={i} href="/graphic-designs" className="group relative aspect-[4/5] overflow-hidden border border-[#ddd7cc] bg-[#eee9e0]">
                  <Image
                    src={src}
                    alt={`Graphic design preview ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%] group-hover:grayscale-0"
                    sizes="(max-width: 640px) 20vw, 12vw"
                  />
                </Link>
              ))}
            </div>
          </Cell>

          {/* Atmosphere note */}
          <div className="border border-[#ddd7cc] bg-[#faf7f2] p-5 flex items-start gap-4">
            <div className="shrink-0 mt-0.5 opacity-70">
              <GhibliCat />
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-[#9c9590] mb-1">Currently</p>
              <p className="font-serif text-sm text-[#6b6560] leading-relaxed italic">
                Drawing in the studio while the monsoon drums on the rooftop,
                somewhere in the green hills of Assam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
