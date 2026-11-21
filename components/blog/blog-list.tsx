"use client";

import { LinkPreview } from "../link-preview";
import { Subheading } from "../subheading";
import { formatPostDate } from "@/lib/format-post-date";
import type { SubstackPost } from "@/lib/substack";

type BlogListProps = {
  posts: SubstackPost[];
};

export const BlogList = ({ posts }: BlogListProps) => {
  return (
    <section className="flex flex-col gap-4">
      <Subheading>Substack</Subheading>
      <p className="text-foreground/70 text-sm">
        Notes on AI, digital work, and business. Read my Shopify guide on{" "}
        <LinkPreview
          url="https://davidjason1820.substack.com/"
          className="underline underline-offset-4"
        >
          Substack
        </LinkPreview>{" "}
        and follow along as I learn.
      </p>
      {posts.length ? (
        posts.slice(0, 3).map((post) => (
          <a
            href={post.href}
            key={post.slug}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 transition-colors duration-200 md:gap-20"
          >
            <span className="text-foreground group-hover:text-primary truncate">
              {post.title}
            </span>
            <span className="text-foreground/50 group-hover:text-primary shrink-0 font-mono text-xs font-light">
              {formatPostDate(post.publishedAt)}
            </span>
          </a>
        ))
      ) : (
        <p className="text-foreground/60 text-sm">
          No published posts are available yet. Visit my{" "}
          <LinkPreview
            url="https://davidjason1820.substack.com/"
            className="underline underline-offset-4"
          >
            Substack
          </LinkPreview>
          .
        </p>
      )}
    </section>
  );
};
