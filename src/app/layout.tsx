import type { Metadata } from "next";
import { Lora, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RainOverlay from "@/components/RainOverlay";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "shibudrawshi.art — Graphic Designer, Video Editor & Digital Artist",
  description:
    "Portfolio of Subhasish Das (shibudrawshi) — 20-year-old self-taught artist from Assam with 5 years of experience in graphic design, video editing, and digital art.",
  keywords: ["graphic design", "video editing", "digital art", "portfolio", "Assam", "shibudrawshi"],
  openGraph: {
    title: "shibudrawshi.art",
    description: "Portfolio of Subhasish Das — Graphic Designer, Video Editor & Digital Artist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${spaceMono.variable} ${inter.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen relative">
        {/* Animated monsoon rain overlay */}
        <RainOverlay />
        <Navbar />
        <main className="pt-16 page-enter relative z-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
