import React from "react";
import { LinkPreview } from "./link-preview";

export const Header = () => {
  return (
    <div>
      <div className="text-foreground pt-4 text-base">
        I help you put AI and digital tools to work in your business, and share
        what I build and learn on{" "}
        <LinkPreview url="https://x.com/davidjason1820">X</LinkPreview>.
      </div>
      <div className="text-foreground pt-4 text-base">
        I write about AI, digital work, and simple ways to build better online
        experiences on{" "}
        <LinkPreview url="https://davidjason1820.substack.com/">
          Substack
        </LinkPreview>
        .
      </div>
      <div className="text-foreground pt-4 text-base">
        Since 2022, I’ve worked across digital skills, marketing, and
        business—helping people turn ideas into useful work.
      </div>
    </div>
  );
};
