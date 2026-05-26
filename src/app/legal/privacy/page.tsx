import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — shibudrawshi.art",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-8">
      <div className="flex flex-col gap-4 border-b border-[#ddd7cc] pb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#9c9590] hover:text-[#2c2a26] transition-colors w-fit uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#9c9590] mb-2">Legal</p>
          <h1 className="font-serif text-4xl font-bold text-[#2c2a26]">Privacy Policy</h1>
        </div>
      </div>

      <div className="prose prose-stone max-w-none bg-[#faf7f2] border border-[#ddd7cc] p-8">
        <p>
          We collect basic client information (name, email address, and project requirements) strictly for the purpose of communication and delivering custom digital media services.
        </p>
        <p>
          We do not sell or share your data with third-party data brokers. All payments are processed securely via encrypted third-party gateways (Razorpay), and we do not store your bank or credit card details on our servers.
        </p>
      </div>
    </div>
  );
}
