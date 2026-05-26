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
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-zinc-500 hover:text-zinc-900 transition-colors w-fit uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-500 mb-2">Legal</p>
          <h1 className="font-serif text-4xl font-bold text-zinc-950">Refund & Cancellation Policy</h1>
        </div>
      </div>

      <div className="prose prose-zinc max-w-none bg-zinc-50 border border-zinc-200 p-8">
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
