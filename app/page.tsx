import type { Metadata } from "next";
import Container from "@/components/container";
import { Header } from "@/components/header";
import { Work } from "@/components/work";
import { DottedSeparator } from "@/components/separator";
import { Companies } from "@/components/companies";
import { BlogList } from "@/components/blog/blog-list";
import { WorkWithMe } from "@/components/work-with-me";
import { getSubstackPosts } from "@/lib/substack";

export const metadata: Metadata = {
  title: "David Jason",
  description:
    "I help you put AI and digital tools to work in your business, and share what I build and learn.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const posts = await getSubstackPosts();
  return (
    <Container>
      <Header />
      <DottedSeparator className="my-10" />
      <Work />
      <DottedSeparator className="my-10" />
      <Companies />
      <DottedSeparator className="my-10" />
      <WorkWithMe />
      <DottedSeparator className="my-10" />
      <BlogList posts={posts} />
      <DottedSeparator className="my-10" />
    </Container>
  );
}
