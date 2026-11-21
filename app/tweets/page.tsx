import type { Metadata } from "next";
import Script from "next/script";
import { Subheading } from "@/components/subheading";
import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";
import { LinkPreview } from "@/components/link-preview";

export const metadata: Metadata = {
  title: "Tweets - David Jason",
  description:
    "Recent public posts from David Jason on X about AI, digital work, and business.",
  alternates: {
    canonical: "/tweets",
  },
};

export default function TweetsPage() {
  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
      <Container>
        <Subheading>I share what I build and learn on X.</Subheading>
        <p className="text-foreground pt-4 text-base text-balance">
          I share ideas on AI, digital work, business, and what I’m learning as
          I build.
        </p>
      </Container>

      <Container>
        <div className="mt-8 mb-20 min-h-80 w-full overflow-hidden rounded-lg">
          <a
            className="twitter-timeline"
            data-tweet-limit="10"
            data-chrome="noheader nofooter noborders transparent"
            data-theme="light"
            href="https://x.com/davidjason1820"
          >
            Posts by @davidjason1820
          </a>
          <Script
            async
            src="https://platform.twitter.com/widgets.js"
            strategy="afterInteractive"
          />
          <p className="text-foreground/60 mt-4 text-sm">
            If the timeline does not load, view my posts directly on{" "}
            <LinkPreview
              url="https://x.com/davidjason1820"
              className="underline underline-offset-4"
            >
              X
            </LinkPreview>
            .
          </p>
        </div>
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </div>
  );
}
