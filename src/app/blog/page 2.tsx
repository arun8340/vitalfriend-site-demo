import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, updates, and insights from VitalFriend®.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section background="white" className="pt-16">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-[--color-muted]">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-[--color-border] pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold hover:text-[--color-primary] transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-[--color-muted] mb-3">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              {post.excerpt && (
                <p className="text-[--color-muted]">{post.excerpt}</p>
              )}
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
