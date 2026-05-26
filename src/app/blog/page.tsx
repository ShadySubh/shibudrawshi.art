import React from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blogs";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Blog — shibudrawshi.art",
  description: "Writings on art, design, and life.",
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-8 min-h-screen">
      <div className="border-b border-[#ddd7cc] pb-6 mb-4">
        <h1 className="font-serif text-3xl font-bold text-[#2c2a26]">Blog</h1>
        <p className="font-sans text-sm text-[#6b6560] mt-2">
          Thoughts on art, design, and life in general.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {posts.length === 0 ? (
          <p className="font-sans text-[#9c9590]">No posts found.</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-[#ddd7cc] bg-[#faf7f2] p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <time className="font-mono text-[10px] text-[#9c9590] uppercase tracking-widest">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <ArrowUpRight className="w-4 h-4 text-[#c5bfb2] group-hover:text-[#2c2a26] transition-colors" />
              </div>
              <h2 className="font-serif text-xl font-semibold text-[#2c2a26] mb-2 group-hover:underline decoration-[#ddd7cc] underline-offset-4">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-[#6b6560] leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
