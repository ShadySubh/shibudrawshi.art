import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — shibudrawshi.art`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-8 min-h-screen">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#9c9590] hover:text-[#2c2a26] transition-colors self-start mb-4"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to articles
      </Link>

      <article className="border border-[#ddd7cc] bg-[#faf7f2] p-6 md:p-10">
        <header className="mb-10 border-b border-[#ddd7cc] pb-8 text-center">
          <time className="font-mono text-[11px] text-[#9c9590] uppercase tracking-widest block mb-4">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2c2a26] leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-stone prose-a:text-[#2c2a26] hover:prose-a:text-[#6b6560] prose-headings:font-serif prose-p:font-sans mx-auto max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
