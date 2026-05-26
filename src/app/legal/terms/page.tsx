import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — shibudrawshi.art",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-8">
      <div className="flex flex-col gap-4 border-b border-[#ddd7cc] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#9c9590] hover:text-[#2c2a26] transition-colors w-fit uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9c9590] mb-2">Legal</p>
          <h1 className="font-serif text-4xl font-bold text-[#2c2a26]">Terms &amp; Conditions</h1>
        </div>
      </div>

      <div className="prose prose-stone max-w-none bg-[#faf7f2] border border-[#ddd7cc] p-8">
        <p>
          By commissioning Subhasish Das for digital art, video editing, or graphic design services, you agree to these terms.
        </p>
        <ul>
          <li>All deliverables are digital products — no physical goods are shipped.</li>
          <li>Payment must be completed before final files are handed over.</li>
          <li>The creator retains the right to display completed work in their portfolio.</li>
        </ul>
      </div>
    </div>
  );
}
