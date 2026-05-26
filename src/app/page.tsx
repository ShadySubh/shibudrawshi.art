import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Send, MessageSquare, ArrowUpRight, Play, Layers, Palette } from "lucide-react";

// ─── Label ─────────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9px] font-mono uppercase tracking-[0.22em] text-zinc-500 mb-1.5">
      {children}
    </p>
  );
}

// ─── Cell ──────────────────────────────────────────────────────────────────
function Cell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-zinc-50 border border-zinc-200 ${className}`}>
      {children}
    </div>
  );
}

// ─── Portal Card — retro numbered, no gradients ────────────────────────────
function PortalCard({
  href, label, description, icon: Icon, number, id,
}: {
  href: string; label: string; description: string;
  icon: React.ElementType; number: string; id: string;
}) {
  return (
    <Link
      href={href} id={id}
      className="group relative block border border-zinc-200 bg-zinc-50 card-hover overflow-hidden"
    >
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-400 tracking-widest">{number}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </div>
        <div className="w-9 h-9 border border-zinc-200 flex items-center justify-center bg-zinc-100 group-hover:border-zinc-400 group-hover:bg-zinc-200 transition-colors">
          <Icon className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
        </div>
        <div>
          <h3 className="font-serif text-[17px] font-semibold text-zinc-950 leading-snug group-hover:text-zinc-900 transition-colors">
            {label}
          </h3>
          <p className="mt-1 font-sans text-[11px] text-zinc-500 leading-relaxed">{description}</p>
        </div>
      </div>
      {/* Mist-green hover wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #52525b 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />
    </Link>
  );
}

// ─── Inline cat SVG ────────────────────────────────────────────────────────
function CatSilhouette() {
  return (
    <svg viewBox="0 0 40 32" fill="none" className="w-8 h-6 text-zinc-900" aria-hidden="true">
      {/* body */}
      <ellipse cx="22" cy="22" rx="11" ry="8" fill="currentColor" opacity="0.7"/>
      {/* head */}
      <circle cx="11" cy="14" r="7" fill="currentColor" opacity="0.75"/>
      {/* ears */}
      <polygon points="6,9 8,3 12,9" fill="currentColor" opacity="0.8"/>
      <polygon points="10,8 13,3 16,8" fill="currentColor" opacity="0.8"/>
      {/* tail */}
      <path d="M33 22 Q40 14 38 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.65"/>
      {/* eyes */}
      <ellipse cx="9" cy="14" rx="1.2" ry="1.4" fill="#fafafa"/>
      <ellipse cx="13" cy="14" rx="1.2" ry="1.4" fill="#fafafa"/>
    </svg>
  );
}

// ─── Inline Instagram SVG ──────────────────────────────────────────────────
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-8">

      {/* ── HERO BANNER ── */}
      <section
        id="hero"
        className="relative w-full overflow-hidden border border-zinc-200 h-[160px] md:h-[210px]"
        aria-label="Assam hills and monsoon rain hero illustration"
      >
        <Image
          src="/hero-banner.png"
          alt="Studio Ghibli illustration — Assam tea garden hills, monsoon rain, jungle, and a cat on a mossy wall"
          fill
          className="object-cover object-[center_45%]"
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 1152px"
        />

        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(30,42,30,0.16) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Gradient — left to readable, bottom mist */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a0e]/65 via-[#0e1a0e]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1e2a1e]/30 to-transparent pointer-events-none mist-drift" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/50 mb-1 hidden md:block">
            Portfolio — 2024–25
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg leading-none">
            shibudrawshi
            <span className="italic text-[#c8e8a0]">.art</span>
          </h1>
          <p className="mt-1 font-mono text-[10px] text-white/60 tracking-[0.1em]">
            Graphic Designer · Video Editor · Digital Artist
          </p>
        </div>

        {/* Corner stamp */}
        <div className="absolute top-4 right-4 px-2 py-1 bg-[#1e2a1e]/25 backdrop-blur-sm border border-white/15 text-white/65 text-[9px] font-mono tracking-widest">
          ASSAM, IN
        </div>

        {/* Cat badge bottom-right */}
        <div className="absolute bottom-4 right-5 cat-wag opacity-80">
          <CatSilhouette />
        </div>
      </section>


      {/* ── MAIN GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* ── LEFT COLUMN ── */}
        <aside className="lg:col-span-4 flex flex-col gap-3">

          {/* Profile */}
          <Cell className="flex gap-4 items-start p-4 relative overflow-hidden">
            <div className="relative shrink-0">
              <div className="relative w-[88px] h-[88px] overflow-hidden border border-zinc-200 z-10 bg-zinc-100">
                <Image
                  src="/pfp.jpg"
                  alt="Shibu — shibudrawshi"
                  fill
                  className="object-cover object-top"
                  sizes="88px"
                  priority
                />
              </div>
              {/* Animated Rubbing Cat */}
              <div className="absolute -right-6 bottom-0 z-0 text-zinc-700 cat-rub origin-bottom-left scale-75">
                <CatSilhouette />
              </div>
            </div>
            <div className="flex flex-col gap-1 min-w-0 pt-0.5 z-10 bg-zinc-50/80 backdrop-blur-sm rounded-r-md">
              <Label>Artist</Label>
              <p className="font-serif text-lg font-semibold text-zinc-950 leading-tight">
                Shibu
              </p>
              <p className="font-mono text-[10px] text-zinc-500">shibudrawshi</p>
              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-zinc-600 font-sans">
                <MapPin className="w-3 h-3 shrink-0 text-zinc-800" />
                <span>Assam, India</span>
              </div>
            </div>
          </Cell>

          {/* About */}
          <Cell className="p-4">
            <Label>About</Label>
            <p className="font-serif text-sm leading-relaxed text-zinc-700 mt-0.5">
              20-year-old self-taught artist with{" "}
              <em>5 years of experience</em> in graphic design, video editing,
              and digital art. From the rainy hills of Assam — where the
              jungle meets the sky.
            </p>
          </Cell>

          {/* NO AI Banner */}
          <div className="relative border-2 border-dashed border-zinc-400 bg-[#fdfcfb] p-5 rotate-[1deg] shadow-sm group">
            <div className="absolute top-2 right-2 border-2 border-red-700/80 rounded-full w-12 h-12 flex flex-col items-center justify-center opacity-80 rotate-[-12deg] pointer-events-none group-hover:rotate-[5deg] transition-transform duration-500">
              <span className="text-[6px] font-mono font-bold text-red-700/80 uppercase">100%</span>
              <span className="text-[7px] font-mono font-bold text-red-700/80 uppercase">Human</span>
            </div>
            <p className="font-serif font-bold text-[15px] text-zinc-900 leading-snug pr-8 relative z-10">
              I draw and create things to feel happy. All creation here was made by a human. I’m that human.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="block h-px bg-zinc-300 flex-1"></span>
              <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 bg-[#fdfcfb] px-2 relative z-10">
                NO AI GENERATION
              </p>
              <span className="block h-px bg-zinc-300 flex-1"></span>
            </div>
            {/* Texture overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
            />
          </div>

          {/* Contact */}
          <div className="border border-zinc-200 divide-y divide-zinc-200 bg-zinc-50">
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
            ].map(({ id, icon: Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-center justify-between px-3 py-2.5 hover:bg-zinc-100 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-zinc-800" />
                    <div>
                      <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">{label}</p>
                      <p className="font-sans text-[11px] text-zinc-950">{value}</p>
                    </div>
                  </div>
                  {href
                    ? <ArrowUpRight className="w-3 h-3 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                    : <span className="font-mono text-[9px] text-zinc-400 border border-zinc-200 px-1.5 py-0.5">DM</span>
                  }
                </div>
              );
              return href
                ? <a key={id} id={id} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a>
                : <div key={id} id={id}>{inner}</div>;
            })}
          </div>
          {/* Primary CTA */}
          <Link href="/contact" className="block w-full border border-zinc-200 bg-zinc-900 text-white text-center py-3 font-mono text-[11px] uppercase tracking-widest hover:bg-zinc-800 transition-colors">
            Contact Me ✦
          </Link>
          {/* Stats */}
          <div className="grid grid-cols-3 border border-zinc-200 divide-x divide-zinc-200 bg-zinc-50">
            {[{ value: "5+", label: "Years" }, { value: "20+", label: "Clients" }, { value: "3", label: "Crafts" }].map(({ value, label }) => (
              <div key={label} className="py-3 text-center">
                <p className="font-serif text-xl font-bold text-zinc-950">{value}</p>
                <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Cat window card */}
          <div className="relative overflow-hidden border border-zinc-200 group card-hover">
            <div className="relative h-44">
              <Image
                src="/cat-window.png"
                alt="Cat watching monsoon rain over Assam hills"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a1e]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-white/70">Assam · Monsoon</p>
                <p className="font-serif text-sm italic text-white/90 leading-snug">
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
            <Label>Skills & Tools</Label>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Figma", "Procreate", "DaVinci Resolve", "Clip Studio Paint"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 font-mono text-[10px] border border-zinc-200 bg-zinc-100 text-zinc-700 tracking-wide"
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
              <Link href="/graphic-designs" className="font-mono text-[9px] text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1 uppercase tracking-wider">
                View All <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {["/slides1.webp", "/slides2.jpg", "/slides3.jpg", "/slides4.jpg", "/slides5.jpg"].map((src, i) => (
                <Link key={i} href="/graphic-designs" className="group relative aspect-[4/5] overflow-hidden border border-zinc-200 bg-zinc-100">
                  <Image
                    src={src}
                    alt={`Graphic design preview ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[25%] group-hover:grayscale-0"
                    sizes="(max-width: 640px) 20vw, 12vw"
                  />
                </Link>
              ))}
            </div>
          </Cell>

          {/* Atmosphere note */}
          <div className="border border-zinc-200 bg-zinc-50 p-5 flex items-start gap-4">
            <div className="cat-wag shrink-0 mt-1">
              <CatSilhouette />
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-1">Currently</p>
              <p className="font-serif text-sm text-zinc-800 leading-relaxed italic">
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
