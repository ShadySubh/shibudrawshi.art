import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — shibudrawshi.art",
};

export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-8">
      <div className="flex flex-col gap-4 border-b border-[#ddd7cc] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#9c9590] hover:text-[#2c2a26] transition-colors w-fit uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9c9590] mb-2">Legal</p>
          <h1 className="font-serif text-4xl font-bold text-[#2c2a26]">Refund &amp; Cancellation Policy</h1>
        </div>
      </div>

      <div className="prose prose-stone max-w-none bg-[#faf7f2] border border-[#ddd7cc] p-8">
        <h3>Cancellations</h3>
        <p>
          Clients may request a cancellation within 24 hours of initiating a project, provided that work has not yet commenced.
        </p>

        <h3>Refunds</h3>
        <p>
          Due to the custom, digital nature of graphic design and video editing services, all sales are final. No refunds will be issued once initial concepts, rough drafts, or final digital files have been delivered.
        </p>

        <h3>Process</h3>
        <p>
          If a cancellation is approved before work begins, refunds will be credited back to the original payment method within 5-7 business days.
        </p>
      </div>
    </div>
  );
}
