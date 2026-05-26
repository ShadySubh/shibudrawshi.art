"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Send, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

const contactMethods = [
  {
    id: "contact-email",
    icon: Mail,
    label: "Email",
    value: "shibudrawshi@gmail.com",
    href: "mailto:shibudrawshi@gmail.com",
    description: "Best for project inquiries & commissions",
  },
  {
    id: "contact-telegram",
    icon: Send,
    label: "Telegram",
    value: "@shadysish",
    href: "https://t.me/shadysish",
    description: "Quick chats and project updates",
  },
  {
    id: "contact-discord",
    icon: MessageSquare,
    label: "Discord",
    value: "@subh2200",
    href: undefined,
    description: "DM on Discord for collab",
  },
];

// Shared input class
const inputCls =
  "w-full px-3 py-2.5 border border-[#d8ceba] bg-[#f5f0e8] font-mono text-sm text-[#2c2416] placeholder:text-[#c8b89a] focus:outline-none focus:border-[#8a7a60] transition-colors";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-7">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#d8ceba] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#a08060] hover:text-[#2c2416] transition-colors w-fit uppercase tracking-wider" id="back-to-home">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#a08060] mb-1">Get in Touch</p>
            <h1 className="font-serif text-4xl font-bold text-[#2c2416]">Contact</h1>
          </div>
          <p className="font-sans text-sm text-[#6b5e4a] max-w-xs leading-relaxed">
            Ready to start a project or just want to say hi? Pick any channel below.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* LEFT — contact methods + info */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#a08060]">Reach Me At</p>

          {/* Contact method cards */}
          <div className="border border-[#d8ceba] divide-y divide-[#e8e0d0] bg-[#faf6ee]/80">
            {contactMethods.map(({ id, icon: Icon, label, value, href, description }) => {
              const inner = (
                <div className="flex items-start gap-3 px-4 py-3 hover:bg-[#f0ece2] transition-colors group cursor-pointer">
                  <div className="w-7 h-7 border border-[#d8ceba] flex items-center justify-center bg-[#f0ece2] shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#8a7a60]" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-[#a08060] uppercase tracking-wider">{label}</p>
                    <p className="font-sans text-[13px] text-[#2c2416] font-medium">{value}</p>
                    <p className="font-sans text-[11px] text-[#a08060] mt-0.5">{description}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={id} id={id} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={id} id={id}>{inner}</div>
              );
            })}
          </div>

          {/* Info dossier */}
          <div className="border border-[#d8ceba] bg-[#faf6ee]/80">
            <div className="px-4 py-2 border-b border-[#d8ceba]">
              <p className="font-mono text-[9px] uppercase tracking-wider text-[#a08060]">Artist Details</p>
            </div>
            <div className="divide-y divide-[#e8e0d0]">
              {[
                { label: "Based In",      value: "Assam, India" },
                { label: "Experience",    value: "5+ Years" },
                { label: "Availability",  value: "Open to Work" },
                { label: "Response",      value: "Within 24h" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-2.5">
                  <span className="font-mono text-[10px] text-[#a08060] uppercase tracking-wide">{label}</span>
                  <span className="font-sans text-[12px] text-[#2c2416]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="lg:col-span-8">
          <div className="border border-[#d8ceba] bg-[#faf6ee]/80">
            {/* Form header rule */}
            <div className="px-6 py-3 border-b border-[#d8ceba]">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#a08060]">Send a Message</p>
            </div>

            {formState === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center px-6">
                <CheckCircle className="w-10 h-10 text-[#8aaa8e]" />
                <h2 className="font-serif text-xl font-semibold text-[#2c2416]">Message Sent ✦</h2>
                <p className="font-sans text-sm text-[#6b5e4a] max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setFormState("idle"); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-3 px-4 py-2 font-mono text-[10px] uppercase tracking-wider border border-[#d8ceba] text-[#6b5e4a] hover:border-[#8a7a60] hover:text-[#2c2416] transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form action="https://formspree.io/f/xvzywywn" method="POST" className="p-6 flex flex-col gap-5" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="font-mono text-[9px] uppercase tracking-wider text-[#a08060]">Your Name *</label>
                    <input id="contact-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Subhasish Das" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email-field" className="font-mono text-[9px] uppercase tracking-wider text-[#a08060]">Your Email *</label>
                    <input id="contact-email-field" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputCls} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-subject" className="font-mono text-[9px] uppercase tracking-wider text-[#a08060]">Subject *</label>
                  <select id="contact-subject" name="subject" required value={formData.subject} onChange={handleChange} className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select a topic…</option>
                    <option value="video-edit">Video Edit Commission</option>
                    <option value="graphic-design">Graphic Design Commission</option>
                    <option value="digital-art">Digital Art Commission</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="font-mono text-[9px] uppercase tracking-wider text-[#a08060]">Message *</label>
                  <textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell me about your project, vision, or just say hi…" className={`${inputCls} resize-none leading-relaxed`} />
                </div>

                <div className="flex justify-end border-t border-[#d8ceba] pt-4">
                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={formState === "sending"}
                    className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#2c2416] bg-[#2c2416] text-[#f5f0e8] font-mono text-[11px] uppercase tracking-wider hover:bg-[#4a3c28] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Send Message ✦
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
