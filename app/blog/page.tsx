import type { Metadata } from "next";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { BlogIndex, type BlogIndexPost } from "@/components/blog/blog-index";
import { getSubstackPosts } from "@/lib/substack";
import { LinkPreview } from "@/components/link-preview";

export const metadata: Metadata = {
  title: "Blog - David Jason",
  description:
    "AI, digital work, business, and lessons I’m learning along the way.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = (await getSubstackPosts()) as BlogIndexPost[];

  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">
          AI, digital work & what I’m learning
        </Subheading>
        <p className="text-foreground pt-4 text-base">
          I write about AI, digital work, business, and lessons I’m learning
          along the way on{" "}
          <LinkPreview
            url="https://davidjason1820.substack.com/"
            className="underline underline-offset-4"
          >
            Substack
          </LinkPreview>
          .
        </p>

        {posts.length ? (
          <BlogIndex posts={posts} />
        ) : (
          <p className="text-foreground/70 mt-6 text-sm">
            Read my Shopify guide on{" "}
            <LinkPreview
              url="https://davidjason1820.substack.com/"
              className="underline underline-offset-4"
            >
              Substack
            </LinkPreview>
            , then follow along as I explore AI and digital work.
          </p>
        )}
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </section>
  );
}
