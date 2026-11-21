import type { Metadata } from "next";
import Container from "@/components/container";
import { Companies } from "@/components/companies";
import { CopyEmailInline } from "@/components/copy-email-inline";
import { DottedSeparator } from "@/components/separator";
import { Focus } from "@/components/focus";
import { Subheading } from "@/components/subheading";

export const metadata: Metadata = {
  title: "Free Audit - David Jason",
  description:
    "Get a free, practical review of your digital presence from David Jason.",
  alternates: {
    canonical: "/sponsor",
  },
};

export default function FreeAuditPage() {
  return (
    <>
      <Container className="min-h-screen">
        <Subheading className="mt-4">Free Audit</Subheading>
        <div className="text-foreground pt-4 text-base">
          Want your website to work harder? Get a free 3-point review, delivered
          within 24 hours.
        </div>
        <div className="text-foreground pt-4 text-base">
          I’ll review your website and point out what may be confusing visitors
          or costing you opportunities. Send the link—no call or fee required.
        </div>
        <div className="text-foreground pt-4 text-base">
          Send your website link to{" "}
          <CopyEmailInline email="davidjason1820@gmail.com">
            davidjason1820@gmail.com
          </CopyEmailInline>
          .
        </div>
        <DottedSeparator className="my-8" />
        <Focus />
        <DottedSeparator className="my-8" />
        <Companies />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </>
  );
}
