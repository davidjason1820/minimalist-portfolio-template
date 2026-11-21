import React from "react";
import { Box } from "./box";
import Link from "next/link";
import { Subheading } from "./subheading";
import { FhgMark, NeoLifeMark, SubstackMark } from "./icons/custom";

const workItems = [
  {
    href: "https://faithheroicgeneration.com/",
    title: "Fhg",
    description: "I lead a team helping young people build skills.",
    icon: (
      <FhgMark className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "",
  },
  {
    href: "https://shopneolife.com/davidjason1820",
    title: "NeoLife",
    description: "I market NeoLife wellness products.",
    icon: (
      <NeoLifeMark className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
  },
  {
    href: "https://davidjason1820.substack.com/",
    title: "Substack",
    description: "I write about AI, digital work, and growth.",
    icon: (
      <SubstackMark className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "bg-linear-to-b from-red-400 to-red-600 ring-offset-red-500",
  },
];

export const Work = () => {
  return (
    <div>
      <Subheading>What I do</Subheading>
      <div className="mt-4 flex flex-col gap-6 md:gap-4">
        {workItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2"
          >
            <Box className={`mr-4 ${item.boxClassName}`}>{item.icon}</Box>
            <p className="text-foreground font-medium">{item.title}</p>
            <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
            <p className="text-foreground/70">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
